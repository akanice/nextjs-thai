import React, { useEffect, useState } from 'react';

const FormInputWithIcon = ({type,name,label,placeholder,value,icon,className,onChange,disabled}) => {
  const [inputType, setInputType] = useState(type);
  return (
    <>
      <div className={`group-input w-full ${className}`}>
        {label && (<label className={`block text-normal font-semibold mb-1 text-third`}>{label}</label>)}
        <div className='relative'>
          <input type={inputType} name={name} disabled = {disabled} placeholder={placeholder} defaultValue={value} onChange ={onChange} className={`py-2 px-3 border border-gray-400 rounded-md text-second-color w-full outline-0 hover:border-gray-500 focus:border-gray-500 transition-all`} />
          {icon && (
            <div onClick = {() => {setInputType (inputType == "password" ? 'text' : "password") }} className='absolute right-[10px] top-[10px]'>{icon}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default FormInputWithIcon;
