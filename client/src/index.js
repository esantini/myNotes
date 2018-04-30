import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import axios from './myAxios';
import App from './App';

import reducers from './reducers';
import * as actionTypes from './actions/types'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

axios('api/notes')
  .then(res => res.json())
  .then(response => {
    store.dispatch({ type: actionTypes.GET_NOTES, notes: response });
  });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
