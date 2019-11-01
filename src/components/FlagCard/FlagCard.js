import React from 'react';
import { connect } from 'react-redux';
import './FlagCard.scss'


const FlagCard = ({ countries, addPoints }) => {
  let name;
  let flag;
  
  if (countries[0]) {
    name = countries[0].name
    flag = countries[0].flag
  }

console.log(addPoints)

  return (
    <section className="flag-card-container">
      <h1>like hi</h1>
      <img src={flag} />
      <button onClick={(e) => addPoints(e)}>{name}</button>
      <button>Wrong Answer</button>
    </section>
  )
}

export const mapStateToProps = state => ({
  countries: state.countries,
});

export default connect(mapStateToProps, null)(FlagCard);
