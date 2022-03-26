import { data } from 'autoprefixer';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {FiTrash} from 'react-icons/fi';

const UploadButton = ({label,mess,name}) => {
  const data = {
    sample_img: "/images/sample_img.png",
    name: "Đăng ký.png",
  }

  return (
    <>
      <div className={`overflow-hidden relative`}>
        <button className={`bg-white hover:bg-blue-light border border-gray-300 py-2 px-4 inline-flex w-48 items-center`}>
            <MdKeyboardArrowRight size={18}/>
            <span className={`ml-2`}>{label}</span>
        </button>
        <input
            className={`cursor-pointer absolute block py-2 px-4 opacity-0 top-0 left-0 bottom-0 w-48`}
            type="file"
            name={name}
            accept="image/*"
        />
        <p className={`text-gray-500`}>{mess}</p>
      </div>
      
      {/* If have uploaded */}
      <ul className={`list-uploaded w-96`}>
        <li className={`border border-gray-200 p-2 flex items-center`}>
          <img src={data.sample_img} width={48} height={48} className={`mr-2`} />
          <p className={`flex-1`}>{data.name}</p>
          <div className={`cursor-pointer`} onClick={()=>{}} ><FiTrash size={16} /></div>
        </li>
      </ul>

    </>
  );
};

export default UploadButton;
