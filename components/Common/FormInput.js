import React, { useEffect, useState, forwardRef, memo, useMemo } from 'react';

const FormInput =  forwardRef(({type,name,label,placeholder,value,className,...rest}, ref) => {
  return (
    <>
      <div className={`group-input tracking-tighter ${className}`}>
        {label && (<label className={`block text-normal font-semibold mb-1 text-third`}>{label}</label>)}
        <input type={type} name={name} placeholder={placeholder} ref={ref} defaultValue={value} {...rest} className={`h-12 py-2 px-3 border border-gray-200 rounded-md text-second-color w-full outline-0 hover:border-gray-500 focus:border-gray-500 transition-all`} />
      </div>
    </>
  );
})
FormInput.displayName = `FormInput`;
export default FormInput;
