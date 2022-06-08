import HeaderPostCheck from '/components/Header/HeaderPostCheck';
import Head from '../Common/Head';
// import Footer from '@components/Footer';
import React from 'react';
import LeftColumnPC from '@components/Common/LeftColumnPC';
// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

let ps;

const RegisterLayout = ({ children, title }) => {
    const mainPanel = React.createRef();
    // initialize and destroy the PerfectScrollbar plugin
    React.useEffect(() => {
        if (navigator.platform.indexOf('Win') > -1) {
            ps = new PerfectScrollbar(mainPanel.current, {
                suppressScrollX: true,
                suppressScrollY: false
            });
            document.body.style.overflow = 'hidden';
        }
    }, [mainPanel]);

    return (
        <>
            <div className={`bg-white`}>
                <Head title={`Bank - ${title}`} />
                <HeaderPostCheck className={`mb-12`} />
                <div className={`wrapper top-0 relative h-screen min-h-screen`}>
                    <LeftColumnPC />
                    <div className={`h-screen relative float-right`} style={{ width: 'calc(100% - 250px)', 'overflow-y': 'scroll' }} ref={mainPanel}>
                        <div className={`p-3`}>{children}</div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default RegisterLayout;
