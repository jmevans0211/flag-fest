import React from 'react';
import { shallow } from 'enzyme';
import { FlagCard, mapStateToProps } from './FlagCard';
// import { mapDispatchToProps } from '../ChooseRegion/ChooseRegion';

describe ('FlagCard', () => {
  let wrapper;
  let mockHandleGuess = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<FlagCard 
      countries={
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
      handleGuess={mockHandleGuess}
      flagsGuessed={
        [
          {
            flag: 'https://restcountries.eu/data/lux.svg',
            name: 'Luxembourg',
            numericCode: 442,
            region: 'Europe'
          }
        ]
      }
      correctClass='positionA'
      wrongClass='positionB'
    />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when answer buttons get different classNames', () => {
    const wrapper = shallow(
      <FlagCard 
      countries={
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
      handleGuess={mockHandleGuess}
      flagsGuessed={
        [
          {
            flag: 'https://restcountries.eu/data/lux.svg',
            name: 'Luxembourg',
            numericCode: 442,
            region: 'Europe'
          }
        ]
      }
      correctClass='positionB'
      wrongClass='positionA'
      />
    )
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call handleGuess when answer is clicked', () => {
    wrapper.handleGuess = jest.fn();

    wrapper.find('h6').at(0).simulate('click');

    expect(wrapper.handleGuess).toHaveBeenCalledWith('correct');
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