import React, { useState } from 'react';

const ToggleButton = ({className,defaultTab}) => {
    const [tab,setTab] = useState(defaultTab);
    const active = `bg-white shadow`;

    return (
        <>
            <div className={`tabs flex justify-between p-0 border border-gray-100 bg-gray-100 rounded-full text-center ${className}`}>
                <div className={`w-1/2 py-1 px-3 rounded-full transition-all ease-in-out cursor-pointer ` + (tab===1 ? active: ``)}  onClick={() => setTab(1)}>Tuần</div>
                <div className={`w-1/2 py-1 px-3 rounded-full transition-all ease-in-out cursor-pointer ` + (tab===2 ? active: ``)} onClick={() => setTab(2)}>Tháng</div>
            </div>
        </>
    );
    
};

export default ToggleButton;