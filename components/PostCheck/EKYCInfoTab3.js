import React, { useEffect, useState } from 'react';
import EKYCShowData from '@components/Common/EKYCShowData';

const EKYCInfoTab3 = () => {

    return (
        <>
            <div className={`grid grid-cols-3 gap-4 items-center`}>
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
                    <EKYCShowData label={`Họ và tên người đại diện PL`} value={`Nguyễn Vân Anh`} className={`mb-3`}/>
                    <EKYCShowData label={`Thời hạn bổ nhiệm`} value={`12 tháng`} className={``}/>
                </div>
                <div>
                    <EKYCShowData label={`Ngày bổ nhiệm`} value={`25/12/2015`} className={`mb-3`}/>
                    <EKYCShowData label={`Chức vụ bổ nhiệm`} value={`Kế toán trưởng`} className={``}/>
                    
                </div>
            </div>
        </>
    );
};

export default EKYCInfoTab3;
