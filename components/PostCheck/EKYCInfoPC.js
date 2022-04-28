import React, { useEffect, useState } from 'react';
import EKYCInfoTab1 from './EKYCInfoTab1';
import EKYCInfoTab2 from './EKYCInfoTab2';
import EKYCInfoTab3 from './EKYCInfoTab3';
import EKYCInfoTab4 from './EKYCInfoTab4';
import EKYCInfoTab5 from './EKYCInfoTab5';
import {AiFillCaretUp,AiFillCaretDown} from 'react-icons/ai';


const EKYCInfoPC = () => {
    const [tab, setTab] = useState(true);
    const [tab2, setTab2] = useState(false);
    const [tab3, setTab3] = useState(true);
    const [tab4, setTab4] = useState(true);
    const [tab5, setTab5] = useState(true);

    return (
        <>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mb-0 relative" id="heading1">
                        <button className="relative flex items-center w-full px-5 mb-3 bg-blue-100 rounded py-2 text-gray-600 transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-controls="collapse1" onClick={() => setTab(!tab)}>
                            {tab == true ? <AiFillCaretUp size={16}/> : <AiFillCaretDown size={16}/>}
                            <span className={`font-bold text-sm ml-3`}>Giấy chứng nhận đăng kí kinh doanh/đăng kí doanh nghiệp</span>
                        </button>
                    </h2>
                    <div id="collapse1" className={`accordion-collapse collapse px-5 pb-9 ` + (tab == true ? 'show' : '')} aria-labelledby="heading1" data-bs-parent="#accordionExample">
                        <EKYCInfoTab1 />
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header mb-0 relative" id="headingOne">
                        <button className="relative flex items-center w-full px-5 mb-3 bg-blue-100 rounded py-2 text-gray-600 transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-controls="collapse2" onClick={() => setTab2(!tab2)}>
                            {tab2 == true ? <AiFillCaretUp size={16}/> : <AiFillCaretDown size={16}/>}
                            <span className={`font-bold text-sm ml-3`}>Giấy chứng nhận đăng kí thuế</span>
                        </button>
                    </h2>
                    <div id="collapse2" className={`accordion-collapse collapse px-5 pb-9 ` + (tab2 == true ? 'show' : '')} aria-labelledby="heading2" data-bs-parent="#accordionExample">
                        <EKYCInfoTab2 />
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header mb-0 relative" id="heading3">
                        <button className="relative flex items-center w-full px-5 mb-3 bg-blue-100 rounded py-2 text-gray-600 transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-controls="collapse3" onClick={() => setTab3(!tab3)}>
                            {tab3 == true ? <AiFillCaretUp size={16}/> : <AiFillCaretDown size={16}/>}
                            <span className={`font-bold text-sm ml-3`}>Quyết định bổ nhiệm kế toán trưởng/người phụ trách kế toán</span>
                        </button>
                    </h2>
                    <div id="collapse3" className={`accordion-collapse collapse px-5 pb-9 ` + (tab3 == true ? 'show' : '')} aria-labelledby="heading3" data-bs-parent="#accordionExample">
                        <EKYCInfoTab3 />
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header mb-0 relative" id="heading4">
                        <button className="relative flex items-center w-full px-5 mb-3 bg-blue-100 rounded py-2 text-gray-600 transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-controls="collapse4" onClick={() => setTab4(!tab4)}>
                            {tab4 == true ? <AiFillCaretUp size={16}/> : <AiFillCaretDown size={16}/>}
                            <span className={`font-bold text-sm ml-3`}>Giấy tờ tuỳ thân của người đại diện theo Pháp luật của tổ chức</span>
                        </button>
                    </h2>
                    <div id="collapse4" className={`accordion-collapse collapse px-5 pb-9 ` + (tab4 == true ? 'show' : '')} aria-labelledby="heading4" data-bs-parent="#accordionExample">
                        <EKYCInfoTab4 />
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header mb-0 relative" id="heading5">
                        <button className="relative flex items-center w-full px-5 mb-3 bg-blue-100 rounded py-2 text-gray-600 transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-controls="collapse5" onClick={() => setTab5(!tab5)}>
                            {tab5 == true ? <AiFillCaretUp size={16}/> : <AiFillCaretDown size={16}/>}
                            <span className={`font-bold text-sm ml-3`}>Giấy tờ tuỳ thân của Kế toán trưởng/Người phụ trách kế toán</span>
                        </button>
                    </h2>
                    <div id="collapse5" className={`accordion-collapse collapse px-5 pb-9 ` + (tab5 == true ? 'show' : '')} aria-labelledby="heading5" data-bs-parent="#accordionExample">
                        <EKYCInfoTab5 />
                    </div>
                </div>
            </div>
        </>
    );
};

export default EKYCInfoPC;
