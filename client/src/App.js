import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PersonList from "./components/PersonList";
import Me from "./components/Me";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { state } = useContext(AuthContext);

  return (
    <>
      <Router>
        <div data-testid="container" className="container">
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<PersonList />} />
            <Route
              path="/login"
              element={state.isLoggedIn ? <Navigate to="/me" /> : <Login />}
            ></Route>
            <Route
              path="/register"
              element={
                state.isLoggedIn ? <Navigate to="/home" /> : <Register />
              }
            ></Route>
            <Route
              path="/me"
              element={state.isLoggedin ? <Me /> : <Navigate to="/home" />}
            ></Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
