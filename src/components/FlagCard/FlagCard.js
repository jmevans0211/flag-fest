import React from 'react';
import { connect } from 'react-redux';
import { saveCountries } from './../../actions';
import './FlagCard.scss'


const FlagCard = ({ countries }) => {
  console.log('in flagcard---->', countries[0])
  let name;
  let flag;
  
  if(countries[0]) {
    name = countries[0].name
    flag = countries[0].flag
  }

  console.log('name??--->', name)

  return (
    <section className="flag-card-container">
      <h1>like hi</h1>
      <img src={flag} />
      <button>{name}</button>
      <button>Wrong Answer</button>
    </section>
  )
}

export const mapStateToProps = state => ({
  countries: state.countries,
});

// export const mapDispatchToProps = dispatch => ({
//   saveCountries: countries => dispatch(saveCountries(countries))
// });

export default connect(mapStateToProps, null)(FlagCard);
