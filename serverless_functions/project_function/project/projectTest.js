import { handler } from "./index.js";

const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFkNWM1ZTlmNTdjOWI2NDYzYzg1ODQ1YTA4OTlhOWQ0MTI5MmM4YzMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVzamFtIiwiYXVkIjoicmVzamFtIiwiYXV0aF90aW1lIjoxNjk1NzQ2NzA3LCJ1c2VyX2lkIjoiQ0VsZVBDclRydFpWWnJjT0lwQXdETDNVSEM1MiIsInN1YiI6IkNFbGVQQ3JUcnRaVlpyY09JcEF3REwzVUhDNTIiLCJpYXQiOjE2OTU3NTA4MzEsImV4cCI6MTY5NTc1NDQzMSwiZW1haWwiOiJ6YXppYW5AbXVuLmNhIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInphemlhbkBtdW4uY2EiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.tv29cMowsvg9y8TB0BZpYlJb76v3aJf6mS8rlKsvkh7WQYh-3ZRorVW4IjaOHnHiamkUQKyMlo4-Y4UctEUkf6wKxNr3BNSLFtI0zVyw4H7NEHGOYkMNC3JE9dWAwECdlnZ7iClSq0Ja8wNlShu0H6aCTm0C4XkFpkAfH2MEJTUD2WYHgT1uHehUYUElmMYxuCtxWOmVTk4v-wdOMGu2QFHHB1E7N5UvZQpVJKUvYrM1SdZUAYzQOsH0ruaGXwhvDshgVQt-yW8Q54ubo7b86ngxDM4ZI3_ZzQ-1Ob31jilI5rcALazhjTc_zpQ-jHJr5NXp75GL1auN1mqGxdJ4uQ";

const testPostJson = {
    "httpMethod": "POST",
    "headers": {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
    "body": {
        "user": {
            "userName": "test",
            "uid": "sjfh3479r9",
            projects: ["sdbskjf2iu4y98y824y4y4y4iuyt349f3"]
        }
    }
};

const testGetJson = {
    "httpMethod": "GET",
    "headers": {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
    "body": {

    }
};

const testPutJson = {
    "httpMethod": "PUT",
    "headers": {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
    "body": {

    }
};

const testDeleteJson = {
    "httpMethod": "DELETE",
    "headers": {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
    "body": {

    }
};

const testOptionsJson = {
    "httpMethod": "OPTIONS",
    "headers": {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
    "body": {

    }
};

async function test(testJson) {
    const res = await handler({
        ...testJson,
        body: JSON.stringify(testJson.body)
    });
    console.log(res);
}

test(testGetJson);
// test(testPostJson);
// test(testPutJson);
// test(testDeleteJson);
// test(testOptionsJson);