import React from 'react'

const Button = ({ text, onClick }) => {
    return (
        <button
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
            className='btn btn-primary mb-2'>
            {text}
        </button>
    );
};

export default Button;
