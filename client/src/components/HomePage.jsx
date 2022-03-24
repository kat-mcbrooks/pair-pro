import React from 'react'
import HomeCards from './HomeCards'
import logoPic from '../assets/home-logo-white.png'

const Home = () => {
  return (
    <>
    <div data-testid= "header">
      <div className='home-banner-image'>
        <div className='home-banner-text'>
          <div className='text-center'>
            <img className="height-max150px" src={logoPic} alt="Pair Pro Logo" />
          </div>
          <br></br>
          <h3 className='dark-orange-text courier'>Hello, world!</h3>
          <h5 className='white-text'>We won't REST until you find your</h5>
          <h5 className='white-text'>IDEal Pair Programming Partners</h5>
        </div>
      </div>
      </div>
      <HomeCards />
    </>
  )
}

export default Home
