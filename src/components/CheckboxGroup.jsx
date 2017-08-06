import React from 'react';
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

export default CheckboxGroup;
