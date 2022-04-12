import React, { useEffect, useState } from 'react';

const FormInput = ({ name, label, placeholder, value, disabled }) => {
    return (
        <>
            <div className={`group-input mb-3`}>
                <label className={`block font-bold mb-2 ` + (value ? 'text-gray-400' : 'text-red-500')}>{label}</label>
                <input disabled={disabled != null ? disabled : value ? true : false} name={name} placeholder={placeholder} defaultValue={value} className={`py-2 px-3 rounded border text-black w-full outline-0 hover:border-gray-500 focus:border-gray-500 transition-all h-10 ` + (value ? 'border-gray-200' : 'border-red-500')} />
            </div>
        </>
    );
};

export default FormInput;
