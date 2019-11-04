import React from 'react';
import { shallow } from 'enzyme';
import { GameContainer, mapStateToProps, mapDispatchToProps } from './GameContainer';
import { saveCountries, removeCountryGuessed } from '../../actions';

describe ('GameContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<GameContainer countries={
      [
        {
          flag: 'https://restcountries.eu/data/srb.svg',
          name: 'Serbia',
          numericCode: 688,
          region: 'Europe'
        },
        {
          flag: 'https://restcountries.eu/data/lux.svg',
          name: 'Luxembourg',
          numericCode: 442,
          region: 'Europe'
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
            flag: 'https://restcountries.eu/data/srb.svg',
            name: 'Serbia',
            numericCode: 688,
            region: 'Europe'
          },
          {
            flag: 'https://restcountries.eu/data/lux.svg',
            name: 'Luxembourg',
            numericCode: 442,
            region: 'Europe'
          }
        ]
      }
      correctClass = 'positionB'
      wrongClass = 'positionA'
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should update state of points when addPoints is called', () => {
    const expected = 1;

    expect(wrapper.state('points')).toEqual(0);

    wrapper.instance().addPoints();

    expect(wrapper.state('points')).toEqual(expected);
  });

});

describe('mapStateToProps', () => {
  it('should return an object with a countries array', () => {
    const mockState = {
      countries: [
        {
          flag: 'https://restcountries.eu/data/srb.svg',
          name: 'Serbia',
          numericCode: 688,
          region: 'Europe'
        },
        {
          flag: 'https://restcountries.eu/data/lux.svg',
          name: 'Luxembourg',
          numericCode: 442,
          region: 'Europe'
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

  describe('mapDispatchToProps', () => {
    let mockCountries;
    let mockDispatch;
    beforeEach(() => {
      mockCountries = [
        {
          flag: 'https://restcountries.eu/data/srb.svg',
          name: 'Serbia',
          numericCode: 688,
          region: 'Europe'
        },
        {
          flag: 'https://restcountries.eu/data/lux.svg',
          name: 'Luxembourg',
          numericCode: 442,
          region: 'Europe'
        }
      ]
      mockDispatch = jest.fn();
    })
    it('should get countries based on region', () => {
      const actionToDispatch = saveCountries('SAVE_COUNTRIES', mockCountries);
      const mappedProps = mapDispatchToProps(mockDispatch);
  
      mappedProps.saveCountries('SAVE_COUNTRIES', mockCountries)
  
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should delete country from store', () => {
      const actionToDispatch = removeCountryGuessed('REMOVE_COUNTRY_GUESSED');
      const mappedProps = mapDispatchToProps(mockDispatch)
      
      mappedProps.removeCountryGuessed('REMOVE_COUNTRY_GUESSED');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });