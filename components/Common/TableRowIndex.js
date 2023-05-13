import React, { useState } from 'react';
import SingleRowIndex from './SingleRowIndex';

const TableRowIndex = ({options,className,}) => {
  
  return (
    <>
      <div className={className}>
        {options?.map((item, ind) => (
            <SingleRowIndex 
              label={item.label}
              value={item.value}
              key={ind}
              className={`mb-5`}
            />
        ))}
      </div>
    </>
  );
};

export default TableRowIndex;