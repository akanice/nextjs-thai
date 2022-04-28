import React from 'react';
import RegisterLayout from '@components/Layout/RegisterLayout';
import PostCheck from '@components/PostCheck';

const _PostCheck = ({ setting }) => {
    return (
        <RegisterLayout title="Danh sách phiên" setting={setting}>
            <PostCheck />
        </RegisterLayout>
    );
};

export default _PostCheck;
