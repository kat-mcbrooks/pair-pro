import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
    <div className='sml-banner-image'>
      <div className="white-bg dark-teal-text full-width">
        <h1 className="purple-text">Login</h1>
        <h3 className="dark-teal-text courier">Welcome back to PairPro!</h3>
      </div>
    </div>

    <section className='form'>
      <form onSubmit ={onSubmit}>
        <div data-testid="email input" className="form-group">
          <input 
            type='email' 
            className='form-control' 
            id='email'
            name='email'
            value={inputValue}
            placeholder='Enter your email' 
            onChange={onChange}
          />
        </div>
        <div data-testid="password input" className="form-group">
          <input 
            type='password' 
            className='form-control' 
            id='password'
            name='password'
            value={passwordValue}
            placeholder='Enter password' 
            onChange={onChange}
          />
        </div>
        <div  data-testid="add-btn" className="form-group">
          <button type="submit" className="btn btn-block">
            {isFetching ? "loading" : "Log in"}
          </button>
        </div>
      </form>
    </section>
  </>
  )
}

export default Login;
