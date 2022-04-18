import React, { useEffect, useState } from 'react';
import ProgressStepper from '@components/Elements/ProgressStepper';
import BriefStep1 from './BriefStep1'; 

const CompleteBrief = (page) => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalWarning, setOpenModalWarning] = useState(false);
    const openModalGuide = () => setOpenModal(true);
    const closeModalGuide = () => setOpenModal(false);
    const openModalWarningAction = () => setOpenModalWarning(true);
    const closeModalWarningAction = () => setOpenModalWarning(false);
    const [tab, setTab] = useState(`step1`);
    return (
        <>
            <ProgressStepper page={2}/>
            <div className={`border-b border-gray-100 my-3`}></div>

            <h1 className={`font-bold text-center text-xl text-black mb-2`}>Hoàn thiện hồ sơ tổ chức theo danh mục bên dưới</h1>
            <p className={`text-black text-center mb-6`}>Toàn bộ hồ sơ cần phải được xác nhận bằng chữ ký số khách hàng tổ chức trước khi tải lên</p>

            {/* Main Content */}
            <div className="accordion" id="accordionExample">
                <div className="accordion-item border-l border-gray-200">
                    <h2 className="accordion-header mb-0 relative" id="headingOne">
                        <button className="relative flex flex-col  w-full px-5 mb-3 text-base text-black transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded={tab == 'step1' ? 'true' : 'false'} aria-controls="collapseOne">
                            <span className={`font-medium `+(tab == 'step1' ? 'text-black' : 'text-gray-400')}>Giấy chứng nhận đăng kí kinh doanh/đăng kí doanh nghiệp</span>
                            <p className={tab == 'step1' ? 'text-black' : 'text-gray-300'}>Giấy chứng nhận đăng ký kinh doanh/đăng ký doanh nghiệp còn hiệu lực</p>
                        </button>
                        <div className="w-6 h-6 mx-auto bg-sky-500 rounded-full text-lg border border-sky-300 flex items-center absolute timeline-label">
                            <span className="text-center text-white text-sm w-full">
                                1
                            </span>
                        </div>
                    </h2>
                    <div id="collapseOne" className={`accordion-collapse collapse px-5 pb-9 ` + (tab == `step1` ? 'show' : '')} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <BriefStep1 />
                    </div>
                </div>
                {/* Tab 1 */}

                <div className="accordion-item border-l border-gray-200">
                    <h2 className="accordion-header mb-0 relative" id="heading2">
                        <button className="relative flex flex-col  w-full px-5 mb-3 text-base transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded={tab == 'step2' ? 'true' : 'false'} aria-controls="collapse2">
                            <span className={`font-medium `+(tab == 'step2' ? 'text-black' : 'text-gray-400')}>Giấy chứng nhận đăng kí kinh doanh/đăng kí doanh nghiệp</span>
                            <p className={tab == 'step2' ? 'text-black' : 'text-gray-300'}>Giấy chứng nhận đăng ký kinh doanh/đăng ký doanh nghiệp còn hiệu lực</p>
                        </button>
                        <div className="w-6 h-6 mx-auto bg-sky-500 rounded-full text-lg border border-sky-300 flex items-center absolute timeline-label">
                            <span className="text-center text-white text-sm w-full">
                                2
                            </span>
                        </div>
                    </h2>
                    <div id="collapse2" className={`accordion-collapse collapse px-5 pb-9 ` + (tab == `step2` ? 'show' : '')} aria-labelledby="heading2" data-bs-parent="#accordionExample">
                        <BriefStep1 />
                    </div>
                </div>
                {/* Tab 2 */}

                <div className="accordion-item border-l border-gray-200">
                    <h2 className="accordion-header mb-0 relative" id="heading2">
                        <button className="relative flex flex-col  w-full px-5 mb-3 text-base transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded={tab == 'step3' ? 'true' : 'false'} aria-controls="collapse3">
                            <span className={`font-medium `+(tab == 'step3' ? 'text-black' : 'text-gray-400')}>Giấy chứng nhận đăng kí kinh doanh/đăng kí doanh nghiệp</span>
                            <p className={tab == 'step3' ? 'text-black' : 'text-gray-300'}>Giấy chứng nhận đăng ký kinh doanh/đăng ký doanh nghiệp còn hiệu lực</p>
                        </button>
                        <div className="w-6 h-6 mx-auto bg-sky-500 rounded-full text-lg border border-sky-300 flex items-center absolute timeline-label">
                            <span className="text-center text-white text-sm w-full">
                                3
                            </span>
                        </div>
                    </h2>
                    <div id="collapse3" className={`accordion-collapse collapse px-5 pb-9 ` + (tab == `step3` ? 'show' : '')} aria-labelledby="heading3" data-bs-parent="#accordionExample">
                        <BriefStep1 />
                    </div>
                </div>
                {/* Tab 3 */}

            </div>
        </>
    );
};

export default CompleteBrief;
