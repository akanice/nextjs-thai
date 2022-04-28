import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
const ButtonToggle2 = ({ name, id, checked, label, positionButton, className }) => {
    // const [value, setValue] = useState(``);

    return (
        <div className={`flex items-center ${className}`}>
            <label htmlFor={id} className={`flex items-center cursor-pointer ` + (positionButton=='left' ? `order-1 mr-3`: `order-2 ml-3`)}>
                <div className={`relative`}>
                    <input
                        id={id}
                        type="checkbox"
                        name={name}
                        className={`sr-only style-2`}
                        defaultChecked={checked}
                        // onChange={(e) => setValue(e.target.checked)}
                    />
                    <div className={`w-10 h-6 bg-toggle rounded-full shadow-inner`}></div>
                    <div className={`flex items-center justify-center dot absolute w-6 h-6 bg-blue-600 border border-blue-600 rounded-full shadow top-0 transition`}>{/* <FaCheck size={10} className={`inline-block`} /> */}</div>
                </div>
            </label>
            <div className={(positionButton=='left' ? `order-2`: `order-1`)}>{label}</div>
        </div>
    );
};
export default ButtonToggle2;
