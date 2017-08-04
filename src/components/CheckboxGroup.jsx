import React from 'react';

const CheckboxGroup = ({ labels, onChange }) => {
    return (
        <div className='form-group'>
            {labels.map((label) => {
                return (
                    <label key={label} className='custom-control custom-checkbox mb-2 mr-2'>
                        <input type='checkbox' id={label} value={label} className='custom-control-input' onChange={(event) => onChange(event.target.value)} />
                        <span className='custom-control-indicator'/>
                        <span htmlFor={label} className='custom-control-description'>{label}</span>
                    </label>
                );
            })}
        </div>
    );
};

export default CheckboxGroup;
