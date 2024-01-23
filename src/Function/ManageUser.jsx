import axios from "axios"

// export const list = async (authToken) => {

//   return await axios.get(process.env.REACT_APP_API + '/manage-user/', {
//     headers: {
//       authToken
//     }
//   })
// }
// export const changeRole = async (authToken, data) => {

//   return await axios.post(process.env.REACT_APP_API + '/change-role/', data, {
//     headers: {
//       authToken
//     }
//   })
// }

// export const userAcivew = async (authToken, data) => {

//   return await axios.post(process.env.REACT_APP_API + '/change-role/', data, {
//     headers: {
//       authToken
//     }
//   })
// }


const apiBaseUrl = process.env.REACT_APP_API;

const makeRequest = async (method, endpoint, data = null, authToken) => {
  const url = `${apiBaseUrl}/${endpoint}`;
  const headers = {
    authToken
  };
  let config = {
    method,
    url,
    headers
  };
  if (data) {
    config = { ...config, data };

  }
  return await axios(config);
};

export const list = async (authToken) => {
  return await makeRequest('get', 'manage-user', null, authToken);
};

export const changeRole = async (authToken, data) => {
  return await makeRequest('post', 'change-role', data, authToken);
};

export const userActive = async (authToken, data) => {
  return await makeRequest('post', 'user-active', data, authToken);
};

