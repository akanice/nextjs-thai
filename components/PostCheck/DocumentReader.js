import React, { useEffect, useState } from 'react';

const DocumentReader = ({id}) => {
    const document = '/images/sample_document.jpg';

    return (
        <>
            <div className={`p-3 border border-gray-300`}>
                <img src={document} className={`w-full overflow-hidden`}/>
            </div>

            <div className={`h-24`}></div>
        </>
    );
};

export default DocumentReader;
