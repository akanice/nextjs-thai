import React from 'react';
import RegisterLayout from '@components/Layout/RegisterLayout';
import DocumentReader from '@components/PostCheck/DocumentReader';

const _Document = ({ setting }) => {
    // Preview Page
    return (
        <RegisterLayout title="Duyệt hồ sơ" setting={setting}>
            <DocumentReader />
        </RegisterLayout>
    );
};

export default _Document;
