import React, { useState } from 'react';

const Button = ({label,onClick,className,style}) => {
  
  return (
    <>
      <div className={`bg-blue-500 py-2 px-6 rounded-md text-white font-semibold cursor-pointer flex items-center justify-center ${className} ` + 
       (style &&
        (`w-full`)
      )
    } onClick={onClick}>
        {label}
      </div>
    </>
  );
};

export default Button;
