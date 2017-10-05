import React from 'react'

const Button = ({ text, type, onClick }) => {
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

export default Button;
