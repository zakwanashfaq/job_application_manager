import axios from 'axios';

const API_URL = 'https://5mccvb2yva.execute-api.us-east-1.amazonaws.com/PRODUCTION';

export function createNewUser(accessToken, uid, firstName, lastName) {
    //const firstProjectUUID = crypto.randomUUID();
    const data = {
        user: {
            firstName: firstName,
            lastName: lastName,
            uid: uid,
            items: []
        }
    };

    // todo: add handling to create the project in the project collection
    return axios.post(API_URL + "/user", data, {
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            "Authorization": ("Bearer " + accessToken),
        }
    });
}

export async function getUser(accessToken) {
    try {
        const response = await axios.get(`${API_URL}/user`, {
            headers: {
                "Authorization": ("Bearer " + accessToken),
            },
        });
        return { user: response.data };
    } catch (error) {
        if (error?.response?.status === 302) {
            console.log("setting up user");
            return {
                redirectToNewUserSetup: true
            };
        } else {
            console.error('Error:', error);

            if (error.response) {
                console.error('Server responded with status:', error.response.status);
            } else if (error.request) {
                console.error('No response received from server.');
            } else {
                console.error('Error setting up the request:', error.message);
            }
        }
        
        return null;
    }
}
