import React, { useEffect, useState } from 'react';

const FormSelect2 = ({options,name,label,defaultValue,className}) => {

  return (
    <>
      <div className={`${className}`}>
        {label && (
          <label className={`block font-bold mb-2 ` + (defaultValue ? 'text-gray-400' : 'text-red-500')}>{label}</label>
        )}
        <select className={`py-2 px-3 rounded border-b border-gray-200 text-black border-b w-full outline-0 h-10`} name={name}>
          {options?.map((item, ind) => (
            <option key={ind} value={item.value}>{item.title}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default FormSelect2;
