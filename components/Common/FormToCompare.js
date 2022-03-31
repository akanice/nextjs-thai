import React, { useEffect, useState } from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import ButtonToggle from './ButtonToggle';
import FormRadio from './FormRadio';

const FormToCompare = ({ data }) => {
    const options1 = [
        { title: `Từ 0 đến 20 tỷ đồng`, value: `0-20` },
        { title: `Từ 20 đến 50 tỷ đồng`, value: `20-50` },
        { title: `Từ 50 đến 100 tỷ đồng`, value: `50-1000` }
    ];
    const currency = [
        { title: `VND`, value: `vnd` },
        { title: `USD`, value: `usd` },
        { title: `EUR`, value: `eur` }
    ];
    console.log(data);
    return (
        <>
            <div className={`grid grid-cols-3 gap-4`}>
                <div className={'col-span-2'}>
                    <FormInput name={`name_1`} label={`Tên tổ chức`} placeholder={``} value={data?.company_name} />
                </div>
                <div className={''}>
                    <FormInput name={`name_2`} label={`Tên viết tắt Tổ chức`} placeholder={``} value={data?.company_name_short} />
                </div>
            </div>
            <div className={`grid grid-cols-3 gap-4`}>
                <div className={'col-span-3'}>
                    <FormInput name={`name_3`} label={`Số Giấy tờ chứng minh Tổ chức được thành lập và hoạt đông hợp pháp`} placeholder={``} value={data?.id} />
                </div>
            </div>
            <div className={`grid grid-cols-3 gap-4`}>
                <div className={''}>
                    <FormInput name={`name_4`} label={`Ngày cấp`} placeholder={``} value={data?.company_issue_first_date} />
                </div>
                <div className={'col-span-2'}>
                    <FormInput name={`name_5`} label={`Nơi cấp`} placeholder={``} value={data?.company_issue_place} />
                </div>
            </div>
            <div className={`grid grid-cols-3 gap-4`}>
                <div className={'col-span-2'}>
                    <FormInput name={`name_6`} label={`Mã số thuế`} placeholder={``} value={data?.company_tax_code} />
                </div>
                <div className={''}>
                    <FormInput name={`name_7`} label={`Số điện thoại liên hệ`} placeholder={``} value={data?.company_tel} />
                </div>
            </div>
            <div className={`grid grid-cols-3 gap-4`}>
                <div className={'col-span-3'}>
                    <FormInput name={`name_8`} label={`Địa chỉ trụ sở chính`} placeholder={``} value={data?.company_location} />
                </div>
            </div>
            <div className={`grid grid-cols-3 gap-4`}>
                <div className={'col-span-3'}>
                    <FormInput name={`name_9`} label={`Địa chỉ liên hệ/giao dịch`} placeholder={``} value={data?.company_location} />
                </div>
            </div>
            <div className={`grid grid-cols-3 gap-4`}>
                <div className={'col-span-2'}>
                    <FormInput name={`name_10`} label={`Lĩnh vực hoạt động kinh doanh`} placeholder={``} value={`Sản xuất và kinh doanh thương mại`} />
                </div>
                <div className={''}>
                    <FormInput name={`name_11`} label={`Loại hình doanh nghiệp`} placeholder={``} value={data?.company_type} />
                </div>
            </div>

            <div className={`flex justify-between items-center mb-3`}>
                <div className={`text-gray-400 font-medium`}>Doanh thu năm liền kề gần nhất</div>
                <div className={``}>
                    <FormSelect options={options1} name={`name_12`} defaultValue={`0-20`} />
                </div>
            </div>

            <div className={`grid grid-cols-3 gap-4`}>
                <div className={'col-span-3'}>
                    <FormInput name={`name_13`} label={`Tên tài khoản đăng ký với Ngân hàng - Tiếng Việt`} placeholder={``} value={``} />
                </div>
            </div>
            <div className={`grid grid-cols-3 gap-4`}>
                <div className={'col-span-3'}>
                    <FormInput name={`name_14`} label={`Tên tài khoản đăng ký với Ngân hàng - Tiếng Anh`} placeholder={``} value={``} />
                </div>
            </div>
            <div className={`flex justify-start items-center mb-3`}>
                <ButtonToggle name={`name_15`} checked={`checked`} className={`mr-2`} />
                <div className={`underline text-link`}>Thông tin Khách hàng tại Hoa Kỳ (FATCA)</div>
            </div>

            <div className={`scrollpy h-36 w-full border border-gray-200 p-2 overflow-y-auto text-sm mb-3`}>
                <h4 className={`font-bold text-center`}>Thông tin Khách hàng tại Hoa Kỳ (FATCA)</h4>
                <div className={`flex mb-3`}>
                    <input className={`form-check-input appearance-none h-4 w-4 border-2 border-gray-400 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 shrink-0`} type="checkbox" defaultValue="" id="flexCheckChecked" />
                    <label htmlFor="flexCheckChecked" className={`cursor-pointer`}>
                        Tố chức được thành lập tại Mỹ hoặc chi nhánh Mỹ của một tổ chức thành lập ngoài Mỹ – Vui lòng điền mẫu đơn W-9 dành cho tổ chức | US legal entity or US-branch of foreign legal entity - W-9 form needed
                    </label>
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
            <div className={`flex gap-4 mb-6`}>
                <div className={'w-3/5'}>
                    <FormSelect options={options1} name={`name_15`} label={`Đăng ký loại tài khoản cần mở`} />
                </div>
                <div className={'w-2/5'}>
                    <FormRadio options={currency} name={`name_16`} label={`Chọn loại tiền tệ`} />
                </div>
            </div>

            <div className={`flex justify-center`}>
                <button onClick={() => {}} className={`font-medium mr-3 bg-gray-300 text-link py-2 px-3`}>
                    Chọn số tài khoản thường
                </button>
                <button onClick={() => {}} className={`font-medium mr-3 bg-gray-300 text-link py-2 px-3`}>
                    Chọn số tài khoản thường
                </button>
            </div>
        </>
    );
};

export default FormToCompare;
