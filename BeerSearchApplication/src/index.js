// @flow

import './index.css';

// Libs
import React            from 'react';
import ReactDOM         from 'react-dom';
import Root             from './components/Root';
import configureStore   from './helpers/configureStore';

const store = configureStore();

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);

export default store;