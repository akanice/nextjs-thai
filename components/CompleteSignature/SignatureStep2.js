import React, { useRef, useEffect, useState } from 'react';
import { Button, Modal, Box } from '@material-ui/core';
import UploadFile from './UploadFile';
import { AiFillCheckCircle } from 'react-icons/ai';
import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router';

const SignatureStep2 = () => {
    const router = useRouter();
    const [openModal, setOpenModal] = useState(false);
    const openModalGuide = () => setOpenModal(true);
    const closeModalGuide = () => setOpenModal(false);
    const avatarRef = useRef();
    const nextPage = () => {
        router.push('/register/complete-final');
    };
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
                        <div className={`text-gray-600 text-sm`}>Bấm vào &apos;Hoàn tất hồ sơ&apos; để hoàn thiện xác thực chữ ký số</div>
                    </div>
                </div>
                <div className={`flex justify-start items-center mt-6`}>
                    <button onClick={nextPage} className="bg-second-color hover:text-yellow-500 text-black font-medium py-2 px-9 mt-3 rounded focus:outline-none focus:shadow-outline" type="button">
                        Tiếp tục
                    </button>
                </div>
            </div>
        </>
    );
};

export default SignatureStep2;
