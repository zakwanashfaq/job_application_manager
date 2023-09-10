import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://user-prod:DfSMAak9ktBWxeRM@resjam-db-prod.rh4hfgt.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return "Successfully connected to MongoDB!";
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    throw err; // propagate the error
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run();

export const handler = async (event) => {
  let message;

  try {
    message = await run();
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
