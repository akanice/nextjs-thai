import Header from '/components/Header';
import Head from '../Common/Head';
import Footer from '/components/Footer';
import React from 'react';

const RegisterLayout = ({ children, title }) => {

  return (
    <>
      <div className={`bg-main-bg`}>
        <Head title={`Bank - ${title}`} />
        <Header className={`mb-12`} />
        <div className={`flex justify-center`}>
          <div className={`container`}>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterLayout;
