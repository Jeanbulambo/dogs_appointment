import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Hotels from '../Hotels/Hotels';

const Container = () => {
  <BrowserRouter>
    <Hotels />
  </BrowserRouter>;
};

it('CompanyListContainer renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
