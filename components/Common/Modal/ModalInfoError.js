import React, {useState} from 'react';
import { FiAlertTriangle } from "react-icons/fi";

const ModalInfoError = ({name,checked,className}) => {

  // const [value, setValue] = useState(``);

  return (
    <>
        <div className={`flex flex-col justify-center`}>
          <div className={`flex justify-center text-red-500 mb-3`}><FiAlertTriangle size={32}/></div>
          <h3 className={`text-center font-bold text-red-500 text-2xl mb-3`}>Thông tin trên hồ sơ không khớp với thông tin hiện có của Quý khách trên hệ thống PVcomBank</h3>
          <p className={`text-center font-medium text-red-500 mb-6`}>Số giấy tờ tùy thân của Người đại diện theo pháp luật không trùng khớp với hệ thống PVcomBank.</p>
          <p className={`text-black`}>Quý khách vui lòng bấm “Quay lại” để tải lại hồ sơ cho khớp đúng.<br />Trường hợp Tổ chức có thay đổi thông tin liên quan đến tài khoản thanh toán của tổ chức đang mở tại PVcomBank, vui lòng bấm  “Kết thúc” và liên hệ Chi nhánh/Phòng giao dịch PVcomBank - nơi mở tài khoản thanh toán để yêu cầu cập nhật lại thông tin.</p>
          <p className={`text-black mb-6`}>Trường hợp cần thêm thông tin hỗ trợ, vui lòng liên hệ hotline 1900 5555 92 để được hướng dẫn.</p>
          <button className={`py-2 px-9 bg-gray-300 text-black rounded w-52 self-center`}>Quay lại</button>
        </div>
    </>
  );
};
export default ModalInfoError;