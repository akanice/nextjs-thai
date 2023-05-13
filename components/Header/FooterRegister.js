/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const FooterRegister = () => {

    return (
        <>
            <div position="relative" className={`flex justify-between items-center text-gray-400 p-3`}>
                <div className='text-sm'>
                    <ul className='flex'>
                        <li><a href='#'>Hướng dẫn sử dụng</a></li>
                        <li className='mr-3'><a href='#'>Văn bản</a></li>
                        <li className='mr-3'><a href='#'>Bảo mật</a></li>
                    </ul>
                </div>
                <div className='text-sm'>
                    © Copyright 2022 - Bản quyền CTy thỏ trắng
                </div>
            </div>
        </>
    );
};

export default FooterRegister;
