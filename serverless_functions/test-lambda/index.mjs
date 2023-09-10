import { MongoClient, ServerApiVersion } from 'mongodb';
import { addUser } from './addUser';

const uri = "mongodb+srv://user-prod:DfSMAak9ktBWxeRM@resjam-db-prod.rh4hfgt.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


export const handler = async (event) => {
  let message;
  // Parse the body and extract the data attribute
  const body = JSON.parse(event.body);
  const data = body.user;
  try {
    run()
    message = await addUser(data);
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err.message || "Internal Server Error"),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(message),
  };
};
