import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import AllCompanies from './Allcompanies/Allcompanies';
import CompanyDetails from './CompanyDetails/CompanyDetail';
import Exchange from './Exchange/Exchange';

const store = configureStore({
  reducer: {
    AllCompanies, CompanyDetails, Exchange,
  },
  middleware: [thunk],
});

export default store;
