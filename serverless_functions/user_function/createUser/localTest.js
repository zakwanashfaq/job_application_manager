import { handler } from "./index.js";

const testPostJson = {
    "httpMethod": "POST",
    "headers": {
        "Accept": "*/*",
        "Content-Type": "application/json"
    },
    "body": {
        "user": {
            "userName": "test",
            "uid": "sjfh3479r9"
        }
    }
};

const testGetJson = {
    "httpMethod": "GET",
    "headers": {
        "Accept": "*/*",
        "Content-Type": "application/json"
    },
    "body": {
        "user": {
            "uid": "CElePCrTrtZVZrcOIpAwDL3UHC52"
        }
    }
};

async function test(testJson) {
    const res = await handler("CElePCrTrtZVZrcOIpAwDL3UHC52")
    console.log(res);
}

test(testGetJson);