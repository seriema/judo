import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, value, defaultChecked, onChange }) => {
    return (
        <label key={label} className='custom-control custom-checkbox mb-2 mr-2'>
            <input type='checkbox' id={value} value={value} defaultChecked={defaultChecked} className='custom-control-input' onChange={(event) => onChange(event.target.value)} />
            <span className='custom-control-indicator'/>
            <span htmlFor={label} className='custom-control-description'>{label}</span>
        </label>
    );
};

Checkbox.propTypes = {
    // Required
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    defaultChecked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Checkbox;
