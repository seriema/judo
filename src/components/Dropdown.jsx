import React from 'react';
import PropTypes from 'prop-types';
import { dataFriendly } from '../helpers';

const Dropdown = ({ options, defaultValue, label, onChange }) => {
    const name = dataFriendly(label);

    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}:</label>
            <br />
            <select className='custom-select mr-2 mb-2' name={name} defaultValue={defaultValue} onChange={(event) => onChange(event.target.value)}>
                {options.map((option) => {
                    return (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    );
                })}
            </select>
        </div>
    );
};

Dropdown.propTypes = {
    // Required
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
    defaultValue: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Dropdown;
