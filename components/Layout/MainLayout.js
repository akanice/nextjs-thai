import React from 'react';
import Header from '/components/Header';
import Head from '../Common/Head';
import Breadcrumb from '@components/Header/Breadcrumb';
import Footer from '@components/Footer';

const MainLayout = ({ children, title }) => {

    return (
        <div className={`bg-white min-h-screen`}>
            <Head title={`PVComBank - ${title}`} />
            <Header />
            <Breadcrumb />
            <div className={`-mt-36 pb-9`}>
                <div className={`bg-white container p-9 mx-auto rounded-lg shadow-lg`}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
