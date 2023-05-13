import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FooterColumn from './FooterColumn';

const Footer = () => {

  return (
    <div className={`footer bg-bg_footer py-3 px-16 border-t border-gray-100`}>
      <div className={`container mx-auto`}>
        <div className={`flex justify-between items-center`}>
          <div className={`flex text-gray-400 text-sm`}>
            <span>Bản quyền © 2023</span>
          </div>
          <div className={`flex text-sm text-gray-400`}>
            Tổng đài: 19001900 (Hỗ trợ trực tuyến 24/07)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
