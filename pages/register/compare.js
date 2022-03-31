import React, { useLocation } from 'react';
import RegisterLayout from '@components/Layout/RegisterLayout';
import RegisterCompare from '@components/Register/RegisterCompare';

const _RegisterCompare = ({ setting }) => {
    return (
        <RegisterLayout title="Register" setting={setting}>
            <RegisterCompare />
        </RegisterLayout>
    );
};

export default _RegisterCompare;
