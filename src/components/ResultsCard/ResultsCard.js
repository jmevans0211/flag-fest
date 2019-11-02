import React from 'react';
import { Link } from 'react-router-dom';
import './ResultsCard.scss'

const ResultsCard = ({ points, flagsGuessed }) => {
  return(
    <main>
      <h4>Score: {points}/{flagsGuessed.length}</h4>
      <p>Correct Answers:</p>
    </main>
  )
}

export default ResultsCard;