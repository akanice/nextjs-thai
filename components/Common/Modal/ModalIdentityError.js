import React, {useState} from 'react';
import {MdCheckCircleOutline} from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";

const ModalIdentityError = () => {

  // const [value, setValue] = useState(``);

  return (
    <>
        <div className={`flex flex-col justify-center`}>
            <div className={`flex justify-center text-red-500 mb-3`}><FiAlertTriangle size={32}/></div>
            <h3 className={`text-center font-bold text-red-500 text-2xl mb-3`}>Định danh khách hàng thất bại</h3>
            <p className={`text-center font-medium text-red-500 mb-6`}>Người đại diện theo pháp luật của Tổ chức nằm trong danh sách AML.</p>
            <p className={`text-black mb-3`}>Theo quy định phòng chống rửa tiền và chống tài trợ khủng bố của PVcomBank (AML), khách hàng trong danh sách AML sẽ không được mở tài khoản giao dịch tại ngân hàng.</p>
            <p className={`text-black mb-6`}>Trường hợp cần thêm thông tin hỗ trợ, vui lòng liên hệ hotline 1900 5555 92 để được hướng dẫn.</p>
            <button className={`py-2 px-9 bg-gray-300 text-black rounded w-52 self-center`}>Quay lại</button>
        </div>
    </>
  );
};
export default ModalIdentityError;