import React from 'react';

const ArrowNext = ({className, onClick}) => {
    return (
	    <svg className={className} onClick = {onClick} width="63" height="63" viewBox="0 0 33 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="31.5" cy="31" r="30.5" fill="white" stroke="#B9B9B9"/>
        <path d="M21.712 30.1015L42.4202 30.6066M42.4202 30.6066L31.1064 41.9203M42.4202 30.6066L31.1065 19.2929" stroke="#04A0D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    )
}

export default ArrowNext