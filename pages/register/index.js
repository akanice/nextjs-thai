import React from 'react';
import RegisterLayout from '@components/Layout/RegisterLayout';
import Register from '@components/Register';

const _Register = ({ setting }) => {
    return (
        <RegisterLayout title="Register" setting={setting}>
            <Register />
        </RegisterLayout>
    );
};

export default _Register;
