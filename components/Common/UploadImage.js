import React, { useState,useRef, useEffect } from 'react';
import Heading from './Heading';
import {FiUploadCloud} from 'react-icons/fi';

const UploadImage = ({label,className,setFileSelected}) => {

  const [file,setFile] = useState(null);
  const fileInput = useRef();
  const file1 = `file`;
  const [preview, setPreview] = useState(null);
  useEffect(() => {
    if (!file) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(file)
    setPreview(objectUrl)
    setFileSelected(file)
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [file])
  return (
    <>
      <div className={`flex flex-col items-center`}>
        {label && (
          <Heading title={label} className={`mb-3`} />
        )}
        <div className={`rounded-xl overflow-hidden border-2 border-dashed w-full ${className}`}>
          <div className={`flex self-center flex-col items-center justify-center h-full w-full relative`}>
            <input
                onClick={(event) => {
                    event.target.value = null;
                }}
                ref={fileInput}
                className="opacity-0 h-full w-full z-30"
                type="file"
                accept=""
                multiple={false}
                onChange={(e) => {
                    if (e.target?.files?.length > 0) {
                        setFile(e.target?.files[0]);
                    }
                }}
            />
            {file1 === null && ( // Change to "file" later
                <div className={`absolute h-full flex flex-col justify-center items-center p-3`}>
                    <div className='text-main-color flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[#E5F4FB] flex-shrink-0 mb-3'>
                      <div className='flex justify-center items-center bg-[#D2EDF9] w-[28px] h-[28px] flex-shrink-0 rounded-full'><FiUploadCloud size={16} className={`grow`} /></div>
                    </div>
                    <div className={`text-sm text-center`}>
                        <span className={`text-sky-500 font-semibold`}>Nhấn để tải lên</span> hoặc kéo thả ảnh vào ô này<br />PNG, JPG (max. 800x400px)
                    </div>
                </div>
            )}
            {file1 !== null && ( // Change to "file" later
              <div className={`absolute h-full flex flex-col justify-center items-center z-10`}>
                  {/* <img className="w-full h-full object-cover" alt={'avatar'} src={typeof file === `string` ? file : file} /> */}
                  <img className="w-full h-full object-cover" alt={'avatar'} src={preview || '/images/home-post-3.png'} />
              </div>
            )}
          </div>
        </div>
        {file1 !== null && (
          <div className='mt-3'>
            <div className='inline-block text-main-color font-semibold mr-1 cursor-pointer'>Tải lại</div>
            hoặc
            <div className='inline-block text-main-color font-semibold ml-1 cursor-pointer'>Xoá</div>
          </div>
        )}
      </div>
    </>
  );
};

export default UploadImage;
