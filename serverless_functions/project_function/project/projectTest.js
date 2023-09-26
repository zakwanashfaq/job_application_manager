import { handler } from "./index.js";

const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFkNWM1ZTlmNTdjOWI2NDYzYzg1ODQ1YTA4OTlhOWQ0MTI5MmM4YzMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVzamFtIiwiYXVkIjoicmVzamFtIiwiYXV0aF90aW1lIjoxNjk1NzQ2NzA3LCJ1c2VyX2lkIjoiQ0VsZVBDclRydFpWWnJjT0lwQXdETDNVSEM1MiIsInN1YiI6IkNFbGVQQ3JUcnRaVlpyY09JcEF3REwzVUhDNTIiLCJpYXQiOjE2OTU3NDY3MDcsImV4cCI6MTY5NTc1MDMwNywiZW1haWwiOiJ6YXppYW5AbXVuLmNhIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInphemlhbkBtdW4uY2EiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.BkUIygBkGTGYSelHMx6cmrNdPuCQeiRwqR-mfwHxrwrqeS5VneKqHFTQIdWE20k7Nb2GBjkPNuUSdTvXLTs-SsoNagYWwAlrpcsB5RVdms99LeBf-XVTfo7sEyG5AtvCqBs1dPiKIJ9bS7s6Gb-1RNOlb2rR8C3N4cndVzdfpDkoVc9SWe78ZyGBZ3BGXZQSYNXd-AiDgEAAVOliMCw7dqNBJSQ80xnIEI-e7jGZlJVWjdUOqeYtaXHICPudtDHlQPO8J4bpoIMIwXUPLnlSycVEPoR0Y9OpokvjRfU6GlDtflos_gye1IqqYNKi46MA3gkWKqztQ-YmldO5bzlxhg";

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

async function test(testJson) {
    const res = await handler({
        ...testJson,
        body: JSON.stringify(testJson.body)
    });
    console.log(res);
}

test(testGetJson);
test(testPostJson);