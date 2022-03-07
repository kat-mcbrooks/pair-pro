import { useContext } from "react";
import { AuthContext } from "../App";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("userToken");
    dispatch({
      type: "LOGOUT",
    });
    navigate('/')
  };

  return (
    <Button variant='primary' onClick={logout}>Logout</Button>
  )
}

export default LogoutButton
