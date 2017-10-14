import React from 'react';
import PropTypes from 'prop-types';
import { dataFriendly } from '../helpers';
import Checkbox from '../components/Checkbox';

const CheckboxGroup = ({ groupLabel, labels, defaultLabels, onChange }) => {
    return (
        <div className='form-group'>
            <label>{groupLabel}:</label>
            <br />
            {labels.map((label) => {
                const value = dataFriendly(label);
                return <Checkbox
                    key={value}
                    label={label}
                    value={value}
                    defaultChecked={defaultLabels.indexOf(value) > -1}
                    onChange={onChange}
                />;
            })}
        </div>
    );
};

CheckboxGroup.propTypes = {
    // Required
    groupLabel: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    defaultLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired
};

export default CheckboxGroup;
