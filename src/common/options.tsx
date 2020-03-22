import React from 'react';

import { OptionsType, OptionType } from './types';

interface OptionsProps {
    options: OptionsType;
}

export const Options = ({ options }: OptionsProps) => {
    return (
        <div className='select-options-container'>
            {options.map(({ label, value }: OptionType) => {
                return (
                    <div key={value} className='select-option'>
                        {label}
                    </div>
                );
            })}
        </div>
    );
};
