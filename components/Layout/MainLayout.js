import React from 'react';
import Header from '/components/Header';
import Head from '../Common/Head';
import Breadcrumb from '@components/Header/Breadcrumb';

const MainLayout = ({ children, title }) => {

    return (
        <div className={`bg-white min-h-screen`}>
            <Head title={`PVComBank - ${title}`} />
            <Header />
            <Breadcrumb />
            <div className={`-mt-24`}>
                <div className={`bg-white container p-9 mx-auto`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
