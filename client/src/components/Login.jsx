import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../App";

const Login = () => {
  const { dispatch } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;


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
        navigate("/");
      })
      .catch(() => {
        toast("Incorrect email or password");
      });
  };

  return (

  <>
    <section  className='heading'>
      <h1 data-testid="login text">
        <FaSignInAlt />Login
      </h1>
      <p data-testid="login phrase">Log in and pair up</p>
    </section>
  

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
