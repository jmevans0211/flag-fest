import React from 'react';
import { shallow } from 'enzyme';
import { FlagCard } from './FlagCard';

describe ('FlagCard', () => {
  let wrapper;
  beforeEach(() => {
    let mockHandleGuess = jest.fn()
    wrapper = shallow(<FlagCard 
      countries={
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
      }
      handleGuess={mockHandleGuess}
    />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });



});