import React, { useState } from 'react';

const Button2 = ({label,onClick,className,style}) => {
  
  return (
    <>
      <div className={`bg-third rounded-md h-[38px] text-main-color font-semibold px-[20px] cursor-pointer flex items-center justify-center flex-shrink-0 ${className} ` + 
        (style &&
          (`w-full`)
        )
      } onClick={onClick}>
          {label}
      </div>
    </>
  );
};

export default Button2;
