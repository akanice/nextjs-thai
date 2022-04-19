import React, { useRef, useEffect, useState } from 'react';
import FormInput2 from '@components/Common/FormInput2';
import FormSelect2 from '@components/Common/FormSelect2';
import UploadFile from './UploadFile';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';

const BriefStep3 = ({ setTab }) => {
    const data = { company_id: 'Lorem ipsum' };
    const field = [
        { title: `Lĩnh vực 1`, value: `linh_vuc_1` },
        { title: `Lĩnh vực 2`, value: `linh_vuc_2` }
    ];
    const onChangeUS = (e) => {};
    const nextStep = () => {
        setTab('step3');
    };
    const user = [{ avatar: '/images/leftcol-avatar.png' }];
    const avatarRef = useRef();
    return (
        <>
            <div className={`upload-docs`}>
                <UploadFile
                    // defaultPicture={user.avatar}
                    ref={avatarRef}
                    className={`normal-case text-gray-600 text-xs`}
                />
                <div className={`flex justify-start items-center mt-6`}>
                    <div className={`text-green-500 mr-3`}>
                        <AiFillCheckCircle size={24} />
                    </div>
                    <div>
                        <div className={`text-green-500 text-lg font-bold`}>Tải hồ sơ lên thành công</div>
                        <div className={`text-gray-600 text-sm`}>Bấm vào "Hoàn tất hồ sơ" để hoàn thiện xác thực chữ ký số</div>
                    </div>
                </div>
            </div>

            <div className={`border-b border-gray-200 my-6`}></div>
            <div className={`grid grid-cols-2 gap-8`}>
                {/* Row 1 */}
                <div className={''}>
                    <FormInput2 name={`name_6`} label={`Tên doanh nghiệp`} placeholder={`Công ty cổ phần ABC`} value={data?.company_id} />
                </div>
                <div className={''}>
                    <FormInput2 name={`name_7`} label={`Tên viết tắt`} placeholder={`ABC`} value={data?.company_id} />
                </div>
            </div>
            <div className={`grid grid-cols-2 gap-8`}>
                {/* Row 2 */}
                <div className={''}>
                    <FormInput2 name={`name_6`} label={`Mã số doanh nghiệp`} placeholder={`0123456789`} value={data?.company_id} />
                </div>
                <div className={''}>
                    <FormInput2 name={`name_7`} label={`Mã số thuế`} placeholder={`ABC`} value={data?.company_id} />
                </div>
            </div>
            <div className={`grid grid-cols-2 gap-8`}>
                {/* Row 3 */}
                <div className={''}>
                    <FormInput2 name={`name_6`} label={`Ngày cấp`} placeholder={`21/08/2017`} value={data?.company_id} />
                </div>
                <div className={''}>
                    <FormInput2 name={`name_7`} label={`Nơi cấp`} placeholder={`ABC`} value={data?.company_id} />
                </div>
            </div>
            <div className={`grid grid-cols-2 gap-8`}>
                {/* Row 4 */}
                <div className={''}>
                    <FormInput2 name={`name_6`} label={`Địa chỉ trụ sở chính`} placeholder={`0123456789`} value={data?.company_id} />
                </div>
                <div className={''}>
                    <FormInput2 name={`name_7`} label={`Số điện thoại liên hệ`} placeholder={`ABC`} value={data?.company_id} />
                </div>
            </div>
            <div className={`grid grid-cols-2 gap-8`}>
                {/* Row 5 */}
                <div className={''}>
                    <FormSelect2 label={`Lĩnh vực hoạt động kinh doanh`} options={field} name={`name_2`} defaultValue={`linh_vuc_1`} className={``} />
                </div>
                <div className={''}>
                    <FormSelect2 label={`Doanh thu năm gần nhất`} options={field} name={`name_2`} defaultValue={`linh_vuc_1`} className={``} />
                </div>
            </div>
            <div className={`grid grid-cols-2 gap-8`}>
                {/* Row 4 */}
                <div className={''}>
                    <FormInput2 name={`name_6`} label={`Tên tài khoản đăng ký với tài khoản tiếng Việt`} placeholder={`0123456789`} value={data?.company_id} />
                </div>
                <div className={''}>
                    <FormInput2 name={`name_7`} label={`Tên tài khoản đăng ký với tài khoản tiếng Anh`} placeholder={`ABC`} value={data?.company_id} />
                </div>
            </div>
            <div className={`grid grid-cols-2 gap-8`}>
                {/* Row 5 */}
                <div className={''}>
                    <FormSelect2 label={`Đăng ký loại tài khoản cần mở`} options={field} name={`name_2`} defaultValue={`linh_vuc_1`} className={``} />
                </div>
                <div className={''}>
                    <FormSelect2 label={`Chọn loại tiền tệ`} options={field} name={`name_2`} defaultValue={`linh_vuc_1`} className={``} />
                </div>
            </div>
            <div className={`flex items-center mb-3`}>
                <input className={`form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-sky-400 checked:border-sky-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 shrink-0`} onChange={onChangeUS} type="checkbox" defaultValue="" id="flexCheckChecked" />
                <label htmlFor="flexCheckChecked" className={`cursor-pointer`}>
                    Thông tin Khách hàng tại Hoa Kỳ (FATCA)
                </label>
            </div>
            <div className={`flex items-center mb-3`}>
                <input className={`form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-sky-400 checked:border-sky-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 shrink-0`} onChange={onChangeUS} type="checkbox" defaultValue="" id="flexCheckChecked" />
                <label htmlFor="flexCheckChecked" className={`cursor-pointer`}>
                    Đăng ký thông tin về chủ sở hữu hưởng lợi
                </label>
            </div>
            <div className={`border-b border-gray-200 my-6`}></div>
            <div className={`grid grid-cols-2 gap-8`}>
                {/* Row 4 */}
                <div className={''}>
                    <FormInput2 name={`name_6`} label={`Họ và tên`} placeholder={`0123456789`} value={data?.company_id} />
                </div>
                <div className={''}>
                    <FormInput2 name={`name_7`} label={`Số CMND/CCCD`} placeholder={`ABC`} value={data?.company_id} />
                </div>
            </div>
            <div className={`grid grid-cols-2 gap-8`}>
                {/* Row 4 */}
                <div className={''}>
                    <FormInput2 name={`name_6`} label={`Số điện thoại di động`} placeholder={`0123456789`} value={data?.company_id} />
                </div>
                <div className={''}>
                    <FormInput2 name={`name_7`} label={`Địa chỉ liên lạc`} placeholder={`ABC`} value={data?.company_id} />
                </div>
            </div>
            <button onClick={nextStep} className="bg-second-color hover:text-yellow-500 text-black font-medium py-2 px-9 mt-3 rounded focus:outline-none focus:shadow-outline" type="button">
                Tiếp tục
            </button>
        </>
    );
};

export default BriefStep1;
