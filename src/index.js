import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import ConfigureStore from './redux/ConfigureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ConfigureStore}>
      <App />
    </Provider>
  </React.StrictMode>,
);
