import React, { useState } from 'react';
import Heading from './Heading';

const SingleRowIndex = ({label,value,className}) => {
  
  return (
    <>
      <div className={`flex justify-between items-center ${className}`}>
          <div className='text-gray-500'>{label}</div>
          <div className='border-t-2 border-dotted border-gray-300 grow mt-2 mx-2'></div>
          <Heading title={value} />
      </div>
    </>
  );
};

export default SingleRowIndex;