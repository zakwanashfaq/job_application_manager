
export function postRequesthandler(event, uid) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "POST request unimplemented 2", uid  })
    };
}