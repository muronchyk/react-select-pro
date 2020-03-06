import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

import SelectPro, { aaa } from '../dist';

const root = document.createElement('div');
document.querySelector('body').appendChild(root);

ReactDOM.render(<SelectPro />, root);
