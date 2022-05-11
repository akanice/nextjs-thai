import React, { useEffect, useState } from 'react';
import { FaUser, FaChalkboardTeacher, FaBookOpen } from 'react-icons/fa';
import Collapsible from 'react-collapsible';

const LeftColumnPC = () => {
    const renderMenuGuide = () => {
        return (
            <a href="#" className={`flex items-center mb-2`}>
                <div className={`w-6 h-6 rounded-full bg-gray-600 flex shrink-0 items-center justify-center overflow-hidden mr-2`}>
                    <FaChalkboardTeacher size={16} className={`text-white`} />
                </div>
                <span>Hướng dẫn</span>
            </a>
        );
    };

    return (
        <div className={`left-col h-screen absolute left-0 top-0 bottom-0`} style={{ width: '250px', backgroundImage: "url('/images/bg-left-col.png')", backgroundSize: 'cover' }}>
            <div className={`flex flex-col justify-between items-start h-full`}>
                <div className={`mt-6 mb-16 p-3`}>
                    <ul>
                        <li className={`mb-1`}>
                            <a href="#" className={`flex items-center mb-3`}>
                                <div className={`w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden mr-2`}>
                                    <FaUser size={16} className={`text-white`} />
                                </div>
                                <span>Danh sách phiên</span>
                            </a>
                        </li>
                        <li className={`mb-1`}>
                            <Collapsible trigger={renderMenuGuide()} easing={`ease`}>
                                <ul className={`ml-3`}>
                                    <li>
                                        <a href="#" className={`flex items-center mb-2`}>
                                            <div className={`w-6 h-6 rounded-full bg-green-600 flex shrink-0 items-center justify-center overflow-hidden mr-2`}>
                                                <FaBookOpen size={16} className={`text-white`} />
                                            </div>
                                            <span>Văn bản quy trình, quy định liên quan</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className={`flex items-center`}>
                                            <div className={`w-6 h-6 rounded-full bg-green-600 flex shrink-0 items-center justify-center overflow-hidden mr-2`}>
                                                <FaBookOpen size={16} className={`text-white`} />
                                            </div>
                                            <span>Hướng dẫn hậu kiểm</span>
                                        </a>
                                    </li>
                                </ul>
                            </Collapsible>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeftColumnPC;
