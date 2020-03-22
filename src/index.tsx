import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

import SelectPro from './common';

const root = document.createElement('div');
document.querySelector('body').appendChild(root);

const App = () => {
    const onChange = () => {
        console.log('ON_CHANGE');
    };

    const onInputChange = () => {
        console.log('ON_INPUT_CHANGE');
    };

    return (
        <div className='app-wrapper'>
            <SelectPro
                options={[
                    { value: 1001, label: 'Option 1' },
                    { value: 1002, label: 'S-Option 2' }
                ]}
                placeholder='Type here'
                onChange={onChange}
                onInputChange={onInputChange}
            />
        </div>
    );
};

ReactDOM.render(<App />, root);
