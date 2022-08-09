const INITIAL_STATE = {
  auth: {
    token: '',
    isLoged: false,
    isLoading: true
  }
}

function AuthReducer(state = INITIAL_STATE, action) {
  if (action.type === 'SET_LOGIN') {
    console.log(action)
    return {
      auth: {
        token: action.token,
        isLoged: true,
        isLoading: false
      }
    }
  }
  return state
}

export default AuthReducer