import React, { useEffect, useState } from 'react';
import EKYCAccountTab1 from './EKYCAccountTab1';
import EKYCAccountTab2 from './EKYCAccountTab2';
import {AiFillCaretUp,AiFillCaretDown} from 'react-icons/ai';


const CreateAccountInfo = () => {
    const [tab, setTab] = useState(true);
    const [tab2, setTab2] = useState(true);

    return (
        <>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mb-0 relative" id="heading1">
                        <button className="relative flex items-center w-full px-5 mb-3 bg-blue-100 rounded py-2 text-gray-600 transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-controls="collapse1" onClick={() => setTab(!tab)}>
                            {tab == true ? <AiFillCaretUp size={16}/> : <AiFillCaretDown size={16}/>}
                            <span className={`font-bold text-sm ml-3`}>Mẫu mở TKTT trước khi KH ký số</span>
                        </button>
                    </h2>
                    <div id="collapse1" className={`accordion-collapse collapse px-5 pb-9 ` + (tab == true ? 'show' : '')} aria-labelledby="heading1" data-bs-parent="#accordionExample">
                        <EKYCAccountTab1 />
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header mb-0 relative" id="headingOne">
                        <button className="relative flex items-center w-full px-5 mb-3 bg-blue-100 rounded py-2 text-gray-600 transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-controls="collapse2" onClick={() => setTab2(!tab2)}>
                            {tab2 == true ? <AiFillCaretUp size={16}/> : <AiFillCaretDown size={16}/>}
                            <span className={`font-bold text-sm ml-3`}>Mẫu mở TKTT sau khi KH ký số</span>
                        </button>
                    </h2>
                    <div id="collapse2" className={`accordion-collapse collapse px-5 pb-9 ` + (tab2 == true ? 'show' : '')} aria-labelledby="heading2" data-bs-parent="#accordionExample">
                        <EKYCAccountTab2 />
                    </div>
                </div>

            </div>
        </>
    );
};

export default CreateAccountInfo;
