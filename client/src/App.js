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
import Footer from "./components/Footer";
import "./index.scss";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
const multer  = require('multer')


// set up multer for storing uploaded files – this might need to go somewhere else. 
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })

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
            element={
              state.isLoggedIn ? <Navigate to="/pairpros" /> : <LoginPage />
            }
          ></Route>
          <Route
            path="/register"
            element={
              state.isLoggedIn ? <Navigate to="/pairpros" /> : <RegisterPage />
            }
          ></Route>
          <Route path="/me" element={<MePage />}></Route>
        </Routes>
      </Router>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
