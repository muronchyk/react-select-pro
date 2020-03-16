import React from 'react';
import './styles.scss';

interface SelectProps {
    name?: string;
    placeholder?: string;
    className?: string;
    inputClassName?: string;

    isDisabled?: boolean;
    isSearchable?: boolean;
    isClearable?: boolean;

    isOpen?: boolean;
    value?: string;
    options?: [];

    onChange?: Function;
    onBlur?: Function;
    onInputChange?: Function;

    closeAfterSelect?: Function;
}

const SelectPro: React.FC<SelectProps> = props => {
    return (
        <div className='select-wrapper'>
            <input className='select-input' />
            <div className='select-options'>
                <div className='select-option'>option 1</div>
                <div className='select-option'>option 2</div>
            </div>
        </div>
    );
};

export default SelectPro;
