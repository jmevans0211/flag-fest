import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ResultsCard.scss'

export const ResultsCard = ({ points, flagsGuessed, errorMessage }) => {
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
      {errorMessage === '' && 
      <>
        <h4 className="final-score">Score: {points}/{flagsGuessed.length}</h4>
        <section className="correct-answers-display">Correct Answers: {answers}</section>
        <Link className="play-again-link" to="/">
          <p className="play-again" role="button">Play Again!</p>
        </Link>
      </>
      }
      {errorMessage !== '' && 
        <p className="error-message">{errorMessage}</p>
      }
    </main>
  )
}

export const mapStateToProps = state => ({
  errorMessage: state.errorMessage,
});

export default connect(mapStateToProps, null)(ResultsCard);

ResultsCard.propTypes = {
  points: PropTypes.number.isRequired,
  flagsGuessed: PropTypes.array.isRequired,
  errorMessage: PropTypes.string,
};
