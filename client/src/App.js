import { createContext, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import PairProsPage from "./components/PairProsPage";
import MePage from "./components/MePage";
import "./index.scss";

export const AuthContext = createContext();
// const App = () => {
// create a context object, then pass the value for the context object we created.

const initialState = {
  isLoggedIn: localStorage.getItem("userToken") ? true : false,
  // user: null, //not sure why these lines like this...?
  // token: null,
};
// this function will be passed to useReducer, which will return a user object as state and a dispatch method for triggering state updates/changes
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      // if (action.remember) {
      //localStorage.setItem("user", JSON.stringify(action.payload));
      // }
      return {
        ...state,
        isLoggedIn: true,
        // user: action.payload,
      };
    case "LOGOUT":
      // window.localStorage.clear();
      return {
        ...state,
        isLoggedIn: false,
        // user: null,
      };
    default:
      return state;
  }
};
//pass the useReducer function two arguments a reducer and an initial state. When we want to update the state we call the dispatch method with type property that specifics the type of state changes we want to trigger i.e. type: "LOGIN" in login.jsx
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    return () => {};
  }, [state.isLoggedIn]);

  return (

    <AuthContext.Provider value={{ state, dispatch }}>
      <>
        <Router>
          <div data-testid="container">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pairpros" element={<PairProsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/me" element={<MePage />} />
            </Routes>
          </div>
        </Router>
        <ToastContainer />
      </>
    </AuthContext.Provider>

  );
}

// After creating the context object, a Provider component is used to wrap all the components that need access to the AuthContext object. This means that only components within the AuthContext Provider can get access to the user object and dispatch method

export default App;
