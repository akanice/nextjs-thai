import React, { useEffect, useState } from 'react';
import { Button, Modal, Box } from '@material-ui/core';
import { ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails} from '@material-ui/core';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {MdCheckCircleOutline} from "react-icons/md";
import {FaExclamationCircle} from 'react-icons/fa';
import ProgressStepper from '../Elements/ProgressStepper';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid #ccc',
  boxShadow: 24,
};

const RegisterStep2 = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openModal, setOpenModal] = useState(false);
  const openModalGuide = () => setOpenModal(true);
  const closeModalGuide = () => setOpenModal(false);

  return (
    <div className={`p-6`}>
      <div className={``}>
        <div className="container mx-auto py-6">
          <ProgressStepper />

          <div className={`relative border border-gray-600 rounded p-6 mx-36`}>
            <div className={`absolute top-3 right-3`}>
              <a href='#' className={`text-link underline`} onClick={openModalGuide}>Hướng dẫn</a>
              <Modal
                open={openModal}
                onClose={closeModalGuide}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} className={`px-36 py-9`}>
                  <div className={`flex flex-col justify-center`}>
                    <h3 className={`text-center font-bold text-black text-2xl mb-3`}>HƯỚNG DẪN CHỤP/TẢI HỒ SƠ TỔ CHỨC</h3>
                    <p className={`text-xl text-gray-600 font-bold mb-3`}>Danh mục hồ sơ cần chuẩn bị:</p>
                    <ul className={`text-left`}>
                      <li className={`mb-2 flex items-center`}><MdCheckCircleOutline size="16" className={`text-link mr-3`} />Giấy chứng nhận đăng ký  doanh nghiệp.</li>
                      <li className={`mb-2 flex items-center`}><MdCheckCircleOutline size="16" className={`text-link mr-3`} />Giấy đăng ký mã số thuế (chỉ áp dụng với doanh nghiệp thành lập trước ngày 01/07/2015).</li>
                      <li className={`mb-2 flex items-center`}><MdCheckCircleOutline size="16" className={`text-link mr-3`} />Giấy tờ tùy thân của người đại diện theo pháp luật.</li>
                      <li className={`mb-2 flex items-center`}><MdCheckCircleOutline size="16" className={`text-link mr-3`} />Quyết định bổ nhiệm kế toán trưởng/người phụ trách kế toán.</li>
                      <li className={`mb-2 flex items-center`}><MdCheckCircleOutline size="16" className={`text-link mr-3`} />Giấy tờ tùy thân của Kế toán trưởng/người phụ trách kế toán.</li>
                    </ul>
                    <p className={`text-xl text-gray-600 font-bold mb-3 mt-3`}>Hướng dẫn chụp/tải hồ sơ:</p>
                    <ul className={`text-left`}>
                      <li className={`mb-2 flex items-center`}><MdCheckCircleOutline size="16" className={`text-link mr-3`} />Hồ sơ phải dùng bản gốc, không scan và photocopy.</li>
                      <li className={`mb-2 flex items-center`}><MdCheckCircleOutline size="16" className={`text-link mr-3`} />Ảnh chụp rõ ràng thông tin, đủ góc cạnh, không bị lóa mờ.</li>
                    </ul>
                    <p className={`text-xl text-red-500 flex items-center font-bold mb-3 mt-3`}><FaExclamationCircle size="16" className={`mr-2`} /> Lưu ý</p>
                    <p className={`text-sm text-red-500`}>Mọi thông tin làm giả giấy tờ đều là vi phạm pháp luật, khách hàng chịu hoàn toàn trách nhiệm trước pháp luật về các thông tin đã cung cấp.</p>
                    <p className={`text-sm text-red-500`}>Lưu ý: Toàn bộ hồ sơ cần phải được xác nhận bằng chữ ký số khách hàng tổ chức trước khi tải lên.</p>
                  </div>
                </Box>
              </Modal>  
            </div>
            <div className={`text-left`}>
              <h2 className={`text-xl mb-2`}>Quý khách vui lòng tải/chụp đầy đủ hồ sơ tổ chức theo danh mục bên dưới</h2>
              <p className={`text-sm text-red-500`}>Lưu ý: Toàn bộ hồ sơ cần phải được xác nhận bằng chữ ký số khách hàng tổ chức trước khi tải lên.</p>
              
              <div className="accordion" id="accordionExample5">
                <div className="accordion-item bg-white border border-gray-200">
                  <h2 className="accordion-header mb-0" id="headingOne5">
                    <button className="
                accordion-button
                relative
                flex
                items-center
                w-full
                py-4
                px-5
                text-base text-gray-800 text-left
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none
              " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true" aria-controls="collapseOne5">
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="collapseOne5" className="accordion-collapse collapse show" aria-labelledby="headingOne5">
                    <div className="accordion-body py-4 px-5">
                      <strong>This is the first item's accordion body.</strong> It is shown by default,
                      until the collapse plugin adds the appropriate classes that we use to style each
                      element. These classes control the overall appearance, as well as the showing and
                      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                      our default variables. It's also worth noting that just about any HTML can go within
                      the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-white border border-gray-200">
                  <h2 className="accordion-header mb-0" id="headingTwo5">
                    <button className="
                accordion-button
                collapsed
                relative
                flex
                items-center
                w-full
                py-4
                px-5
                text-base text-gray-800 text-left
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none
              " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo5" aria-expanded="false" aria-controls="collapseTwo5">
                      Accordion Item #2
                    </button>
                  </h2>
                  <div id="collapseTwo5" className="accordion-collapse collapse" aria-labelledby="headingTwo5">
                    <div className="accordion-body py-4 px-5">
                      <strong>This is the second item's accordion body.</strong> It is hidden by default,
                      until the collapse plugin adds the appropriate classes that we use to style each
                      element. These classes control the overall appearance, as well as the showing and
                      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                      our default variables. It's also worth noting that just about any HTML can go within
                      the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item bg-white border border-gray-200">
                  <h2 className="accordion-header mb-0" id="headingThree5">
                    <button className="
                accordion-button
                collapsed
                relative
                flex
                items-center
                w-full
                py-4
                px-5
                text-base text-gray-800 text-left
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none
              " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree5" aria-expanded="false" aria-controls="collapseThree5">
                      Accordion Item #3
                    </button>
                  </h2>
                  <div id="collapseThree5" className="accordion-collapse collapse" aria-labelledby="headingThree5">
                    <div className="accordion-body py-4 px-5">
                      <strong>This is the third item's accordion body.</strong> It is hidden by default,
                      until the collapse plugin adds the appropriate classes that we use to style each
                      element. These classes control the overall appearance, as well as the showing and
                      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                      our default variables. It's also worth noting that just about any HTML can go within
                      the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default RegisterStep2;
