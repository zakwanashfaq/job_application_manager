import client from "./mongoClientConnection.js";

export async function addUser(data) {
    try {
      // Connect the client to the server
      await client.connect();
      // Access the 'prod' database and the 'user' collection
      const db = client.db("prod");
      const userCollection = db.collection("users");
      // Insert a new yser into the 'users' collection
      await userCollection.insertOne(...data);
      return {
        statusCode: 200,
        body: JSON.stringify("Document inserted successfully!"),
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
  