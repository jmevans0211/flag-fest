import React from 'react';
import { shallow } from 'enzyme';
import { saveCountries } from './../../actions';
import { ChooseRegion, mapStateToProps, mapDispatchToProps } from './ChooseRegion';

describe ('ChooseRegion', () => {
  let wrapper;
  let mockCountries;
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
    }
    mockCountries = {
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

  it('should have default states', () => {
    expect(wrapper.state('region')).toEqual('');
    expect(wrapper.state('activeRegion')).toEqual('');
    expect(wrapper.state('tenLimit')).toEqual(false);
    expect(wrapper.state('activeAmount')).toEqual('');
  });

  it('should update state with a new region when handleRegion is called', () => {
    const mockEvent = { stopPropagation: jest.fn() }
    const expected = 'Europe'

    expect(wrapper.state('region')).toEqual('');

    wrapper.instance().handleRegion(mockEvent, 'europe');

    expect(wrapper.state('region')).toEqual(expected);
  });

  it('should update state of activeRegion when handleRegion is called', () => {
    const mockEvent = { stopPropagation: jest.fn() }
    const expected = 'americas'

    expect(wrapper.state('activeRegion')).toEqual('');

    wrapper.instance().handleRegion(mockEvent, 'americas');

    expect(wrapper.state('activeRegion')).toEqual(expected);
  });

  it('should update state of tenLimit when handleFlagAmount is called', () => {
    const expected = true;

    expect(wrapper.state('tenLimit')).toEqual(false);

    wrapper.instance().handleFlagAmount('ten');

    expect(wrapper.state('tenLimit')).toEqual(expected);
  });

  it('should update state with of activeAmount when handleFlagAmount is called', () => {
    const expected = 'all';

    expect(wrapper.state('activeAmount')).toEqual('');

    wrapper.instance().handleFlagAmount('all');

    expect(wrapper.state('activeAmount')).toEqual(expected);
  });

  it('should resetState of region', () => {
    const expected = '';

    wrapper.setState({region: 'Europe'})

    wrapper.instance().resetState();

    expect(wrapper.state('region')).toEqual(expected);
  });

  it('should resetState of tenLimit', () => {
    const expected = false;

    wrapper.setState({tenLimit: true})

    wrapper.instance().resetState();

    expect(wrapper.state('tenLimit')).toEqual(expected);
  });

  it('should resetState of activeRegion', () => {
    const expected = '';

    wrapper.setState({activeRegion: 'Europe'})

    wrapper.instance().resetState();

    expect(wrapper.state('activeRegion')).toEqual(expected);
  });

  it('should resetState of activeAmount', () => {
    const expected = '';

    wrapper.setState({activeAmount: 'ten'})

    wrapper.instance().resetState();

    expect(wrapper.state('activeAmount')).toEqual(expected);
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