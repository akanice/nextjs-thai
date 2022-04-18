import React, {useState} from 'react';
import {MdCheckCircleOutline} from "react-icons/md";
import {FaExclamationCircle} from "react-icons/fa";

const ModalCodeExist = ({name,checked,className}) => {

  // const [value, setValue] = useState(``);

  return (
    <>
        <div className={`flex flex-col justify-center items-center`}>
          <h3 className={`font-bold text-black text-2xl mb-3`}>Mã số doanh nghiệp đã tồn tại</h3>
          <p className={`mb-3`}>Mã số doanh nghiệp đã được cấp tài khoản Online, Quý khách có muốn tạo tài khoản mới không?</p>
          <div className={`w-96 py-6 border-t border-dashed border-sky-100`}>
            <ul className={`list-disc`}>
                <li className={`mb-2 flex items-center list-item list-inside`}>
                    Mã số doanh nghiệp: <span className={`ml-2 text-sky-500`}>0313449404583</span>
                </li>
                <li className={`mb-2 flex items-center list-item list-inside`}>
                    Tên tổ chức:<span className={`ml-2 text-sky-500`}>Công ty cổ phần ABC</span>
                </li>
                <li className={`mb-2 flex items-center list-item list-inside`}>
                    Định danh tại:<span className={`ml-2 text-sky-500`}>Online</span>
                </li>
            </ul>
          </div>
            <div>
                <button className="bg-second-color hover:text-yellow-500 text-black font-medium py-2 px-12 rounded focus:outline-none focus:shadow-outline" type="button">
                Tạo tài khoản mới
                </button>
            </div>
      </div>
    </>
  );
};
export default ModalCodeExist;