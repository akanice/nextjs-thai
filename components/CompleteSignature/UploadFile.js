import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { Button } from '@mui/material';

const UploadFile = forwardRef((props, ref) => {
  const { text, file, setFile, defaultPicture, className } = props;
  const fileInput = useRef();

  useEffect(() => {
    if (defaultPicture) setFile(defaultPicture);
  }, [defaultPicture]);

  useImperativeHandle(ref, () => ({
    selectedImage: () => {
      return file;
    }
  }));

  const file1=null; // Delete this and replace file1 with file

  return (
    <Button transparent onClick={() => fileInput.current.click()} className={`${className}`}>
      <div className={`flex flex-col items-center w-40 h-48 rounded-xl border-main border-2 border-dotted`}>
        <div
          className={`flex self-center flex-col items-center bg-gray-50 justify-center h-full w-full relative`}>
          <input
            onClick={(event) => {
              event.target.value = null;
            }}
            ref={fileInput}
            className="hidden"
            type="file"
            accept="image/*"
            multiple={true}
            onChange={(e) => {
              if (e.target?.files?.length > 0) {
                setFile(e.target?.files[0]);
              }
            }}
          />
          {file1 === null && ( // Change to "file" later
            <div className={`absolute h-full flex flex-col justify-center items-center`}>
              <AiOutlineCloudUpload size={24} />
              <div className={`text-sm`}>Kéo/thả nhiều tài liệu vào đây hoặc<br /> <span className={`text-sky-500 underline`}>chọn từ máy tính</span></div>
              <div className={`absolute bottom-0   text-sm text-gray-300`}><small>Hỗ trợ jpg, jpeg, tif, pdf</small></div>
            </div>
          )}
          {file1 !== null && ( // Change to "file" later
            <img
              className="w-full h-full object-cover rounded-full"
              alt={"avatar"}
              src={typeof file === `string` ? file : file}
            />
          )}
        </div>

      </div>
    </Button>
  );
});
UploadFile.displayName = `UpdatePictureCircle`;
export default UploadFile;
