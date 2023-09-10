import client from "./mongoClientConnection.js";

export async function getUserByUid(uid) {
    try {
        // Connect the client to the server
        await client.connect();
        // Access the 'prod' database and the 'users' collection
        const db = client.db("prod");
        const userCollection = db.collection("users");
        // Fetch user with the specific uid
        const user = await userCollection.findOne({ uid: uid });
        // null case
        if (!user) {
            console.log(`No user found with uid: ${uid}`);
            return {
                statusCode: 302, // Temporary redirect status code
                headers: {
                    "Location": "https://yourdomain.com/setup-user-page" // URL to the setup user page
                },
                body: JSON.stringify(`No user found with uid: ${uid}. Redirecting to setup.`)
            };
        }

        console.log("User fetched successfully:", user);
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

