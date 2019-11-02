import React from 'react';
import { connect } from 'react-redux';
import './FlagCard.scss'


const FlagCard = ({ countries, handleGuess }) => {
  let name;
  let flag;
  
  if (countries[0]) {
    name = countries[0].name
    flag = countries[0].flag
  }

  const wrongAnswers = countries.map(country => {
    return country.name
  })

  let wrongAnswer = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];


  return (
    <section className="flag-card-container">
      <h1>like hi</h1>
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
