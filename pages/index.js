import React from 'react';
import RegisterLayout from '/components/layout/RegisterLayout';
import Register from '/components/Register/';

const _Home = ({ setting }) => {
  return (
    <RegisterLayout title="Home" setting={setting}>
      <Register />
    </RegisterLayout>
  );
};

export default _Home;
