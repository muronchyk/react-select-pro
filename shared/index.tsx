import React from 'react';
import './styles.scss';

interface ISelectProps {
  className: string;
}

export const showMessage = (message: string): string => {
  console.log(message);
  return message;
};

const SelectPro: React.FC<ISelectProps> = props => {
  return <div className={props.className}>THE SELECT PRO IS HERE!!!</div>;
};

export default SelectPro;
