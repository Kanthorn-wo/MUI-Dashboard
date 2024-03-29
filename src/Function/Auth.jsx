import axios from "axios"

export const currentUser = async (authToken) => {

  return await axios.post(process.env.REACT_APP_API + '/current-user/', {}, {
    headers: {
      authToken
    }
  })

}

export const currentAdmin = async (authToken) => {

  return await axios.post(process.env.REACT_APP_API + '/current-user/', {}, {
    headers: {
      authToken
    }
  })

}