import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './components/App';

const ConnectedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
