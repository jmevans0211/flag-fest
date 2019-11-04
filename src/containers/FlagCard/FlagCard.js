import React from 'react';
import { connect } from 'react-redux';
import './FlagCard.scss'


export const FlagCard = ({ countries, handleGuess, flagsGuessed }) => {
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
      <img src={flag} />
      <button onClick={() => handleGuess('correct')}>{name}</button>
      <button onClick={() => handleGuess('incorrect')}>{wrongAnswer}</button>
    </section>
  )
}

export const mapStateToProps = state => ({
  countries: state.countries,
});

export default connect(mapStateToProps, null)(FlagCard);
