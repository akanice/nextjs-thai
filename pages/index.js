import React from 'react';
import RegisterLayout from '@components/Layout/RegisterLayout';
import Home from '@components/Home';

const _Home = ({ setting }) => {
    return (
        <RegisterLayout title="Login" setting={setting}>
            <Home />
        </RegisterLayout>
    );
};

export default _Home;