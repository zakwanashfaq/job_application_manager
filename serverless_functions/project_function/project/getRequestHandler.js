
export function getRequesthandler(event, uid) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Get request unimplemented 2", uid  })
    };
}