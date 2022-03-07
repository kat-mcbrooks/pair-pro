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
import Footer from "./components/Footer"
import "./index.scss";

export const AuthContext = createContext();
const initialState = {
  isLoggedIn: localStorage.getItem("userToken") ? true : false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
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

const App = () => {
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
            <Footer />
          </div>
        </Router>
        <ToastContainer />
      </>
    </AuthContext.Provider>

  );
}

export default App;
