import { useEffect, useState } from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

function Header() {
  const [loggedIn, setLoggedIn] = useState(false)

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('userToken');
    setLoggedIn(false);
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>PairPro</Link>
      </div>
      <ul>

          <li>
            <button className='btn' onClick={logout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>         
        
      </ul>
    </header>
  )
}

export default Header
