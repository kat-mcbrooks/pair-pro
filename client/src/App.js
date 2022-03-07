import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { state } = useContext(AuthContext);

  return (
    <>
      <Router data-testid="container" className="container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pairpros" element={<PairProsPage />} />
          <Route
            path="/login"
            element={state.isLoggedIn ? <Navigate to="/me" /> : <LoginPage />}
          ></Route>
          <Route
            path="/register"
            element={
              state.isLoggedIn ? <Navigate to="/" /> : <RegisterPage />
            }
          ></Route>
          <Route path="/me" element={<MePage />}></Route>
        </Routes>
      </Router>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
