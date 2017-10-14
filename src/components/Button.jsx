import React from 'react'
import PropTypes from 'prop-types';

const Button = ({ text, type, onClick }) => {
    type = type ? type : 'secondary'; // TODO: Does React have a nicer way of setting a "default value"?
    const buttonTypeClass = 'btn-' + type;
    const buttonClass = 'btn mb-2 ' + buttonTypeClass;

    return (
        <button
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
            className={buttonClass}>
            {text}
        </button>
    );
};

Button.propTypes = {
    // Required
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,

    // Optional
    type: PropTypes.oneOf(['primary', 'secondary'])
};

export default Button;
