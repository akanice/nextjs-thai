import React, { useEffect, useState } from 'react';
import {FiCalendar} from 'react-icons/fi';
import InputDatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import VI from 'date-fns/locale/vi';
registerLocale('vi', VI)

const FormDatePicker = ({selectDate,setSelectDate,label,value,className}) => {

  return (
    <>
      <div className={`group-input w-full tracking-tighter ${className}`}>
        {label && (<label className={`block text-normal font-semibold mb-2 ` + (value ? 'text-third' : 'text-third')}>{label}</label>)}
        <div className={`relative`} >
          <InputDatePicker 
            locale="vi" 
            selected={selectDate} 
            dateFormat="dd/MM/yyyy"
            onChange={(date) => setSelectDate(date)} 
            className={`py-2 px-3 border border-gray-400 rounded-md text-second-color w-full outline-0 hover:border-gray-500 focus:border-gray-500 transition-all`}/>
          <div className='absolute right-[10px] top-[10px] text-gray-500'><FiCalendar size={16} /></div>
        </div>
      </div>
    </>
  );
};

export default FormDatePicker;
