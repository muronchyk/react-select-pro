import React, { useState, useCallback, useRef, useEffect } from 'react';
import classNames from 'classnames';

import { Input } from './input';
import { Options } from './options';

import { OptionsType } from './types';

import './styles.scss';

interface SelectProps {
    name?: string;
    placeholder?: string;
    className?: string;
    inputClassName?: string;

    isDisabled?: boolean;
    isSearchable?: boolean;
    isClearable?: boolean;

    value?: string;
    options?: OptionsType;

    onChange?: Function;
    onBlur?: Function;
    onInputChange?: Function;
}

const SelectPro = ({
    name,
    options,
    placeholder,
    onInputChange,
    className,
    inputClassName,
    isSearchable = true
}: SelectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [inputValue, setInputValue] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOutsideClick = (e: MouseEvent) => {
        // todo: update outside click
        // @ts-ignore
        if (containerRef && !containerRef.current.contains(e.currentTarget)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        const wrapper = document.getElementsByTagName('body')[0];

        if (isMenuOpen) {
            wrapper.addEventListener('click', handleOutsideClick);
        }

        return () => {
            wrapper.removeEventListener('click', handleOutsideClick);
        };
    }, [handleOutsideClick]);

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>): void => {
            const { value } = e.currentTarget;

            setInputValue(value);

            onInputChange && onInputChange(name, value, e);
        },
        [onInputChange]
    );

    const handleInputClick = useCallback(() => {
        setIsMenuOpen(open => !open);
    }, []);

    return (
        <div ref={containerRef} className={classNames(className, 'select')}>
            <Input
                className={inputClassName}
                value={inputValue}
                placeholder={placeholder}
                isSearchable={isSearchable}
                onClick={handleInputClick}
                onChange={handleInputChange}
            />
            {isMenuOpen && <Options options={options} />}
        </div>
    );
};

export default SelectPro;
