import React from 'react';

const SectionHeading = ({ title, subTitle,className}) => {

    return (
        <div className={`${className}`}>
            <h2 className='text-2xl mb-5 md:mb-1 font-semibold text-center tracking-tighter'>{title}</h2>
            <h3 className='text-base text-second-color opacity-70 mb-5 font-normal text-center md:block'>{subTitle}</h3>
        </div>
    );
};
export default SectionHeading;
