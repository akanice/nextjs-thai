import React, { useRef, useEffect, useState } from 'react';
import { AiFillCaretRight, AiFillCaretDown} from 'react-icons/ai';
import ReactLoading from 'react-loading';

const Tab4 = ({ classInput, classTab }) => {
 
    const [tabOpen, setTabOpen] = useState(false);
    const openTab = () => setTabOpen(true);
    const closeTab = () => setTabOpen(false);

    return (
        <>
            <div className={classTab}>
                <input className={classInput} type="checkbox" defaultValue="" id="flexCheckChecked2" />
                <label htmlFor="flexCheckChecked2" className={`cursor-pointer mr-auto text-black font-bold`}>
                    Đăng ký SMS Banking KHDN
                </label>
                <span className={`cursor-pointer`}>
                    {tabOpen == true ? (
                        <AiFillCaretDown size={`14`} onClick={closeTab}/>
                    ) : (
                        <AiFillCaretRight size={`14`} onClick={openTab} />
                    )}</span>
            </div>
            <div className={tabOpen == true ? 'show' : '' + ` collapse`} id="collapseExample">
                <div className={`px-9 pt-3 pb-6`}>
                    Tab4
                </div>
            </div>
        </>
    );
};

export default Tab4;
