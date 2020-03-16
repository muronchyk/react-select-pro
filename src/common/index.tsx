import React from 'react';
import './styles.scss';

interface SelectProps {
    className?: string;
}

const SelectPro: React.FC<SelectProps> = props => {
    return <div className={props.className}>THE SELECT PRO IS HERE!!!</div>;
};

export default SelectPro;
