import { addUser } from './addUser.js';
import { getUserByUid } from './getUser.js';
import admin from "firebase-admin";
import serviceAccount from './resjam-firebase-adminsdk-yva5m-9fa99eae2f.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const verifyToken = async (token) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken.uid;
  } catch (error) {
    throw new Error('Token verification failed');
  }
};


export const handler = async (event) => {
  let response;
  /**Verify ID tokens using the Firebase Admin SDK here */
  let token = event.headers.Authorization;

  if (!token || !token.startsWith('Bearer ')) {
    // Handle the error: respond with an appropriate message or throw an exception
    return {
      statusCode: 401,  // Unauthorized
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
      },
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
        // const uid = event.queryStringParameters.uid;
        response = await getUserByUid(uid);
        break;
      case 'PUT':
        // Implement PUT logic here
        response = "PUT request handled";
        break;
      case 'DELETE':
        // Implement DELETE logic here
        response = "DELETE request handled";
        break;
      default:
        // Handle other types of HTTP methods or throw an error
        throw new Error("Unsupported HTTP method: ", event.httpMethod);
    }
  }
  catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err.message || "Internal Server Error"),
    };
  }

  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
    },
    ...response
  };
};
