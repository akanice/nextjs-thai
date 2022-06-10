import React, { useRef, useEffect, useState } from 'react';
import { AiFillCaretRight, AiFillCaretDown} from 'react-icons/ai';
import ReactLoading from 'react-loading';

const Tab3 = ({ classInput, classTab }) => {

    return (
        <>
            <div>
                <div className={classTab}>
                    <input className={classInput} type="checkbox" defaultValue="" id="flexCheckChecked3" />
                    <label htmlFor="flexCheckChecked3" className={`cursor-pointer mr-auto text-black font-bold`}>
                        Khách hàng đang nhận Uỷ thác/Uỷ quyền của tổ chức/cá nhân khác
                    </label>
                </div>
            </div>

        </>
    );
};

export default Tab3;
