import React, { useEffect, useState } from 'react';
import { Button, Modal, Box } from '@material-ui/core';
import ProgressStepper from '@components/Elements/ProgressStepper';
import BriefStep1 from './BriefStep1';
import BriefStep2 from './BriefStep2';
import BriefStep3 from './BriefStep3';
import BriefStep4 from './BriefStep4';
import BriefStep5new from './BriefStep5new';
import {AiFillFileText} from 'react-icons/ai';
import ModalNoticeFirst from '@components/Common/Modal/ModalNoticeFirst';

const CompleteBrief = (page) => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalWarning, setOpenModalWarning] = useState(false);
    const openModalGuide = () => setOpenModal(true);
    const closeModalGuide = () => setOpenModal(false);
    const openModalWarningAction = () => setOpenModalWarning(true);
    const closeModalWarningAction = () => setOpenModalWarning(false);

    const [openModal2, setOpenModal2] = useState(true);
    const openModalGuide2 = () => setOpenModal2(true);
    const closeModalGuide2 = () => setOpenModal2(false);
    const [tab, setTab] = useState(`step1`);
    return (
        <>
            <ProgressStepper page={2} />

            {/* Display only one at page load */}
            <Modal open={openModal2} onClose={closeModalGuide2} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box className={`px-9 py-9 custom-modal`}>
                    <ModalNoticeFirst />
                </Box>
            </Modal>

            <div className={`border-b border-dashed border-gray-300 mb-9`}></div>

            <h1 className={`font-bold text-center text-xl text-black mb-2`}>Hoàn thiện hồ sơ tổ chức theo danh mục bên dưới</h1>
            <p className={`text-black text-center mb-6`}>Toàn bộ hồ sơ cần phải được xác nhận bằng chữ ký số của tổ chức trước khi tải lên</p>

            {/* Main Content */}
            <div className="accordion" id="accordionExample">
                <div className="accordion-item border-l border-gray-200">
                    <h2 className="accordion-header mb-0 relative" id="headingOne">
                        <button className="relative flex w-full px-5 pb-3 text-base text-black transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded={tab == 'step1' ? 'true' : 'false'} aria-controls="collapseOne">
                            <div className={`flex justify-between w-full`}>
                                <div>
                                    <span className={`font-bold text-md ` + (tab == 'step1' ? 'text-black' : 'text-gray-400')}>Giấy chứng nhận đăng kí doanh nghiệp & Mẫu dấu của tổ chức</span>
                                    <p className={tab == 'step1' ? 'text-gray-400' : 'text-gray-300'}>Giấy chứng nhận đăng ký kinh doanh/đăng ký doanh nghiệp còn hiệu lực</p>
                                </div>
                                <div>
                                    <div className={`flex items-center py-2 px-3 text-sm border border-dashed rounded border-gray-300`}><AiFillFileText size={13} /> <span className={`ml-2`}>Giấy tờ mẫu</span></div>
                                </div>
                            </div>

                        </button>
                        <div className="w-6 h-6 mx-auto bg-white rounded-full text-lg border border-gray-300 flex items-center absolute timeline-label">
                            <span className="text-center text-gray-400 text-sm w-full">1</span>
                        </div>
                    </h2>
                    <div id="collapseOne" className={`accordion-collapse collapse px-5 pb-9 ` + (tab == `step1` ? 'show' : '')} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <BriefStep1 setTab={setTab} />
                    </div>
                </div>
                {/* Tab 1 */}

                <div className="accordion-item border-l border-gray-200">
                    <h2 className="accordion-header mb-0 relative" id="heading2">
                        <button className="relative flex flex-col  w-full px-5 pb-3 text-base transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded={tab == 'step2' ? 'true' : 'false'} aria-controls="collapse2">
                            <span className={`font-bold text-md ` + (tab == 'step2' ? 'text-black' : 'text-gray-400')}>Giấy đăng kí mã số thuế (tuỳ chọn)</span>
                            <p className={tab == 'step2' ? 'text-gray-400' : 'text-gray-300'}>Chỉ áp dụng với doanh nghiệp thành lập trước ngày 01/07/2015</p>
                        </button>
                        <div className="w-6 h-6 mx-auto bg-white rounded-full text-lg border border-gray-300 flex items-center absolute timeline-label">
                            <span className="text-center text-gray-400 text-sm w-full">2</span>
                        </div>
                    </h2>
                    <div id="collapse2" className={`accordion-collapse collapse px-5 pb-9 ` + (tab == `step2` ? 'show' : '')} aria-labelledby="heading2" data-bs-parent="#accordionExample">
                        <BriefStep2 setTab={setTab} />
                    </div>
                </div>
                {/* Tab 2 */}

                <div className="accordion-item border-l border-gray-200">
                    <h2 className="accordion-header mb-0 relative" id="heading3">
                        <button className="relative flex flex-col  w-full px-5 pb-3 text-base transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded={tab == 'step3' ? 'true' : 'false'} aria-controls="collapse3">
                            <span className={`font-bold text-md ` + (tab == 'step3' ? 'text-black' : 'text-gray-400')}>Giấy tờ tuỳ thân & Mẫu chữ ký của Người đại diện theo pháp luật</span>
                            <p className={tab == 'step3' ? 'text-gray-400' : 'text-gray-300'}>CMND/CCCD/Hộ chiếu & chữ ký mẫu còn hạn sử dụng</p>
                        </button>
                        <div className="w-6 h-6 mx-auto bg-white rounded-full text-lg border border-gray-300 flex items-center absolute timeline-label">
                            <span className="text-center text-gray-400 text-sm w-full">3</span>
                        </div>
                    </h2>
                    <div id="collapse3" className={`accordion-collapse collapse px-5 pb-9 ` + (tab == `step3` ? 'show' : '')} aria-labelledby="heading3" data-bs-parent="#accordionExample">
                        <BriefStep3 setTab={setTab} />
                    </div>
                </div>
                {/* Tab 3 */}
                <div className="accordion-item border-l border-gray-200">
                    <h2 className="accordion-header mb-0 relative" id="heading4">
                        <button className="relative flex flex-col  w-full px-5 pb-3 text-base transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded={tab == 'step4' ? 'true' : 'false'} aria-controls="collapse4">
                            <span className={`font-bold text-md ` + (tab == 'step4' ? 'text-black' : 'text-gray-400')}>Giấy tờ tuỳ thân, Giấy bổ nhiệm & Mẫu chữ ký của Kế toán trưởng/Người phụ trách kế toán</span>
                            <p className={tab == 'step4' ? 'text-gray-400' : 'text-gray-300'}>CMND/CCCD/Hộ chiếu & Giấy tờ bổ nhiệm còn hạn sử dụng</p>
                        </button>
                        <div className="w-6 h-6 mx-auto bg-white rounded-full text-lg border border-gray-300 flex items-center absolute timeline-label">
                            <span className="text-center text-gray-400 text-sm w-full">4</span>
                        </div>
                    </h2>
                    <div id="collapse4" className={`accordion-collapse collapse px-5 pb-9 ` + (tab == `step4` ? 'show' : '')} aria-labelledby="heading4" data-bs-parent="#accordionExample">
                        <BriefStep4 setTab={setTab} />
                    </div>
                </div>
                {/* Tab 4 */}
                <div className="accordion-item ">
                    <h2 className="accordion-header mb-0 relative" id="heading5">
                        <button className="relative flex flex-col  w-full px-5 pb-3 text-base transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded={tab == 'step5' ? 'true' : 'false'} aria-controls="collapse5">
                            <span className={`font-bold text-md ` + (tab == 'step5' ? 'text-black' : 'text-gray-400')}>Cung cấp thông tin và Đăng ký dịch vụ khác</span>
                            <p className={tab == 'step5' ? 'text-gray-400' : 'text-gray-300'}>Thông tin Fatca, chủ sở hữu hưởng lợi, SMS Banking...</p>
                        </button>
                        <div className="w-6 h-6 mx-auto bg-white rounded-full text-lg border border-gray-300 flex items-center absolute timeline-label">
                            <span className="text-center text-gray-400 text-sm w-full">5</span>
                        </div>
                    </h2>
                    <div id="collapse5" className={`accordion-collapse collapse px-5 pb-9 ` + (tab == `step5` ? 'show' : '')} aria-labelledby="heading5" data-bs-parent="#accordionExample">
                        <BriefStep5new setTab={setTab} />
                    </div>
                </div>
                {/* Tab 5 */}
            </div>
        </>
    );
};

export default CompleteBrief;
