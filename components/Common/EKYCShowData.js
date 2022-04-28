import React from 'react';

const EKYCShowData = ({ label, value, className }) => {

    return (
        <div className={className}>
            <div className={`text-sm text-gray-500`}>
                {label}
            </div>
            <div className={`text-sm font-bold text-black uppercase`}>
                {value}
            </div>
        </div>
    );
};

export default EKYCShowData;
