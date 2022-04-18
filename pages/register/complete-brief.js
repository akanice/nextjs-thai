import React from 'react';
import MainLayout from '@components/Layout/MainLayout';
import CompleteBrief from '@components/CompleteBrief';

const _CompleteBrief = ({ setting }) => {
    return (
        <MainLayout title="Hoàn thiện hồ sơ" setting={setting}>
            <CompleteBrief />
        </MainLayout>
    );
};

export default _CompleteBrief;
