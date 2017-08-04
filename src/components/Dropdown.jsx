import React from 'react';

const Dropdown = ({ options, defaultValue, onChange }) => {
    return (
        <div className='form-group'>
            <label className='sr-only' htmlFor='belt'>Belts</label>
            <select className='custom-select mr-2 mb-2' name='belt' defaultValue={defaultValue} onChange={(event) => onChange(event.target.value)}>
                {options.map((option) => {
                    return (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    );
                })}
            </select>
        </div>
    );
};

export default Dropdown;
