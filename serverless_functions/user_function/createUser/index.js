import { addUser } from './addUser.js';
import { getUserByUid } from './getUser.js';

export const handler = async (event) => {
  let response;
  try {
    switch (event.httpMethod) {
      case 'POST':
        const data = event.body.user;
        response = await addUser(data);
        break;
      case 'GET':
        const uid = event.queryStringParameters.uid;
        return {
          statusCode: 222,
          headers: {
            "Access-Control-Allow-Origin": "*", 
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
          },
          body: JSON.stringify(uid),
        };
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

  return response;
};
