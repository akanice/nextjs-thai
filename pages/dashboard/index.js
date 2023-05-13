import React from 'react';
import MainLayout from '@components/Layout/MainLayout';
import Dashboard from '@components/Dashboard'

const _Home = ({ setting }) => {
    return (
        <MainLayout title="Home" setting={setting}>
            <Dashboard />
        </MainLayout>
    );
};

export default _Home;