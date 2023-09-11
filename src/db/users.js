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
    // setting query params
    axios.get(`${API_URL}/user`, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Authorization": ("Bearer " + accessToken),
        },
    }).then((response) => {
        console.log(response.data);
        return response.data;
    }).catch((error) => {
        console.error('Error:', error);
    });
}

