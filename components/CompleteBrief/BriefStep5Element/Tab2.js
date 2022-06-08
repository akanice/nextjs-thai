import React, { useRef, useEffect, useState } from 'react';
import { AiFillCaretRight, AiFillCaretDown} from 'react-icons/ai';
import FormInput2 from '@components/Common/FormInput2';
import ReactLoading from 'react-loading';

const Tab2 = ({ classInput, classTab }) => {
 
    const [tabOpen, setTabOpen] = useState(false);
    const openTab = () => setTabOpen(true);
    const closeTab = () => setTabOpen(false);
    const data = {birthday:``,name:``};

    return (
        <>
            <div className={classTab}>
                <input className={classInput} type="checkbox" defaultValue="" id="flexCheckChecked2" />
                <label htmlFor="flexCheckChecked2" className={`cursor-pointer mr-auto text-black font-bold`}>
                    Thông tin về chủ sở hữu hưởng lợi
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
                    <div className={`grid grid-cols-2 gap-x-8 gap-y-1`}>
                        <div className={''}>{/* Row 1 */}
                            <FormInput2 name={`name_6`} label={`Họ và tên`} placeholder={`Nguyễn Văn A`} value={data?.name} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Ngày tháng năm sinh`} placeholder={`12/09/1988`} value={data?.birthday} />
                        </div>

                        <div className={''}>{/* Row 2 */}
                            <FormInput2 name={`name_6`} label={`Số CMND/CCCD/Hộ chiếu`} placeholder={`Nguyễn Văn A`} value={data?.name} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Số điện thoại di dộng`} placeholder={`0123 456 789`} value={data?.birthday} />
                        </div>

                        <div className={''}>{/* Row 3 */}
                            <FormInput2 name={`name_6`} label={`Địa chỉ liên lạc`} placeholder={`Nguyễn Văn A`} value={data?.name} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Nghề nghiệp & chức vụ`} placeholder={`12/09/1988`} value={data?.birthday} />
                        </div>

                        <div className={''}>{/* Row 4*/}
                            <FormInput2 name={`name_6`} label={`Quốc tịch`} placeholder={`Việt Nam`} value={data?.name} />
                        </div>
                    </div>
                    <div className={`mt-3`}>
                        <div className={`py-2 px-3 bg-yellow-100 border border-yellow-300 inline-block rounded cursor-pointer`}>+ Thêm chủ sở hữu hưởng lợi</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tab2;
