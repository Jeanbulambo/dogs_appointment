

import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reservations } from './reservRedux/reservations';

const middleware = applyMiddleware(thunk, logger);

const store = configureStore({
  reducer: {
    models: modelReducer,
    details: detailReducer,
    reservations,
    current_user: userReducer,
  },
}, middleware);

export default store;