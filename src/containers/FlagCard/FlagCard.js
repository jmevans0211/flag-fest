import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './FlagCard.scss'


export const FlagCard = ({ countries, handleGuess, flagsGuessed, correctClass, wrongClass }) => {
  let name;
  let flag;
  let wrongAnswer;

  
  if (countries[0]) {
    name = countries[0].name
    flag = countries[0].flag
  }

  const wrongAnswers = countries.map(country => {
    return country.name
  });

  if (countries.length > 1) {
    do {
      wrongAnswer = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
    } while (wrongAnswer === name)
  } else {
    wrongAnswer = flagsGuessed[Math.floor(Math.random() * flagsGuessed.length)].name;
  }

  return (
    <section className="flag-card-container">
      <img className='card-flag' src={flag} alt='Flag'/>
      <div className="answer-container">
        <h6 className={correctClass} onClick={() => handleGuess('correct')} role="button">{name}</h6>
        <h6 className={wrongClass} onClick={() => handleGuess('incorrect')} role="button">{wrongAnswer}</h6>
      </div>
    </section>
  )
}

export const mapStateToProps = state => ({
  countries: state.countries,
});

export default connect(mapStateToProps, null)(FlagCard);

FlagCard.propTypes = {
  countries: PropTypes.array.isRequired,
  handleGuess: PropTypes.func.isRequired,
  flagsGuessed: PropTypes.array.isRequired,
  correctClass: PropTypes.string.isRequired,
  wrongClass: PropTypes.string.isRequired,
}