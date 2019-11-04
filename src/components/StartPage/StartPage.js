import React from 'react';
import { Link } from 'react-router-dom';
import './StartPage.scss'

const StartPage = () => {
  return (
    <div className="start-content">
      <h1 className="flag-fest-heading">Flag Fest</h1>
      <Link to='/flag-fest' className='router-link'>
        <div className="start-button-container">
          <h3 className="start-button" role="button">START GAME</h3>
        </div>
      </Link>
    </div>
  )
}

export default StartPage;