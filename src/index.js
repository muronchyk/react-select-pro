import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

const root = document.createElement('div');
document.querySelector('body').appendChild(root);

import { abc } from '../dist/main';

console.log(abc);

ReactDOM.render(
  <div>
    <h1>1231231312</h1>
  </div>,
  root
);
