import React, { useEffect, useState } from 'react';

const FooterColumn = ({transaction,title}) => {
  // const data = transaction;

  return (
    <>
      <h4 className={`text-white mb-2 font-bold`}>{title}</h4>
      <ul>
        {transaction.map((item, ind) => (
          <li key={ind} className={`mb-2`}>
            <a href={item.value} className={`text-gray-300`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterColumn;
