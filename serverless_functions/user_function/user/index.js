import { addUser } from './addUser.js';
import { getUserByUid } from './getUser.js';
import admin from "firebase-admin";
import FIREBASE_SERVICE_CRED from './serviceCred.js';

admin.initializeApp({
  credential: admin.credential.cert(FIREBASE_SERVICE_CRED)
});

const verifyToken = async (token) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken.uid;
  } catch (error) {
    throw new Error('Token verification failed');
  }
};

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Headers": "Content-Type,Authorization",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
};

export const handler = async (event) => {
  let response;

  // Handle OPTIONS requests (CORS preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers
    };
  }

  let token = event.headers.Authorization;
  if (!token || !token.startsWith('Bearer ')) {
    return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ message: 'Authorization header missing or invalid' })
    };
  }
  token = token.replace('Bearer ', '');
  const uid = await verifyToken(token);

  try {
    switch (event.httpMethod) {
      case 'POST':
        const data = JSON.parse(event.body).user;
        response = await addUser(data);
        break;
      case 'GET':
        response = await getUserByUid(uid);
        break;
      case 'PUT':
        response = {
          statusCode: 200,
          body: JSON.stringify({ message: "PUT request handled" })
        };
        break;
      case 'DELETE':
        response = {
          statusCode: 200,
          body: JSON.stringify({ message: "DELETE request handled" })
        };
        break;
      default:
        throw new Error(`Unsupported HTTP method: ${event.httpMethod}`);
    }
  } catch (err) {
    return {
      statusCode: 540,
      headers,
      body: JSON.stringify({ message: err.message || "Internal Server Error" })
    };
  }

  return {
    headers,
    ...response
  };
};
