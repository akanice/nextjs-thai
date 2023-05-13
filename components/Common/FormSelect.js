import React, { useEffect, useState } from 'react';

const FormSelect = ({options,name,label,defaultValue,className}) => {

  return (
    <>
      <div className={`${className}`}>
        {label && (
          <label className={`block font-medium mb-1 ` + (defaultValue ? 'text-gray-400' : 'text-red-500')}>{label}</label>
        )}
        <select className={`bg-white px-3 py-2 border border-gray-200 rounded-md outline-0 h-12`} name={name}>
          {options?.map((item, ind) => (
            <option key={ind} value={item.value}>{item.title}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default FormSelect;
