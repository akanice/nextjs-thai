import React from 'react';
import MainLayout from '@components/Layout/MainLayout';
import ReportControl from '@components/Dashboard/Report/reportControl'

const _Home = ({ setting }) => {
    return (
        <MainLayout title="Home" setting={setting}>
            <ReportControl />
        </MainLayout>
    );
};

export default _Home;