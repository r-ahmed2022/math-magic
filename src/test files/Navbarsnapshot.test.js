import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

it('Navbar renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
