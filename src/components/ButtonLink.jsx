import React from 'react'

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

export default ButtonLink;
