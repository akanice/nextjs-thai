import React from 'react';
import RegisterLayout from '@components/Layout/RegisterLayout';
import CheckProfile from '@components/PostCheck/CheckProfile';

const _CheckProfile = ({ setting }) => {
    // Preview Page
    return (
        <RegisterLayout title="Duyệt hồ sơ" setting={setting}>
            <CheckProfile />
        </RegisterLayout>
    );
};

export default _CheckProfile;
