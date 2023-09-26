
export function deleteRequesthandler(event, uid, client) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Delete request unimplemented 2", uid })
    };
}