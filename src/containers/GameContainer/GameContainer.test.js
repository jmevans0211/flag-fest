import React from 'react';
import { shallow } from 'enzyme';
import { GameContainer, mapStateToProps, mapDispatchToProps } from './GameContainer';

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
    }
    correctClass = 'positionA'
    wrongClass = 'positionB'
    />)
  });

  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should match snapshot when class names change for answer buttons', () => {
    const wrapper = shallow(
      <GameContainer countries={
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
      correctClass = 'positionB'
      wrongClass = 'positionA'
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should update state of points when handleGuess is called', () => {


  });

  // it('should update state of flagsGuessed when handleGuess is called', () => {

  // });

  // it('should update state of points when handleGuess is called', () => {

  // });

});

describe('mapStateToProps', () => {
  it('should return an object with a countries array', () => {
    const mockState = {
      countries: [
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
      ],
      filter: 'SAVE_COUNTRIES'
    };
    const expected = {
      countries: mockState.countries
    }

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });