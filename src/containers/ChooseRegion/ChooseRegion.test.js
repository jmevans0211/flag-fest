import React from 'react';
import { shallow } from 'enzyme';
import { saveCountries } from './../../actions';
import { ChooseRegion, mapStateToProps, mapDispatchToProps } from './ChooseRegion';

describe ('ChooseRegion', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ChooseRegion countries={
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

  it('should call handleRegion when region is clicked', () => {
    wrapper.instance().handleRegion = jest.fn()
    const mockEvent = { stopPropagation: jest.fn() }

    wrapper.find('img').at(0).simulate('click', mockEvent);

    expect(wrapper.instance().handleRegion).toHaveBeenCalledWith(mockEvent, 'africa')
  });

  it('should call handleRegion when region is clicked', () => {
    wrapper.instance().handleRegion = jest.fn()
    const mockEvent = { stopPropagation: jest.fn() }

    wrapper.find('img').at(1).simulate('click', mockEvent);

    expect(wrapper.instance().handleRegion).toHaveBeenCalledWith(mockEvent, 'europe')
  });

  it('should call handleRegion when region is clicked', () => {
    wrapper.instance().handleRegion = jest.fn()
    const mockEvent = { stopPropagation: jest.fn() }

    wrapper.find('img').at(2).simulate('click', mockEvent);

    expect(wrapper.instance().handleRegion).toHaveBeenCalledWith(mockEvent, 'asia')
  });

  it('should call handleRegion when region is clicked', () => {
    wrapper.instance().handleRegion = jest.fn()
    const mockEvent = { stopPropagation: jest.fn() }

    wrapper.find('img').at(3).simulate('click', mockEvent);

    expect(wrapper.instance().handleRegion).toHaveBeenCalledWith(mockEvent, 'americas')
  });

  it('should call handleRegion when region is clicked', () => {
    wrapper.instance().handleRegion = jest.fn()
    const mockEvent = { stopPropagation: jest.fn() }

    wrapper.find('img').at(4).simulate('click', mockEvent);

    expect(wrapper.instance().handleRegion).toHaveBeenCalledWith(mockEvent, 'oceania')
  });
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


describe('mapDispatchToProps', () => {
  it('should save countries based on region', () => {
    const mockCountries = [
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
    const mockDispatch = jest.fn();
    const actionToDispatch = saveCountries('SAVE_COUNTRIES', mockCountries);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.saveCountries('SAVE_COUNTRIES', mockCountries)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });
});