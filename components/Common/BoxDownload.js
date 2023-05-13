import React, { useState } from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';
import {BsDownload} from 'react-icons/bs';

const BoxDownload = ({label,size,onClick,alert,className}) => {
  
  return (
    <>
      <div className={`flex items-center border border-gray-100 cursor-pointer hover:border-gray-300 rounded-md ${className}`} onClick={onClick}>
          <img src='/images/icon-pdf.png' />
          <div className='flex flex-col text-sm ml-2 tracking-tight grow'>
              <div className={`text-main-color font-semibold`}>{label}</div>
              {alert ? (
                <div className='text-red-500 flex items-center text-sm'>
                  <AiFillExclamationCircle size={16} />
                  <div>{alert}</div>  
                </div>
              ) : (
                <div className='text-gray-400'>{size}</div>
              )}
          </div>
          {!alert ? <BsDownload  onClick = {onClick}  size={18} /> : ``}
      </div>
    </>
  );
};

export default BoxDownload;