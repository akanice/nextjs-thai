import React, { useEffect, useState } from 'react';
import EKYCInfoAccData from './EKYCInfoAccData';
import EKYCInfoPC from './EKYCInfoPC';

const EKYCInfo = () => {

    return (
        <>
            <div className={`flex justify-between mx-1`}>
                <div className={`w-3/4 mr-6`}>
                    <EKYCInfoPC />
                </div>
                <div className={`w-1/4`}>
                    <EKYCInfoAccData />
                </div>
            </div>
        </>
    );
};

export default EKYCInfo;
