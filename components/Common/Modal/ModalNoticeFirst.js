import React, {useState} from 'react';
import {MdCheckCircleOutline} from "react-icons/md";
import {AiOutlineCheck} from "react-icons/ai";

const ModalNoticeFirst = ({name,checked,className}) => {

  // const [value, setValue] = useState(``);

  return (
    <>
        <div className={`flex flex-col justify-center items-center`}>
          <h3 className={`font-bold text-md uppercase text-black mb-3`}>Các điểm lưu ý khi mở tài khoản thanh toán online</h3>
          <div className={`py-6`}>
            <div className={`flex`}>
              <div className={`w-2/4 max-w-xs border-r border-gray-200 pr-4 mr-4`}>
                <div className={`flex items-start mb-3`}>
                  <span className={`text-link mr-2 mt-1`}><AiOutlineCheck size={14} /></span>
                  <span>Máy tính, laptop, hệ điều hành từ Windows 7 trở lên</span>
                </div>
                <div className={`flex items-start `}>
                  <span className={`text-link mr-2 mt-1`}><AiOutlineCheck size={14} /></span>
                  <span>Sử dụng trình duyệt Google Chrome (phiên bản 89.0 trở lên) hoặc Firefox (phiên bản 88.0 trở lên) cho thiết bị</span>
                </div>
              </div>
              <div className={`w-2/4 max-w-xs`}>
                <div className={`flex items-start mb-3`}>
                  <span className={`text-link mr-2 mt-1`}><AiOutlineCheck size={14} /></span>
                  <span>Dung lượng file 500KB đến 5MB</span>
                </div>
                <div className={`flex items-start `}>
                  <span className={`text-link mr-2 mt-1`}><AiOutlineCheck size={14} /></span>
                  <span>Ảnh chụp rõ nét, không bị mờ, loá sáng, mất góc</span>
                </div>
                <div className={`flex items-start `}>
                  <span className={`text-link mr-2 mt-1`}><AiOutlineCheck size={14} /></span>
                  <span>Định dạng file PDF</span>
                </div>
              </div>
            </div>
          </div>
            <div>
                <button className="bg-second-color hover:text-white text-black font-medium py-2 px-12 rounded focus:outline-none focus:shadow-outline" type="button">
                Tôi đã hiểu
                </button>
            </div>
      </div>
    </>
  );
};
export default ModalNoticeFirst;