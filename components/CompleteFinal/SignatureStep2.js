import React, { useRef, useEffect, useState } from 'react';
import { Button, Modal, Box } from '@material-ui/core';
import UploadFile from './UploadFile';
import { AiFillCheckCircle } from 'react-icons/ai';

const SignatureStep2 = () => {
    const [openModal, setOpenModal] = useState(false);
    const openModalGuide = () => setOpenModal(true);
    const closeModalGuide = () => setOpenModal(false);
    const avatarRef = useRef();

    return (
        <>
            <div className={`upload-docs`}>
                <UploadFile
                    // defaultPicture={user.avatar}
                    ref={avatarRef}
                    className={`normal-case text-gray-600 text-xs`}
                />
                <div className={`flex justify-start items-center mt-6`}>
                    <div className={`text-green-500 mr-3`}>
                        <AiFillCheckCircle size={24} />
                    </div>
                    <div>
                        <div className={`text-green-500 text-lg font-bold`}>Tải hồ sơ lên thành công</div>
                        <div className={`text-gray-600 text-sm`}>Bấm vào &quot;Hoàn tất hồ sơ&quot; để hoàn thiện xác thực chữ ký số</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignatureStep2;
