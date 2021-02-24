import axios from 'axios'
const url = 'http://localhost:6300'
const bearerToken = "BQAED1QL7fJQaQMWgE_qT0cHgK26kaY1TsI5bXxsgoyoN_n-TtjrK_QjQrTWscf2pyoGt2PwnuaN2lX43a47nFlDrZzpSWEK-SLj1smqMDjmzp-DT5iWUr70lQLsH_buXvznJ_iOpdAY2Cqbj7MqDPpywxtN_h5CuDqsogktTr0a-c5MFohj3bn8yVq1Mh2nXk9qtRvnlxA8AGfGwOvoUsiQkBjlQJ3cDjS0VzN39fB_5BJLrO-3QgeIeSH2rUjI-dzrC86z_chrrZ6zwRKtvjEo6CE0U90ukRsstx8fAccu"

const setUser = (user) => {
  return {
    type: 'LOGIN_USER',
    payload: user
  }
}

const getSpotifyUserdata = (data) => {
  return {
    type: 'GET_USER_SPOTIFY',
    payload: data
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
      localStorage.setItem('access_token_local', user.data.access_token)
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
      console.log(newUser);
    }
    catch(err) {
      console.log(err)
    }
  }
}

export function getDataUser() {
  return async (dispatch) => {
    try {
      const user = await axios({
        url: `${url}/profile`,
        method: 'GET',
        headers: {
          access_token: localStorage.access_token_local
        }
      })
      console.log(user);
      const data = {
        id: user.data.id,
        username: user.data.username,
        email: user.data.email
      }
      dispatch(setUser(data))

    } catch {

    }
  }
}

export function getSpotifyUser() {
  return async (dispatch) => {
    try {
      const spotifyUser = await axios({
        method: 'GET',
        url: 'https://api.spotify.com/v1/me',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${bearerToken}`
        }
        
      })
      dispatch(getSpotifyUserdata(spotifyUser.data))

    } catch (err) {
      console.log(err);
    }
}
}