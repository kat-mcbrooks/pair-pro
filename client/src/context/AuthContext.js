import { createContext, useEffect, useReducer } from "react";
import reducer from "./AuthReducer";

// set the initial state, which will be passed to the useReducer hook.
const initialState = {
  isLoggedIn: localStorage.getItem("userToken") ? true : false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  isFetching: false,
  error: false,
};
// create a context object
export const AuthContext = createContext(initialState);

// After creating the context object, a Provider component is used to wrap all the components that need access to the AuthContext object. This means that only components within the AuthContext Provider can get access to the user object and dispatch method. See app.js
export const AuthContextProvider = ({ children }) => {
  //pass the useReducer function two arguments a reducer function and an initial state. it returns an array that holds the current state value and a dispatch function. When we want to update the state, we call the dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);

  // if the context value of the AuthContext.Provider(see app.js) changes, any component that calls the useContext will be rerendered with the latest value in the context provider.
  useEffect(() => {
    return () => {};
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.isLoggedIn]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
