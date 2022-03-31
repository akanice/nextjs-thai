import React, { useEffect, useState } from 'react';

const FormRadio = ({ options, name, label, defaultValue, className }) => {
    return (
        <>
            <div className={`${className}`}>
                {label && <label className={`block font-medium mb-1 ` + (defaultValue ? 'text-gray-400' : 'text-red-500')}>{label}</label>}
                <div className="flex justify-center">
                    {options?.map((item, ind) => (
                        <div className="form-check form-check-inline" key={ind}>
                            <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name={name} id={name + ind} defaultValue={item.value} />
                            <label className="form-check-label inline-block text-gray-800" htmlFor={name + ind}>
                                {item.title}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FormRadio;
