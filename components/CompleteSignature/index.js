import React, { useEffect, useState } from 'react';
import ProgressStepper from '@components/Elements/ProgressStepper';
import SignatureStep1 from './SignatureStep1'; 
import SignatureStep2 from './SignatureStep2'; 

const CompleteSignature = (page) => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalWarning, setOpenModalWarning] = useState(false);
    const openModalGuide = () => setOpenModal(true);
    const closeModalGuide = () => setOpenModal(false);
    const [tab, setTab] = useState(`step1`);
    return (
        <>
            <ProgressStepper page={3}/>
            <div className={`border-b border-dashed border-gray-300 mb-9`}></div>

            <h1 className={`font-bold text-center text-xl text-black mb-2`}>Xác thực chữ ký số</h1>
            <p className={`text-black text-center mb-6`}>Quý khách vui lòng kiểm tra kỹ các thông tin tổ chức đã đăng ký trong các điều khoản dưới đây</p>

            {/* Main Content */}
            <div className="accordion" id="accordionExample">
                <div className="accordion-item border-l border-gray-200">
                    <h2 className="accordion-header mb-0 relative" id="headingOne">
                        <button className="relative flex flex-col  w-full px-5 mb-3 text-base text-black transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded={tab == 'step1' ? 'true' : 'false'} aria-controls="collapseOne">
                            <span className={`font-bold text-md `+(tab == 'step1' ? 'text-black' : 'text-gray-400')}>Hợp đồng mở tài khoản trên kênh số</span>
                            <p className={tab == 'step1' ? 'text-black' : 'text-gray-300'}>Bao gồm đề nghị kiêm hợp đồng mở, sử dụng tài khoản trên kênh số</p>
                        </button>
                        <div className="w-6 h-6 mx-auto bg-sky-500 rounded-full text-lg border border-sky-300 flex items-center absolute timeline-label">
                            <span className="text-center text-white text-sm w-full">
                                1
                            </span>
                        </div>
                    </h2>
                    <div id="collapseOne" className={`accordion-collapse collapse px-5 pb-9 ` + (tab == `step1` ? 'show' : '')} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <SignatureStep1 />
                    </div>
                </div>
                {/* Tab 1 */}

                <div className="accordion-item border-l border-gray-200">
                    <h2 className="accordion-header mb-0 relative" id="heading2">
                        <button className="relative flex flex-col  w-full px-5 mb-3 text-base transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded={tab == 'step2' ? 'true' : 'false'} aria-controls="collapse2">
                            <span className={`font-bold text-md `+(tab == 'step2' ? 'text-black' : 'text-gray-400')}>Tải lên toàn bộ hồ sơ đã xác thực bằng chữ kí số</span>
                            <p className={tab == 'step2' ? 'text-black' : 'text-gray-300'}>Toàn bộ hồ sơ cần được xác thực chữ kí số đầy đủ trước khi được tải lên hệ thống Pvcombank</p>
                        </button>
                        <div className="w-6 h-6 mx-auto bg-sky-500 rounded-full text-lg border border-sky-300 flex items-center absolute timeline-label">
                            <span className="text-center text-white text-sm w-full">
                                2
                            </span>
                        </div>
                    </h2>
                    <div id="collapse2" className={`accordion-collapse collapse px-5 pb-9 ` + (tab == `step2` ? 'show' : '')} aria-labelledby="heading2" data-bs-parent="#accordionExample">
                        <SignatureStep2 />
                    </div>
                </div>
                {/* Tab 2 */}

            </div>
        </>
    );
};

export default CompleteSignature;
