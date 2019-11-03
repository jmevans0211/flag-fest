import React from 'react';
import { shallow } from 'enzyme';
import { ChooseRegion } from './ChooseRegion';

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

  it.skip('should call handleRegion when region is clicked', () => {
    const mockHandleRegion = jest.fn();

    wrapper.find('img').at(0).simulate('click');

    expect(mockHandleRegion).toHaveBeenCalledWith('Africa')

  });

});