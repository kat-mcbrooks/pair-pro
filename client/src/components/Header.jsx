



import { useState, useContext } from "react";
import { AuthContext } from "../App";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Header() {
  // read authcontext value from the context object using useContext Hook in the component that needs the authcontext value(in our case, Header)
  // if the context value of the AuthContext.Provider(see app.js) changes, any component that calls the useContext will be rerendered with the latest value in the context provider.
  const { dispatch } = useContext(AuthContext);
  const { state } = useContext(AuthContext);

  // then check the login state, reading it from
  //const [loginStatus, setLoginStatus] = useState(state.isLoggedIn);

  // const navigate = useNavigate();

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
