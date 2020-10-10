import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Categories from './components/Categories'
import Search from './components/Search'

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Chuck Norris testing', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('should check if the title is rendered', () => {
    expect(wrapper.find('.title').text()).toContain('Chuck Norris Jokes')
  })

  test('should check initial state and after search button click', () => {
    expect(wrapper.state('searchValue')).toBe('')
    wrapper.setState({ input: 'testvalue'})
    wrapper.find('input').at(1).simulate('click')
    expect(wrapper.state('searchValue')).toBe('testvalue')
  })

  test('should check if Categories exists by default', () => {
    expect(wrapper.find(Categories).exists()).toBeTruthy()
  })

  test('should check if Search does not exist by default', () => {
    expect(wrapper.find(Search).exists()).toBeFalsy()
  })

  test('should check if Search is rendered when correct state', () => {
    wrapper.setState({ input: 'test', searchValue: 'test'})
    wrapper.update()
    expect(wrapper.find(Search).exists()).toBeTruthy()
  })
})