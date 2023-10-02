import admin from "firebase-admin";
import FIREBASE_SERVICE_CRED from './serviceCred.js';
import client from './mongoClientConnection.js';

admin.initializeApp({
    credential: admin.credential.cert(FIREBASE_SERVICE_CRED)
});

// verifies if token is valid
const verifyToken = async (token) => {
    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        return decodedToken.uid;
    } catch (error) {
        throw new Error('Token verification failed');
    }
};

// todo: turn this into a function that returns headers
// based on the route for a more secure appication
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
};


/**
 * @param {Object} event 
 * @param {Function} postRequesthandler 
 * @param {Function} getRequestHandler 
 * @param {Function} updateRequestHandler 
 * @param {Function} deleteRequestHandler 
 * @returns 
 */
export const requestHandler = async (event, context, postRequesthandler, getRequestHandler, updateRequestHandler, deleteRequestHandler) => {
    if (context) {
        context.callbackWaitsForEmptyEventLoop = false;
    }

    await client.connect();
    
    let response;
    // Handle OPTIONS requests (CORS preflight)
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 204,
            headers
        };
    }

    // check if token is present
    let token = event.headers.Authorization;
    if (!token || !token.startsWith('Bearer ')) {
        return {
            statusCode: 401,
            headers,
            body: JSON.stringify({ message: 'Authorization header missing or invalid' })
        };
    }
    // extract token and uid
    token = token.replace('Bearer ', '');
    const uid = await verifyToken(token);

    // handle request based on http method
    try {
        switch (event.httpMethod) {
            case 'POST':
                response = await postRequesthandler(event, uid, client);
                break;
            case 'GET':
                response = await getRequestHandler(event, uid, client);
                break;
            case 'PUT':
                response = await updateRequestHandler(event, uid, client);
                break;
            case 'DELETE':
                response = await deleteRequestHandler(event, uid, client);
                break;
            default:
                throw new Error(`Unsupported HTTP method: ${event.httpMethod}`);
        }
    } catch (err) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ message: err.message || "Internal Server Error" })
        };
    }

    return {
        headers,
        ...response
    };
}