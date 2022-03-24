import { data } from 'autoprefixer';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {FiTrash} from 'react-icons/fi';

const RegisterForm2 = ({label,mess,name}) => {
  const data = {
    sample_img: "/images/sample_img.png",
    name: "Đăng ký.png",
  }

  return (
    <>
      <div className={`flex justify-start`}>
        <div className={`w-9 h-9 leading-9 rounded bg-yellow-400 font-bold text-2xl text-center mr-24`}>1</div>
        <p>
            <span className={`text-red-400`}>*</span>
        </p>
        <p className={`text-right mr-3`}>
            <span className={``}>Đăng ký kinh doanh/<br />Giấy chứng nhận đăng ký doanh nghiệp: </span>
        </p>
        {/* Upload button */}
        <div className={`flex-1`}>
            <UploadButton name={`upload_1`} label={`Chọn tải hồ sơ`} mess={`Vui lòng tải hồ sơ đã  xác nhận bằng Chữ ký số KHTC`} />
        </div>
    </div>
    </>
  );
};

export default RegisterForm2;
