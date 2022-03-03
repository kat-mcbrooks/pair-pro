import axios from 'axios'
import {useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    axios.post(`http://localhost:5000/api/users/login`, {
      email: email, 
      password: password
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    window.location.href = '/'
  }

  return (
  <>
    <section className='heading'>
      <h1>
        <FaSignInAlt /> Login
      </h1>
      <p>Log in and pair up</p>
    </section>

    <section className='form'>
      <form onSubmit ={onSubmit}>
        <div className="form-group">
          <input 
            type='email' 
            className='form-control' 
            id='email'
            name='email'
            value={email}
            placeholder='Enter your email' 
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input 
            type='password' 
            className='form-control' 
            id='password'
            name='password'
            value={password}
            placeholder='Enter password' 
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <button type='submit' className='btn btn-block'>
            Submit
          </button>
        </div>
      </form>
    </section>
  </>
  )
}

export default Login
