import React from 'react';
import ReactDOM from 'react-dom';
import BasicExample  from '../index.jsx';
import { mount, shallow, render } from 'enzyme';
import { Link, MemoryRouter } from 'react-router-dom'

it('transitions to about page', () => {
  //https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/testing.md
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <BasicExample />
    </MemoryRouter>
  );
  const link = wrapper.find(Link).findWhere(n => n.text() === 'About').first();

  // https://github.com/airbnb/enzyme/issues/516
  link.simulate('click', { button: 0 });

  console.assert(wrapper.html().match(/This is the about page/))
  console.assert(location.href.match("/about"));
});

it('transitions to home page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/about' ]}>
      <BasicExample />
    </MemoryRouter>
  );
  const link = wrapper.find(Link).findWhere(n => n.text() === 'Home').first();

  link.simulate('click', { button: 0 });

  console.assert(wrapper.html().match(/This is the home page/))
  console.assert(location.href.match("/$"));
});
