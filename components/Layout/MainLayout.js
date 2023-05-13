import React, { useEffect, useState } from 'react';
import Head from '../Common/Head';

// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import LeftDrawer from "@components/Layout/Sub/LeftDrawer";

let ps;

const MainLayout = ({ children, title }) => {

    return (
        <>
            <div className={`bg-white wrapper flex flex-col justify-start h-screen`}>
                <Head title={`Thỏ Trắng - ${title}`} />
                <div className='header flex justify-between items-center min-h-[68px] bg-amber-50 border-b border-gray-100 p-3'>
                    <div className='logo'>[Logo]</div>
                    <div className='user-profile'>[Admin Hệ thống]</div>
                </div>
                <div className={'flex w-full grow'}>
                    <LeftDrawer/>
                    <div className={'flex-1 p-6'} >
                        {children}
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default MainLayout;
