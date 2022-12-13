import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import HotelList from '../Hotels/Hotels';

const Container = () => {
  <BrowserRouter>
    <HotelList />
  </BrowserRouter>;
};

it('CompanyListContainer renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
