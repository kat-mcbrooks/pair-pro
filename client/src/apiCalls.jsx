import axios from "axios";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/api/users/login", userCredentials);
    localStorage.setItem("userToken", res.data.token);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    <Navigate to="/me" replace={true} />;
  } catch (err) {
    toast("Incorrect email or password");
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const registerCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(
      `http://localhost:5000/api/users/`,
      userCredentials
    );
    console.log(res.data.token);
    localStorage.setItem("userToken", res.data.token);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    <Navigate to="/" replace={true} />;
  } catch (err) {
    toast("something is wrong");
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
