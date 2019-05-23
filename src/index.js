
import React, { useContext } from 'react';
import { render } from 'react-dom';
import App from './App';
import Store from './store/Store';
import './store/style.css';

const Index = () => (
  <Store>
    <App />
  </Store>
);

render(<Index />, document.getElementById('root'));
