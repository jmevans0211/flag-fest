import React from 'react';
import { Link } from 'react-router-dom';
import './StartPage.scss'

const StartPage = () => {
  return (
    <div className="start-container">
      <div className="start-content">
        <h1>Flag Fest</h1>
        <Link to='/flag-fest' >
          <h3 className="start-button" role="button">START GAME</h3>
        </Link>
      </div>
    </div>
  )

}

export default StartPage;