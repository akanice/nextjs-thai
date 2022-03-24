import React from 'react';
import RegisterLayout from '/components/layout/RegisterLayout';
import RegisterStep2 from '../register/registerStep2';
import '/'

const _Home = ({ setting }) => {
  return (
    <RegisterLayout title="Register" setting={setting}>
      <RegisterStep2 />
    </RegisterLayout>
  );
};

export default _Home;
