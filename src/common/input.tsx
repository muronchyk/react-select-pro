import React from 'react';
import classNames from 'classnames';

interface InputProps {
    value?: string;
    placeholder?: string;
    className?: string;
    isSearchable?: boolean;

    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, placeholder, className, isSearchable, onChange, onClick }: InputProps) => {
    return (
        <input
            // TODO: finish searchable
            className={classNames(className, 'select-input', { 'select-input-searchable': isSearchable })}
            placeholder={placeholder}
            value={value}
            readOnly={isSearchable}
            onChange={onChange}
            onClick={onClick}
        />
    );
};
