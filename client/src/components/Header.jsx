import {FaSignInAlt, FaUser} from 'react-icons/fa'
import {Link } from 'react-router-dom'

function Header() {
  return (
    
    <header data-testid="nav" className='header'>
     
      <div className='logo'>
        <Link to='/'>PairPro</Link>
      </div>
      <ul>
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
      </ul>
      
    </header>
  )
}

export default Header
