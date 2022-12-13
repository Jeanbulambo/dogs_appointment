import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Hotel from '../Hotel/Hotel';

const Container = () => {
  <BrowserRouter>
    <Hotel />
  </BrowserRouter>;
};

it('CompanyListContainer renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
