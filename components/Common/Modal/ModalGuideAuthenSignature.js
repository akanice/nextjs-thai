import React, {useState} from 'react';
import {MdCheckCircleOutline} from "react-icons/md";
import {FaExclamationCircle} from "react-icons/fa";

const ModalGuideAuthenSignature = ({name,checked,className}) => {

  // const [value, setValue] = useState(``);

  return (
    <>
        <div className={`flex flex-col justify-center`}>
          <h3 className={`text-center font-bold text-black text-2xl mb-3`}>Hướng dẫn xác nhận bằng chữ ký số</h3>
          <p className={`text-sm text-gray-600 text-center mb-3`}>Mã số doanh nghiệp đã được cấp tài khoản tại chi nhánh PVCombank Hàng Bông, Quý khách có muốn tạo tài khoản Online không?</p>
          <ul className={`text-left`}>
              <li className={`mb-2 flex items-center`}>
                  <MdCheckCircleOutline size="16" className={`text-link mr-3`} />
                  Giấy chứng nhận đăng ký doanh nghiệp.
              </li>
              <li className={`mb-2 flex items-center`}>
                  <MdCheckCircleOutline size="16" className={`text-link mr-3`} />
                  Giấy đăng ký mã số thuế (chỉ áp dụng với doanh nghiệp thành lập trước ngày 01/07/2015).
              </li>
              <li className={`mb-2 flex items-center`}>
                  <MdCheckCircleOutline size="16" className={`text-link mr-3`} />
                  Giấy tờ tùy thân của người đại diện theo pháp luật.
              </li>
              <li className={`mb-2 flex items-center`}>
                  <MdCheckCircleOutline size="16" className={`text-link mr-3`} />
                  Quyết định bổ nhiệm kế toán trưởng/người phụ trách kế toán.
              </li>
              <li className={`mb-2 flex items-center`}>
                  <MdCheckCircleOutline size="16" className={`text-link mr-3`} />
                  Giấy tờ tùy thân của Kế toán trưởng/người phụ trách kế toán.
              </li>
          </ul>
          <p className={`text-xl text-gray-600 font-bold mb-3 mt-3`}>Hướng dẫn chụp/tải hồ sơ:</p>
          <ul className={`text-left`}>
              <li className={`mb-2 flex items-center`}>
                  <MdCheckCircleOutline size="16" className={`text-link mr-3`} />
                  Hồ sơ phải dùng bản gốc, không scan và photocopy.
              </li>
              <li className={`mb-2 flex items-center`}>
                  <MdCheckCircleOutline size="16" className={`text-link mr-3`} />
                  Ảnh chụp rõ ràng thông tin, đủ góc cạnh, không bị lóa mờ.
              </li>
          </ul>
          <p className={`text-xl text-red-500 flex items-center font-bold mb-3 mt-3`}>
              <FaExclamationCircle size="16" className={`mr-2`} /> Lưu ý
          </p>
          <p className={`text-sm text-red-500`}>Mọi thông tin làm giả giấy tờ đều là vi phạm pháp luật, khách hàng chịu hoàn toàn trách nhiệm trước pháp luật về các thông tin đã cung cấp.</p>
          <p className={`text-sm text-red-500`}>Lưu ý: Toàn bộ hồ sơ cần phải được xác nhận bằng chữ ký số khách hàng tổ chức trước khi tải lên.</p>
      </div>
    </>
  );
};
export default ModalGuideAuthenSignature;