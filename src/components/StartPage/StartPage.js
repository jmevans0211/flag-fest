import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <div className="start-container">
      <Link to='/flag-fest' >
        <h3 className="start-button" role="button">START GAME</h3>
      </Link>
    </div>
  )

}

export default StartPage;