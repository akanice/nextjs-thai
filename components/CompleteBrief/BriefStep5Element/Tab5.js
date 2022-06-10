import React, { useRef, useEffect, useState } from 'react';
import { AiFillCaretRight, AiFillCaretDown} from 'react-icons/ai';
import FormInput2 from '@components/Common/FormInput2';


const Tab5 = ({ classInput, classTab }) => {
    
    const [tabOpen, setTabOpen] = useState(false);
    const openTab = () => setTabOpen(true);
    const closeTab = () => setTabOpen(false);
    const classRadio = `form-check-input bg-white appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer;`
    const classItem = `item pb-3 mb-3 border-b border-dashed border-gray-200`;
    
    const [status, setStatus] = useState(1);
    const radioHandler = (status) => {
        setStatus(status);
    };

    return (
        <>
            <div>
                <div className={classTab}>
                    <input className={classInput} type="checkbox" defaultValue="" id="flexCheckChecked5" />
                    <label htmlFor="flexCheckChecked5" className={`cursor-pointer mr-auto text-black font-bold`}>
                        Đăng ký chọn số tài khoản đẹp
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
                        <FormInput2 name={`name_1`} placeholder={`Điền 4 số cuối của tài khoản số đẹp cần tìm`} value={``} />

                        <div className={`resut`}>
                            <div className={classItem}>
                                <input className={classRadio} type="radio" name="tab5Radio1" id="tab5Radio1" checked={status === `123 456 789 8888`} onClick={(e) => radioHandler(`123 456 789 8888`)}/>
                                <label className="form-check-label inline-block text-gray-800" htmlFor="tab5Radio1">123 456 789 8888</label>
                            </div>
                            <div className={classItem}>
                                <input className={classRadio} type="radio" name="tab5Radio2" id="tab5Radio2" checked={status === `123 456 789 9999`} onClick={(e) => radioHandler(`123 456 789 9999`)}/>
                                <label className="form-check-label inline-block text-gray-800" htmlFor="tab5Radio2">123 456 789 9999</label>
                            </div>
                            <div className={classItem}>
                                <input className={classRadio} type="radio" name="tab5Radio3" id="tab5Radio3" checked={status === `123 456 789 2222`} onClick={(e) => radioHandler(`123 456 789 2222`)}/>
                                <label className="form-check-label inline-block text-gray-800" htmlFor="tab5Radio3">123 456 789 2222</label>
                            </div>
                            <div className={classItem}>
                                <input className={classRadio} type="radio" name="tab5Radio4" id="tab5Radio4" checked={status === `123 456 789 3333`} onClick={(e) => radioHandler(`123 456 789 3333`)}/>
                                <label className="form-check-label inline-block text-gray-800" htmlFor="tab5Radio4">123 456 789 3333</label>
                            </div>
                            <div className={classItem}>
                                <input className={classRadio} type="radio" name="tab5Radio5" id="tab5Radio5" checked={status === `123 456 789 5555`} onClick={(e) => radioHandler(`123 456 789 5555`)}/>
                                <label className="form-check-label inline-block text-gray-800" htmlFor="tab5Radio5">123 456 789 5555</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Tab5;
