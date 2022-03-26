import React from 'react';
import RegisterLayout from '/components/layout/RegisterLayout';
import Register from '/components/Register/';
import Home from '@components/Home';

const _Home = ({ setting }) => {
  return (
    <RegisterLayout title="Home" setting={setting}>
      <Home />
    </RegisterLayout>
  );
};

export default _Home;
