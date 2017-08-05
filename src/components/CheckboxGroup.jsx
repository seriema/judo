import React from 'react';
import { dataFriendly } from '../helpers';

const CheckboxGroup = ({ labels, defaultLabels, onChange }) => {
    return (
        <div className='form-group'>
            {labels.map((label) => {
                const value = dataFriendly(label);
                return (
                    <label key={label} className='custom-control custom-checkbox mb-2 mr-2'>
                        <input type='checkbox' id={value} value={value} defaultChecked={defaultLabels.indexOf(value) > -1} className='custom-control-input' onChange={(event) => onChange(event.target.value)} />
                        <span className='custom-control-indicator'/>
                        <span htmlFor={label} className='custom-control-description'>{label}</span>
                    </label>
                );
            })}
        </div>
    );
};

export default CheckboxGroup;
