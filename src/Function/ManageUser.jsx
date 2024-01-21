import axios from "axios"

export const list = async (authToken) => {

  return await axios.get(process.env.REACT_APP_API + '/manage-user/', {
    headers: {
      authToken
    }
  })
}
export const changeRole = async (authToken, data) => {

  return await axios.post(process.env.REACT_APP_API + '/change-role/', data, {
    headers: {
      authToken
    }
  })
}

export const userActive = async (authToken, data) => {

  return await axios.post(process.env.REACT_APP_API + '/user-active/', data, {
    headers: {
      authToken
    }
  })
}