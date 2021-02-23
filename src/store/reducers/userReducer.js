const initialState = {
  accessToken: null,
  refreshToken: null,
  userSpotify: {
    loading: false,
    country: null,
    display_name: null,
    email: null,
    external_urls: {},
    followers: {},
    href: null,
    id: null,
    images: [],
    product: null,
    type: null,
    uri: null,
  },
  user: {
    validator: '',
    password: ''
  },
  isLogin: false
}

const userReducers = (state=initialState, action) => {
  switch(action.type){
    case 'GET_USER_SPOTIFY':
      console.log(action.payload);
      return {...state, [state.userSpotify]: action.payload }
    case 'LOGIN_USER':
      console.log(action.payload, 'dari reducers');
      return {...state, user: {validator: action.payload.validator, password: action.payload.password}}
    case 'LOGIN_STATUS':
      return {...state, isLogin: action.payload }
    default: 
      return state
  }
}
export default userReducers