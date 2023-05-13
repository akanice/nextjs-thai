import React, { useState } from 'react';

const Heading = ({title,className}) => {
  
  return (
    <>
      <div className={`font-semibold blog-heading ${className}`}>{title}</div>
    </>
  );
};

export default Heading;
