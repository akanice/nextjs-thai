import React from 'react';
import RegisterLayout from '/components/layout/RegisterLayout';
import RegisterCompare from '@components/Register/RegisterCompare';
import '/'

const _RegisterCompare = ({ setting }) => {
  return (
    <RegisterLayout title="Register" setting={setting}>
      <RegisterCompare />
    </RegisterLayout>
  );
};

export default _RegisterCompare;