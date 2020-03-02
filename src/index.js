import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

const root = document.createElement('div');
document.querySelector('body').appendChild(root);

ReactDOM.render(
  <div>
    <h1>Hello JS!</h1>
  </div>,
  root
);
