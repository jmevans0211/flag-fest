import React from 'react';
import { shallow } from 'enzyme';
import { GameContainer } from './GameContainer';

describe ('GameContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<GameContainer countries={
      [
        {
          flag: "https://restcountries.eu/data/srb.svg",
          name: "Serbia",
          numericCode: 688,
          region: "Europe"
        },
        {
          flag: "https://restcountries.eu/data/lux.svg",
          name: "Luxembourg",
          numericCode: 442,
          region: "Europe"
        }
      ]
    }/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state of points when handleGuess is called', () => {


  });

  // it('should update state of flagsGuessed when handleGuess is called', () => {

  // });

  // it('should update state of points when handleGuess is called', () => {

  // });

});