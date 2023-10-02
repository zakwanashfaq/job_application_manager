import client from "./mongoClientConnection.js";

let DB_CONNECTION = null;

export async function getUserByUid(uid) {
    try {
        let db;
        if (!DB_CONNECTION) {
            // Connect the client to the server
            await client.connect();
            // Access the 'prod' database and the 'users' collection
            db = client.db("prod");
        } else {
            db = DB_CONNECTION;
        }
        
        const userCollection = db.collection("users");
        // Fetch user with the specific uid
        const user = await userCollection.findOne({ uid: uid });
        // null case
        if (!user) {
            return {
                statusCode: 302,
                body: JSON.stringify(`No user found with uid: ${uid}. Redirecting to account setup for new user.`)
            };
        }

        console.log("User fetched successfully:", user);
        user.version = 2.0;
        return {
            statusCode: 200,
            body: JSON.stringify(user),
        };

    } catch (err) {
        console.error("Failed to fetch user:", err);
        return {
            statusCode: 500,
            body: JSON.stringify(`Failed to fetch user with uid ${uid}: ${err}`),
        };
    } finally {
        // Ensure the client is closed after operation
        await client.close();
    }
}

