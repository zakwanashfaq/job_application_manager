import { requestHandler } from "./requestHandler.js"

export const handler = async (event) => {
    return await requestHandler(
        event,
        () => {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: "POST request unimplemented" })
            }
        },
        () => {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: "GET request unimplemented" })
            }
        },
        () => {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: "PUT request unimplemented" })
            }
        },
        () => {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: "DELETE request unimplemented" })
            }
        }
    );
}