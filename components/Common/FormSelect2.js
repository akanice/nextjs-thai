import React, { useEffect, useState } from 'react';

const FormSelect2 = ({ options, name, label, defaultValue, className, setValue }) => {
    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <>
            <div className={`${className}`}>
                {/* {label && <label className={`block font-normal mb-2 ` + (defaultValue ? 'text-black' : 'text-red-500')}>{label}</label>} */}
                <select className={`py-2 px-3 rounded-md border border-gray-200 text-second-color border-b w-full outline-0 h-10`} name={name} onChange={handleChange}>
                    <option>{label}</option>
                    {options?.map((item, ind) => (
                        <option key={ind} value={item.value}  selected={(item.value===defaultValue) ? 'selected' : ''} > 
                            {item.title}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default FormSelect2;
