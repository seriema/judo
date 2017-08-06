import React from 'react';

const Checkbox = ({ label, value, defaultChecked, onChange }) => {
    return (
        <label key={label} className='custom-control custom-checkbox mb-2 mr-2'>
            <input type='checkbox' id={value} value={value} defaultChecked={defaultChecked} className='custom-control-input' onChange={(event) => onChange(event.target.value)} />
            <span className='custom-control-indicator'/>
            <span htmlFor={label} className='custom-control-description'>{label}</span>
        </label>
    );
};

export default Checkbox;
