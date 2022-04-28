import React from 'react';
import MainLayout from '@components/Layout/MainLayout';
import Home from '@components/Home';

const _Home = ({ setting }) => {
    return (
        <MainLayout title="Home" setting={setting}>
            <Home />
        </MainLayout>
    );
};

export default _Home;