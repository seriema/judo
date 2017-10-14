import React from 'react'
import PropTypes from 'prop-types';

const ButtonLink = ({ text, onClick }) => {
    return (
        <button
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
            className='btn btn-link'>
            {text}
        </button>
    );
};

ButtonLink.propTypes = {
    // Required
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ButtonLink;
