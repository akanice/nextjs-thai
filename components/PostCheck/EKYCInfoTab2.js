import React, { useEffect, useState } from 'react';
import EKYCShowData from '@components/Common/EKYCShowData';

const EKYCInfoTab2 = () => {

    return (
        <>
            <div className={`grid grid-cols-3 gap-4`}>
                <div className={`justify-self-center`}>
                    <div className={`w-36 h-48 border border-gray-100`} style={{backgroundImage:"url('/images/sample_img.png')",backgroundSize:"cover",backgroundPosition:"center center"}}>
                    
                    </div>
                    <div className={`flex justify-center`}>
                        <span className={`underline text-link mr-3`}>Phóng to</span>
                        <span className={`underline text-link`}>Print</span>
                    </div>
                </div>
                <div>
                    <EKYCShowData label={`Tên tổ chức`} value={`Công ty CP ABC`} className={`mb-3`}/>
                    <EKYCShowData label={`Ngày cấp lần đầu`} value={`20/12/2015`} className={`mb-3`}/>
                    <EKYCShowData label={`Địa chỉ trụ sở chính`} value={`22 Ngô Quyền, Hoàn Kiếm, Hà Nội`} className={`mb-3`}/>
                    <EKYCShowData label={`Họ và tên người đại diện PL`} value={`Nguyễn Vân Anh`} className={`mb-3`}/>
                    <EKYCShowData label={`Số giấy tờ tuỳ thân`} value={`001187007888`} className={`mb-3`}/>
                    <EKYCShowData label={`Địa chỉ thường trú`} value={`22 Ngô Quyền, Hoàn Kiếm, Hà Nội`} />
                </div>
                <div>
                    <EKYCShowData label={`Mã số ĐKKD`} value={`001187007888`} className={`mb-3`}/>
                    <EKYCShowData label={`Nơi cấp`} value={`TP Hà Nội`} className={`mb-3`}/>
                    <EKYCShowData label={`Số điện thoại liên hệ`} value={`22 Ngô Quyền, Hoàn Kiếm, Hà Nội`} className={`mb-3`}/>
                    <EKYCShowData label={`Chức vụ`} value={`Nguyễn Vân Anh`} className={`mb-3`}/>
                    <EKYCShowData label={`Ngày cấp, nơi cấp`} value={`06/07/2015 Cục Cảnh sát`} className={`mb-3`}/>
                    <EKYCShowData label={`Địa chỉ liên hệ`} value={`22 Ngô Quyền, Hoàn Kiếm, Hà Nội`} />
                    
                </div>
            </div>
        </>
    );
};

export default EKYCInfoTab2;
