import React, { useEffect, useState } from 'react'
import {HiOutlineUserCircle,HiLockClosed} from 'react-icons/hi';

const Home = () => {

    return (
        <div className={``}>
            <div className="mx-auto">
                <div className='bg-gray-100 p-9 rounded-md'>
                    <h3 className='text-lg text-center font-bold mb-5'>Đăng nhập vào hệ thống</h3>
                    <div class="form-group relative rounded-md outline-0 min-w-[450px] mb-3">
                        <HiOutlineUserCircle size={24} className='text-gray-300 absolute top-3 left-2'/>
                        <input type='text' className='form-control p-3 pl-9 w-full' placeholder='Nhập tên đăng nhập của bạn' />
                    </div>
                    <div class="form-group relative rounded-md outline-0 min-w-[450px] mb-3">
                        <HiLockClosed size={24} className='text-gray-300 absolute top-3 left-2'/>
                        <input type='text' className='form-control p-3 pl-9 w-full' placeholder='Mật khẩu của bạn' />
                    </div>
                    <div className='btn w-full bg-amber-400 p-3 rounded-md text-white text-center font-bold'>Đăng nhập</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
