import React from 'react';

const ArrowBack = ({className, onClick}) => {
    return (
	    <svg className = {className} onClick = {onClick} width="62" height="62" viewBox="0 0 93 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle r="30.5" transform="matrix(-1 0 0 1 31 31)" fill="white" stroke="#B9B9B9"/>
        <path d="M40.788 30.1015L20.0798 30.6066M20.0798 30.6066L31.3936 41.9203M20.0798 30.6066L31.3935 19.2929" stroke="#04A0D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    )
}

export default ArrowBack