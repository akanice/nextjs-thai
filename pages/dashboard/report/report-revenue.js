import React from 'react';
import MainLayout from '@components/Layout/MainLayout';
import ReportRevenue from '@components/Dashboard/Report/reportRevenue'

const _Home = ({ setting }) => {
    return (
        <MainLayout title="Home" setting={setting}>
            <ReportRevenue />
        </MainLayout>
    );
};

export default _Home;