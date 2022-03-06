import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  // read authcontext value from the context object using useContext Hook in the component that needs the authcontext value(in our case, Header)

  const { dispatch } = useContext(AuthContext);
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userToken");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/home");
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
