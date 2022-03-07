// the reducer function returns a state value, triggered by an action type. It takes 2 arguments: the current state and the action (which is like an 'instruction'). This reducer function will be passed to useReducer.
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        isLoggedIn: false,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        //user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isLoggedIn: false,
        //user: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        //user: null
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};
export default reducer;
