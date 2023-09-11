import { getUserByUid } from './getUser.js';

export const handler = async (event) => {
  const uid = event.queryStringParameters.uid;
  const response = getUserByUid(uid);
  
  return response;
};
