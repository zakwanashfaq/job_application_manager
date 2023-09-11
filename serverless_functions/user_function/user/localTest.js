import { handler } from "./index.js";

const testPostJson = {
    "httpMethod": "POST",
    "headers": {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjE5MGFkMTE4YTk0MGFkYzlmMmY1Mzc2YjM1MjkyZmVkZThjMmQwZWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVzamFtIiwiYXVkIjoicmVzamFtIiwiYXV0aF90aW1lIjoxNjk0NDU1NjEwLCJ1c2VyX2lkIjoiQ0VsZVBDclRydFpWWnJjT0lwQXdETDNVSEM1MiIsInN1YiI6IkNFbGVQQ3JUcnRaVlpyY09JcEF3REwzVUhDNTIiLCJpYXQiOjE2OTQ0NTU2MTAsImV4cCI6MTY5NDQ1OTIxMCwiZW1haWwiOiJ6YXppYW5AbXVuLmNhIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInphemlhbkBtdW4uY2EiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.fGN4Ov40Pri9FdjDse695nqdLm5OGWZ1CnPSh_VWiflnEmp-bWOcjRZH_EtfO74rdw-XH52uGwes-zheJqjJuPYi8T1HUL29LV-0Co8cbUgEWsRu7e4zihPgBP4zZ1g0evQUuTn1XnE74kx2VL_jZZSbF2UzCA8dq8yqY2RoHkajUbu1c7j7aDNOd-praZ0tYiRMu1OiTAE6g5f34qw6tnLPuBDf-kw8Rlqd4NQQZp6nUbn6yKDbVI2pkYgOw6DRfLDtHSHNyr9mAi_2b5dRdTfqm8L2z8H8JiGRpfpkZAGcHyGObjXPVSUj5QF_9OFoRqcLuFNm0_fSApJTI9A8Dw"
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
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjE5MGFkMTE4YTk0MGFkYzlmMmY1Mzc2YjM1MjkyZmVkZThjMmQwZWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVzamFtIiwiYXVkIjoicmVzamFtIiwiYXV0aF90aW1lIjoxNjk0NDYxMjYwLCJ1c2VyX2lkIjoiQ0VsZVBDclRydFpWWnJjT0lwQXdETDNVSEM1MiIsInN1YiI6IkNFbGVQQ3JUcnRaVlpyY09JcEF3REwzVUhDNTIiLCJpYXQiOjE2OTQ0NjQ5MDksImV4cCI6MTY5NDQ2ODUwOSwiZW1haWwiOiJ6YXppYW5AbXVuLmNhIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInphemlhbkBtdW4uY2EiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Iv6v0_dPs7BONPxJyFtwUmMKvbHerkDx_4UUrsNxs3N5_xZuqpDeBbHD8cmMpQtJLO_Q358C4-W9gEG29Z9BTnVdhfgm2TXFI-dKeeWgT8ZIq4sMqE7eQTDceucmaEAfvaTLE7OHBEKWQROypsZ7Kk0yyhRETTmeO6POcHfEBB4mqECDnqlPcAPWfbw-t9NwdsgH9w3-P6u1Dnk1OfSX7bx89p0N2H79-HpgkZTNAsrHa1F0-r9E65BqzCjhTvNpXJJi3EBYVRDk4Z8Etd91bHL8j3sTucppcffUUgIm5euInt6U5Np1_fDC1rHj-ORt81QPP61dFNSeOaT5Jn0zvg"
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