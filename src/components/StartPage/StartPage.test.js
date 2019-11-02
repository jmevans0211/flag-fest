import React from 'react';
import { shallow } from 'enzyme';
import StartPage from './StartPage';

describe ('StartPage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<StartPage />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });



});