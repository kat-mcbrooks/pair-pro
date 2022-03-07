import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../App";

const Login = () => {
  const { dispatch } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //add input value
  const [ inputValue ] = useState()
  const [ passwordValue ] = useState()

  const { email, password } = formData

  const navigate = useNavigate();


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("userToken", res.data.token);
        dispatch({
          type: "LOGIN",
          // payload: res.data,
          // remember: rememberMe,
        });
        navigate("/pairpros");
      })
      .catch(() => {
        toast("Incorrect email or password");
      });
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
          <button  type='submit' className='btn btn-block'>
            Submit
          </button>
        </div>
      </form>
    </section>
  </>
  )
}

export default Login;
