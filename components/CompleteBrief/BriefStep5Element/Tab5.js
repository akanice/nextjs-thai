import React, { useRef, useEffect, useState } from 'react';
import { AiFillCaretRight, AiFillCaretDown} from 'react-icons/ai';
import ReactLoading from 'react-loading';

const Tab5 = ({ classInput, classTab }) => {
    
    const [tabOpen, setTabOpen] = useState(false);
    const openTab = () => setTabOpen(true);
    const closeTab = () => setTabOpen(false);
    
    return (
        <>
            <div>
                <div className={classTab}>
                    <input className={classInput} type="checkbox" defaultValue="" id="flexCheckChecked" />
                    <label htmlFor="flexCheckChecked" className={`cursor-pointer mr-auto text-black font-bold`}>
                        Khách hàng đang nhận Uỷ thác/Uỷ quyền của tổ chức/cá nhân khác
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
                        <ol className={`list-decimal`}>
                            <li>Tổ chức được thành lập tại Mỹ hoặc chi nhánh Mỹ của một tổ chức thành lập ngoài Mỹ</li>
                            <li>Tổ chức tài chính thành lập ngoài Mỹ</li>
                            <li>Tổ chức phi tài chính thành lập ngoài Mỹ có chủ sở hữu nắm giữ trên 10% vốn là: Cá nhân có quốc tịch Mỹ / cá nhân có thẻ xanh Mỹ / cá nhân có thời gian lưu trú tại Mỹ ít nhất 31 ngày trong năm hiện tại và 183 ngày trong gia đoạn 3 năm, bao gồm năm hiện tại và 2 năm liền kề trước đó hoặc Tổ chức được thành lập tại Mỹ</li>
                        </ol>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Tab5;
