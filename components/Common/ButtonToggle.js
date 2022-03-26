import React, {useState} from 'react';
import { FaCheck } from 'react-icons/fa';

const ButtonToggle = ({name,checked,className}) => {

  // const [value, setValue] = useState(``);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <label for="toogleA" className={`flex items-center cursor-pointer`}>
          <div className={`relative`}>
            <input id="toogleA" 
              type="checkbox"
              name={name}
              className={`sr-only`} 
              defaultChecked={checked}
              // onChange={(e) => setValue(e.target.checked)} 
            />
            <div className={`w-12 h-8 bg-toggle rounded-full shadow-inner`}></div>
            <div className={`flex items-center justify-center dot absolute w-8 h-8 bg-white border border-gray-100 rounded-full shadow -left-1 top-0 transition`}>
              {/* <FaCheck size={10} className={`inline-block`} /> */}
            </div>
          </div>
      </label>
    </div>
  );
};
export default ButtonToggle;