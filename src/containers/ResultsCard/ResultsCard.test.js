import React from 'react';
import { shallow } from 'enzyme';
import  {ResultsCard, mapStateToProps } from './ResultsCard';

describe ('ResultsCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ResultsCard 
      points={1}
      flagsGuessed={
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
    />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});