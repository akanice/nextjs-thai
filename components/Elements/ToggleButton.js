import React from 'react';
import { Button } from '@mui/material';

const ToggleButton = ({ tab, setTab }) => {
  const classes = `font-bold rounded mx-1 grow text-center btn py-3 px-9 cursor-pointer`;
  return (
    <div className={`flex justify-between mb-6`}>
      <a
        onClick={() => setTab(`info`)}
        transparent
        className={`border border-gray-200 ${tab === `info` ? `bg-gray-300 text-sky-700` : `bg-gray-100 text-sky-700 hover:bg-gray-300`} ${classes}`}>
        THÔNG TIN EKYC
      </a>
      <a
        onClick={() => setTab(`create`)}
        transparent
        className={`border border-gray-200 ${tab === `create` ? `bg-gray-300 text-sky-700` : `bg-gray-100 text-sky-700 hover:bg-gray-300`} ${classes}`}>
        THÔNG TIN MỞ TK
      </a>
    </div>
  );
};

export default ToggleButton;
