import { deleteRequesthandler } from "./deleteRequestHandler.js";
import { getRequesthandler } from "./getRequestHandler.js";
import { postRequesthandler } from "./postRequestHandler.js";
import { requestHandler } from "./requestHandler.js"
import { updateRequesthandler } from "./updateRequestHandler.js";

export const handler = async (event, context) => {
    return await requestHandler(
        event,
        context,
        postRequesthandler,
        getRequesthandler,
        updateRequesthandler,
        deleteRequesthandler
    );
}