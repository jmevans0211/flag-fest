import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ResultsCard.scss'

const ResultsCard = ({ points, flagsGuessed }) => {
  const answers = flagsGuessed.map(flag => {
    return (
      <div key={flag.numericCode} className="correct-answer">
        <img src={flag.flag} alt={flag.name} />
        <p>{flag.name}</p>
      </div>
      ) 
  })
  return (
    <main className="results-card">
      <h4 className="final-score">Score: {points}/{flagsGuessed.length}</h4>
      <section className="correct-answers-display">Correct Answers: {answers}</section>
      <Link className="play-again-link" to="/">
        <p className="play-again" role="button">Play Again!</p>
      </Link>
    </main>
  )
}

export default ResultsCard;

ResultsCard.propTypes = {
  points: PropTypes.number.isRequired,
  flagsGuessed: PropTypes.array.isRequired,
}