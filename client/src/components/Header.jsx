import { useState, useContext } from "react";
import { AuthContext } from "../App";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
  const { dispatch } = useContext(AuthContext);
  const { state } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("userToken");
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <header data-testid="nav" className="header">
      <div className="logo">
        <Link to="/">PairPro</Link>
      </div>
      <ul>
        {state.isLoggedIn ? (
          <li>
            <button className="btn" onClick={logout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
