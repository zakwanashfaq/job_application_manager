
export function postRequesthandler(event, uid, client) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "POST request unimplemented 2", uid  })
    };
}