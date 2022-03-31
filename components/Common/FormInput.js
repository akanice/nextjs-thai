import React, { useEffect, useState } from 'react';

const FormInput = ({name,label,placeholder,value}) => {

  return (
    <>
      <div className={`group-input mb-3`}>
        <label className={`block font-bold ` + (value ? 'text-gray-400' : 'text-red-500')}>{label}</label>
        <input name={name} placeholder={placeholder} defaultValue={value} className={`py-1 border-b border-gray-200 text-black w-full outline-0 hover:border-gray-500 focus:border-gray-500 transition-all`} />
      </div>
    </>
  );
};

export default FormInput;
