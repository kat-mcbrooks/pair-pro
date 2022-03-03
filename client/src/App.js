import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home'
import Login from './components/Login';
import Register from './components/Register';
import PersonList from './components/PersonList';

const App = () => {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<PersonList />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>        
        </div>
      </Router>
    </>
  );
}

export default App;
