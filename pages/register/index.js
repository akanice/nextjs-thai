import React from 'react';
import RegisterLayout from '/components/layout/RegisterLayout';
import Register from '@components/Register';
import '/'

const _Register = ({ setting }) => {
  return (
    <RegisterLayout title="Register" setting={setting}>
      <Register />
    </RegisterLayout>
  );
};

export default _Register;
