import React from 'react';
import Head from '../Common/Head';
import HeaderRegister from '@components/Header/HeaderRegister';
import FooterRegister from '@components/Header/FooterRegister';

const RegisterLayout = ({ children, title }) => {

    return (
        <>
            <div className={`bg-white wrapper h-screen min-h-screen h-full flex flex-col`}>
                <Head title={`Thỏ Trắng - ${title}`} />
                <div className={`h-full flex flex-col justify-center grow`} >
                    <HeaderRegister />
                    <div className='flex flex-col justify-center md:flex-row grow'>
                        <div className='w-full flex justify-center items-center p-6'>   
                            {children}
                        </div>
                    </div>
                    <FooterRegister />
                </div>
            </div>
        </>
    );
};

export default RegisterLayout;
