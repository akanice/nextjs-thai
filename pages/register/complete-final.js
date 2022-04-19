import React from 'react';
import MainLayout from '@components/Layout/MainLayout';
import CompleteFinal from '@components/CompleteFinal';

const _CompleteFinal = ({ setting }) => {
    return (
        <MainLayout title="Hoàn thiện hồ sơ" setting={setting}>
            <CompleteFinal />
        </MainLayout>
    );
};

export default _CompleteFinal;
