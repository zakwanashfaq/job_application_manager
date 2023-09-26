import { handler } from "./index.js";

const testPostJson = {
    "httpMethod": "POST",
    "headers": {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjE5MGFkMTE4YTk0MGFkYzlmMmY1Mzc2YjM1MjkyZmVkZThjMmQwZWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVzamFtIiwiYXVkIjoicmVzamFtIiwiYXV0aF90aW1lIjoxNjk0NDc4MzA1LCJ1c2VyX2lkIjoiQ0VsZVBDclRydFpWWnJjT0lwQXdETDNVSEM1MiIsInN1YiI6IkNFbGVQQ3JUcnRaVlpyY09JcEF3REwzVUhDNTIiLCJpYXQiOjE2OTQ0NzgzMDUsImV4cCI6MTY5NDQ4MTkwNSwiZW1haWwiOiJ6YXppYW5AbXVuLmNhIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInphemlhbkBtdW4uY2EiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.F7S1HgI7n9eJa6Homac7Ls2lyRzAmxME0D3CAv4Xyb_sowdG8ezmElBZJUILSe5cAH00J1aSmFOcxtHymKvBMqdCDRBWjYpDTjubBP4V_YgaNaT0pAiz1zsLjE58Xk7ZbCBYtt0NPP7OuhgwF3a8iQCILsvYxIdrNiKpkjaIOizlfJogqVNKdbWGCXlT72NuSiYy9Le8GXzVAzYy_PEOmESzh4JMNKcoZCi51V3TeZRkUifNzTtYL1z1dDqAGPjbTf93ABDGbfSkVVcUA1JmONL6WBMoYVEUA6nYV9hf2cC8P1mYSg764hl_ZtY7iBjQZCYDYRsCpiYPxm7JG8rQwQ"
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
        "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhMDhlN2M3ODNkYjhjOGFjNGNhNzJhZjdmOWRkN2JiMzk4ZjE2ZGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVzamFtIiwiYXVkIjoicmVzamFtIiwiYXV0aF90aW1lIjoxNjk1MDg3MTE0LCJ1c2VyX2lkIjoiQ0VsZVBDclRydFpWWnJjT0lwQXdETDNVSEM1MiIsInN1YiI6IkNFbGVQQ3JUcnRaVlpyY09JcEF3REwzVUhDNTIiLCJpYXQiOjE2OTUwODcxMTQsImV4cCI6MTY5NTA5MDcxNCwiZW1haWwiOiJ6YXppYW5AbXVuLmNhIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInphemlhbkBtdW4uY2EiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.PKlp7VJcD6U5_sztmZWxddssFN_FKEUdZ6kyHxlfNM3v4cOdSw-_QTgXTVyA7o2AZqcwkwghI6kUb_79BF2P1hqFlAdoCEWnkKqjvAhmp4mwKCfq7sDmHHv8r3sSBPg5Akyt_PH3j9tucvYdVGeHGoM_l1eeWMUfL9dTrku5Ln48BchJleO06NDeS8wImPYSyRFqa7YY5m5jL4EbDlk6bmdnsc32DD0VJpwF-3aRLMwnlIKhFYwuRSVpJK4DeSabVNuPSGitq0btYnVwzzOgTuoipjRkTZrr5TaWklKGWjaKHS-AReXrcUSZG2P9VN-LRpek8idVtfLly-_QYXOsuA"
    },
    "body": {
        "user": {
            "uid": "CElePCrTrtZVZrcOIpAwDL3UHC52"
        }
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