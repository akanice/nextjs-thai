import React, {useState} from 'react';
import {MdCheckCircleOutline} from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";

const ModalSignError = ({name,checked,className}) => {

  // const [value, setValue] = useState(``);

  return (
    <>
        <div className={`flex flex-col justify-center`}>
            <div className={`flex justify-center text-red-500 mb-3`}><FiAlertTriangle size={32}/></div>
            <h3 className={`text-center font-bold text-red-500 text-2xl mb-9`}>Chữ ký số khách hàng tổ chức không hợp lệ</h3>
            <p className={`text-black`}>Quý khách vui lòng bấm “Quay lại” để tải lại hồ sơ. Quý khách được tải lại hồ sơ tối đa 3 lần.</p>
            <p className={`text-black mb-3`}>Quá 3 lần không đạt yêu cầu, PVcomBank sẽ kết thúc yêu cầu đăng ký mở tài khoản.</p>
            <p className={`text-black mb-6`}>Trường hợp cần thêm thông tin hỗ trợ, vui lòng liên hệ hotline 1900 5555 92 để được hướng dẫn.</p>
            <button className={`py-2 px-9 bg-gray-300 text-black rounded w-52 self-center`}>Quay lại</button>
        </div>
    </>
  );
};
export default ModalSignError;