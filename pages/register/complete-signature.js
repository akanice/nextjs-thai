import React from 'react';
import MainLayout from '@components/Layout/MainLayout';
import CompleteSignature from '@components/CompleteSignature';

const _CompleteSignature = ({ setting }) => {
    return (
        <MainLayout title="Hoàn thiện hồ sơ" setting={setting}>
            <CompleteSignature />
        </MainLayout>
    );
};

export default _CompleteSignature;
