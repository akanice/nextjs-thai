import React, { useEffect, useState } from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import ButtonToggle from './ButtonToggle';
import FormRadio from './FormRadio';

const FormAccountant = ({ data }) => {
    const birthDate = [
        { title: `28`, value: `28` },
        { title: `29`, value: `29` },
        { title: `30`, value: `30` },
        { title: `31`, value: `31` }
    ];
    const birthMonth = [
        { title: `1`, value: `1` },
        { title: `2`, value: `2` },
        { title: `3`, value: `3` },
        { title: `4`, value: `4` }
    ];
    const birthYear = [
        { title: `1990`, value: `1990` },
        { title: `1991`, value: `1991` },
        { title: `1992`, value: `1992` },
        { title: `1993`, value: `1993` }
    ];
    const nations = [
        { title: `Việt Nam`, value: `VI` },
        { title: `Cambodia`, value: `KH` }
    ];
    const currency = [
        { title: `VND`, value: `vnd` },
        { title: `USD`, value: `usd` },
        { title: `EUR`, value: `eur` }
    ];

    return (
        <>
            <div className={`grid grid-cols-2 gap-4`}>
                <div className={''}>
                    <FormInput name={`name_1`} label={`Họ và tên`} placeholder={``} value={data?.name} />
                </div>
                <div className={'flex items-center justify-end'}>
                    <div className={'text-gray-400 mr-2'}>Ngày sinh</div>
                    <FormSelect options={birthDate} name={`name_2`} defaultValue={`0-20`} className={`mr-2`} />
                    <FormSelect options={birthMonth} name={`name_2`} defaultValue={`0-20`} className={`mr-2`} />
                    <FormSelect options={birthYear} name={`name_2`} defaultValue={`0-20`} className={`mr-2`} />
                </div>
            </div>
            <div className={`grid grid-cols-3 gap-4`}>
                <div className={''}>
                    <FormInput name={`name_6`} label={`Số CMND/HC/CCCD`} placeholder={``} value={data?.id} />
                </div>
                <div className={''}>
                    <FormInput name={`name_7`} label={`Ngày cấp`} placeholder={``} value={data?.issue_day} />
                </div>
                <div className={''}>
                    <FormInput name={`name_7`} label={`Nơi cấp`} placeholder={``} value={data?.issue_by} />
                </div>
            </div>
            <div className={`grid grid-cols-3 gap-4`}>
                <div className={''}>
                    <FormInput name={`name_4`} label={`Chức vụ`} placeholder={``} value={`Ke toan truong`} />
                </div>
                <div className={'col-span-2'}>
                    <FormInput name={`name_5`} label={`Nghề nghiệp`} placeholder={``} value={``} />
                </div>
            </div>
            <div className={`grid grid-cols-3 gap-4`}>
                <div className={''}>
                    <FormInput name={`name_6`} label={`Điện thoại di động`} placeholder={``} value={``} />
                </div>
                <div className={''}>
                    <FormInput name={`name_7`} label={`Email`} placeholder={``} value={``} />
                </div>
                <div className={''}>
                    <FormSelect options={nations} label={`Quốc tịch`} name={`name_2`} defaultValue={`0-20`} className={``} />
                </div>
            </div>
            <div className={`grid grid-cols-3 gap-4`}>
                <div className={'col-span-3'}>
                    <FormInput name={`name_13`} label={`Địa chỉ thường trú`} placeholder={``} value={data?.address} />
                </div>
            </div>
            <div className={`grid grid-cols-3 gap-4`}>
                <div className={'col-span-3'}>
                    <FormInput name={`name_13`} label={`Địa chỉ liên lạc`} placeholder={``} value={data?.address} />
                </div>
            </div>
        </>
    );
};

export default FormAccountant;
