import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

import App from './App';
import { reducer } from './Store/reducer';

const store = createStore(
  reducer,
  composeWithDevTools()
)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

