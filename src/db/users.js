import axios from 'axios';

const API_URL = 'https://5mccvb2yva.execute-api.us-east-1.amazonaws.com/PRODUCTION';

export async function createNewUser(uid, firstName, lastName) {
    const firstProjectUUID = crypto.randomUUID();
    const data = {
        user: {
            firstName: firstName,
            lastName: lastName,
            uid: uid,
            project: [firstProjectUUID]
        }
    };

    // todo: add handling to create the project in the project collection

    axios.post(API_URL, data, {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

export async function getUser(accessToken) {
    try {
        const response = await axios.get(`${API_URL}/user`, {
            headers: {
                "Authorization": ("Bearer " + accessToken),
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);

        // You can add user-friendly error messages or other logic here.
        if (error.response) {
            console.error('Server responded with status:', error.response.status);
        } else if (error.request) {
            console.error('No response received from server.');
        } else {
            console.error('Error setting up the request:', error.message);
        }

        // Optionally, you can return a default value or throw the error to be caught higher up.
        // For this example, I'm just returning null:
        return null;
    }
}
