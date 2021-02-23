import axios from 'axios'
const url = 'http://localhost:6300'

const setUser = (user) => {
  return {
    type: 'LOGIN_USER',
    payload: user
  }
}

export const setLoginStatus = (status) => {
  return {
    type: 'LOGIN_STATUS',
    payload: status
  }
}

export function setUserData(payload) {
  return async (dispatch) => {
    try{
      const user = await axios({
        method: 'post',
        url: `${url}/login`,
        data: {
          validator: payload.validator,
          password: payload.password
        }
      })
      console.log(user, 'dari action');
      localStorage.setItem('access_token', user.data.access_token)
      dispatch(setUser(user.config.data))
      dispatch(setLoginStatus(true))
    }
    catch(err) {
      console.log(err) 
    }
  }
}
export function register(payload) {
  return async (dispatch) => {
    try {
      const newUser = await axios({
        url: `${url}/register`,
        method: 'post',
        data: {
          email: payload.email,
          username: payload.username,
          password: payload.password
        }
      })
    }
    catch(err) {
      console.log(err)
    }
  }
}

export default function getDataUser() {
  return async (dispatch) => {
    try {
      const user = await axios({
        url: `${url}/profile`,
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
      console.log(user);
    } catch {

    }
  }
}