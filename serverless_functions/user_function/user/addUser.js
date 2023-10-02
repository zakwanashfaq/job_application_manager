import client from "./mongoClientConnection.js";
import {ObjectId} from 'mongodb';
export async function addUser(data) {
    try {
      // Connect the client to the server
      await client.connect();
      // Access the 'prod' database and the 'user' collection
      const db = client.db("prod");
      const userCollection = db.collection("users");
      let formatted_data = {...data};
      formatted_data._id = new ObjectId(data.uid);
      delete data.uid;
      // Insert a new year into the 'users' collection
      await userCollection.insertOne(data);
      return {
        statusCode: 200,
        body: JSON.stringify("New user added to collection!"),
      };
    } catch (err) {
      const errTxt = "Failed to add new user to collection : "+ err;
      return {
        statusCode: 400,
        body: JSON.stringify(errTxt),
      };
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  