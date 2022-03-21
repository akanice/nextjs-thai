import React from 'react';
import RegisterLayout from '/components/layout/RegisterLayout';
import Register from '/components/register/';

const _Home = ({ setting }) => {
  return (
    <RegisterLayout title="Register" setting={setting}>
      <Register />
    </RegisterLayout>
  );
};

export default _Home;
