import React, { useRef, useEffect, useState } from 'react';
import { AiFillCaretRight, AiFillCaretDown} from 'react-icons/ai';
import FormInput2 from '@components/Common/FormInput2';
import FormSelect2 from '@components/Common/FormSelect2';

const Tab4 = ({ classInput, classTab }) => {
 
    const [tabOpen, setTabOpen] = useState(false);
    const openTab = () => setTabOpen(true);
    const closeTab = () => setTabOpen(false);
    const data = {birthday:``,name:``};
    const services = [
        { title: `Nhận biến động từ ngân hàng`, value: `1` },
        { title: `Khác`, value: `2` },
    ];

    const [status, setStatus] = useState(1);
    const radioHandler = (status) => {
        setStatus(status);
    };

    const PickForm = () => {
        return (
            <div className={`grid grid-cols-2 gap-x-8 gap-y-1 px-5 mt-5 `}>
                <div className={''}>{/* Row 1 */}
                    <FormInput2 name={`name_6`} label={`Họ và tên`} placeholder={`Nguyễn Văn A`} value={data?.name} />
                </div>
                <div className={''}>
                    <FormInput2 name={`name_7`} label={`Số CMND/CCCD/Hộ chiếu`} placeholder={`0123 456 789`} value={data?.name} />
                </div>

                <div className={''}>{/* Row 2 */}
                    <FormInput2 name={`name_6`} label={`Chức vụ`} placeholder={`Nguyễn Văn A`} value={data?.name} />
                </div>
                <div className={''}>
                    <FormInput2 name={`name_7`} label={`Số điện thoại nhận thông báo`} placeholder={`0123 456 789`} value={data?.birthday} />
                </div>

                <div className={``}>
                    <FormSelect2 label={`Doanh thu năm gần nhất`}options={services} name={`name_2`} defaultValue={services && services[0]} className={``} />
                </div>
            </div>
        );
    }

    return (
        <>
            <div className={classTab}>
                <input className={classInput} type="checkbox" defaultValue="" id="flexCheckChecked4" />
                <label htmlFor="flexCheckChecked4" className={`cursor-pointer mr-auto text-black font-bold`}>
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
                    <div className="form-check mb-3">
                        <input className={`form-check-input bg-white appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`} type="radio" name="tab4Radio1" id="tab4Radio1"  defaultChecked checked={status === 1} onClick={(e) => radioHandler(1)}/>
                        <label className="form-check-label inline-block text-gray-800" htmlFor="tab4Radio1">Chọn người đại diện theo pháp luật</label>
                    </div>
                    {status === 1 && <PickForm />}

                    <div className="form-check">
                        <input className={`form-check-input bg-white appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`} type="radio" name="tab4Radio2" id="tab4Radio2" checked={status === 2} onClick={(e) => radioHandler(2)} />
                        <label className="form-check-label inline-block text-gray-800" htmlFor="tab4Radio2">Chọn người khác</label>
                    </div>
                    {status === 2 && <PickForm />}
                </div>
            </div>
        </>
    );
};

export default Tab4;
