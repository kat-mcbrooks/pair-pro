import { useState, useContext } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { loginCall } from "../apiCalls";

const Login = () => {
  const { isFetching, dispatch, state } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //add input value
  const [inputValue] = useState();
  const [passwordValue] = useState();

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    loginCall({ email: email, password: password }, dispatch);
  };

  return (
    <>
      <section className="heading">
        <h1 data-testid="login text">
          <FaSignInAlt />
          Login
        </h1>
        <p data-testid="login phrase">Log in and pair up</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div data-testid="email input" className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={inputValue}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div data-testid="password input" className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={passwordValue}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div data-testid="add-btn" className="form-group">
            <button type="submit" className="btn btn-block">
              {isFetching ? "loading" : "Log in"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
