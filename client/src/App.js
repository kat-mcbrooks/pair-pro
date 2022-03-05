import { createContext, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PersonList from "./components/PersonList";
import Me from "./components/Me";

// create a context object
export const AuthContext = createContext();
// set the initial state, which will be passed to the useReducer hook.
const initialState = {
  isLoggedIn: localStorage.getItem("userToken") ? true : false,
};
// the reducer function returns a state value, triggered by an action type. It takes 2 arguments: the current state and the action (which is like an 'instruction'). This reducer function will be passed to useReducer.
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      // if (action.remember) {
      //localStorage.setItem("user", JSON.stringify(action.payload));
      // }
      return {
        ...state,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
//pass the useReducer function two arguments a reducer function and an initial state. it returns an array that holds the current state value and a dispatch function. When we want to update the state, we call the dispatch function
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    return () => {};
  }, [state.isLoggedIn]);
  // After creating the context object, a Provider component is used to wrap all the components that need access to the AuthContext object. This means that only components within the AuthContext Provider can get access to the user object and dispatch method
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <>
        <Router>
          <div data-testid="container" className="container">
            <Header />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<PersonList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/me" element={<Me />} />
            </Routes>
          </div>
        </Router>
        <ToastContainer />
      </>
    </AuthContext.Provider>
  );
}

export default App;
