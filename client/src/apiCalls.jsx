import axios from "axios";
import { toast } from "react-toastify";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/api/users/login", userCredentials);
    console.log("res.data within loginCall" + res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
    localStorage.setItem("userToken", res.data.token);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    toast("Incorrect email or password");
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const registerCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(`/api/users/`, userCredentials);
    localStorage.setItem("user", JSON.stringify(res.data));
    localStorage.setItem("userToken", res.data.token);
    console.log("res.data.token within registerCall" + res.data.token);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    toast("something is wrong");
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
