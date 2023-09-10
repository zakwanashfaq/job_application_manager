import { addUser } from './addUser';
import { getUserByUid } from './getUser';

export const handler = async (event) => {
  let response;
  const body = JSON.parse(event.body);
  const data = body.user;
  try {
    switch (event.httpMethod) {
      case 'POST':
        response = await addUser(data);
        break;
      case 'GET':
        response = await getUserByUid(data.uid);
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
        throw new Error("Unsupported HTTP method");
    }
  } 
  catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err.message || "Internal Server Error"),
    };
  }

  return response;
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
