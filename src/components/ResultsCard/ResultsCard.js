import React from 'react';
import { Link } from 'react-router-dom';
import './ResultsCard.scss'

const ResultsCard = ({ points, flagsGuessed }) => {
  const answers = flagsGuessed.map(flag => {
    return (
      <div>
        <p>{flag.name}</p>
        <img src={flag.flag} />
      </div>
      ) 
  })
  return (
    <main>
      <h4>Score: {points}/{flagsGuessed.length}</h4>
      <section className="correct-answer-display">Correct Answers: {answers}</section>
      <Link to="/">
          <p>Play Again!</p>
        </Link>
    </main>
  )
}

export default ResultsCard;