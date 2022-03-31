import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const LeftColumn = () => {
  const logo = "/images/logo_main.png";
  const avatar = "images/leftcol-avatar.png";

  return (
    <div className={`left-col h-screen absolute left-0 top-0 bottom-0`} style={{width:'300px',backgroundImage:"url('/images/bg-left-col.png')",backgroundSize:"cover"}}>
      <div className={`flex flex-col justify-between items-center h-full`}>
        <div className={`mt-9 mb-16`}><img src={logo} width={154} /></div>
        <div className={`mb-16`}>
          <h3 className={`font-bold text-xl text-link mb-3`}>Khách hàng tổ chức</h3>
          <ul>
            <li className={`mb-1`}>Bước 1:  Đăng ký thông tin</li>
            <li className={`mb-1`}>Bước 2: Tạo hồ sơ</li>
            <li className={`mb-1`}>Bước 3: Đăng ký chữ ký số</li>
            <li className={`mb-1`}>Bước 4: Thông tin tài khoản</li>
            <li className={`mb-1`}>Bước 5: Dịch vụ tiện ích</li>
            <li className={`mb-1`}>Bước 6: xác nhận đăng ký</li>
          </ul>
        </div>
        <div className={`mt-9 flex-1`}><img src={avatar} width={100} /></div>
        <div className={`copyright mb-6`}>©PVcomBank 2020</div>
      </div>
    </div>
  );
};

export default LeftColumn;
