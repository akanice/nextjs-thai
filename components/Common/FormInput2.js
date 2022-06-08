import React, { useEffect, useState } from 'react';

const FormInput = ({ name, label, placeholder, value, disabled, setValue }) => {
    function handleChange(event) {
        setValue(event.target.value);
    }
    return (
        <>
            <div className={`group-input mb-4`}>
                <label className={`block font-normal mb-1 ` + (value ? 'text-black' : 'text-black')}>{label}</label>
                <input {...{ disabled, placeholder, name }} onChange={handleChange} defaultValue={value} className={`py-2 px-3 rounded border text-black w-full outline-0 hover:border-gray-500 focus:border-gray-500 transition-all h-10 ` + (value ? 'border-gray-200' : 'border-gray-200')} />
            </div>
        </>
    );
};

export default FormInput;
