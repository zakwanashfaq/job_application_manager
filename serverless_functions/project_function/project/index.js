import { deleteRequesthandler } from "./deleteRequestHandler.js";
import { getRequesthandler } from "./getRequestHandler.js";
import { postRequesthandler } from "./postRequestHandler.js";
import { requestHandler } from "./requestHandler.js"
import { updateRequesthandler } from "./updateRequestHandler.js";

export const handler = async (event) => {
    return await requestHandler(
        event,
        postRequesthandler,
        getRequesthandler,
        updateRequesthandler,
        deleteRequesthandler
    );
}