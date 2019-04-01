import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postReducer from './Components/Reducer/postReducer';


const store = createStore(postReducer);
//const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();