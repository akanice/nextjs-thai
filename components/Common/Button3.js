import React, { useState } from 'react';

const Button3 = ({label,onClick,className,style}) => {
  
  return (
    <>
      <div className={`bg-green-600 rounded-md h-[38px] text-white font-semibold px-[20px] cursor-pointer flex items-center justify-center ${className} ` + 
        (style &&
          (`w-full`)
        )
      } onClick={onClick}>
          {label}
      </div>
    </>
  );
};

export default Button3;
