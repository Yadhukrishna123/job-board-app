import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from './redux/Store';
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

