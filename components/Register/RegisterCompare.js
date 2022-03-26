import React, { useEffect, useState } from 'react';
import ProgressStepper from '../Elements/ProgressStepper';
import { useRouter } from 'next/router';
import UploadButton from '@components/Common/UploadButton';
import FormCompare from '@components/Common/FormCompare';
import FormToCompare from '@components/Common/FormToCompare';
import FormAccountant from '@components/Common/FormAccountant';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid #ccc',
    boxShadow: 24
};

const RegisterCompare = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openModal, setOpenModal] = useState(false);
    const openModalGuide = () => setOpenModal(true);
    const closeModalGuide = () => setOpenModal(false);
    const nextPage = (e) => {
        router.push('/register');
    };

    return (
        <div className={`p-6`}>
            <div className={``}>
                <div className="container mx-auto py-6">
                    <h2 className={`text-center text-xl font-bold mb-9 text-link`}>CHỤP/TẢI HỒ SƠ KHÁCH HÀNG TỔ CHỨC</h2>
                    <ProgressStepper page={2} />
                    <p className={`text-center mb-9`}>Vui lòng hoàn thiện các thông tin ở phần màu đỏ bên dưới:</p>
                    
                    <div className={`grid grid-cols-2 gap-4`}>
                        <div className={`box-wrapper p-6 border border-gray-200 rounded-2xl mb-6`}>
                            <h4 className={`text-center font-bold text-link mb-3`}>Thông tin về tổ chức</h4>
                            <FormToCompare />
                        </div>
                        <div className={`box-wrapper p-6 border border-gray-200 rounded-2xl mb-6`}>
                            <h4 className={`text-center font-bold text-link mb-3`}>Thông tin về người đại diện hợp pháp của tổ chức</h4>
                            <FormCompare />
                            <div className={`divider flex mb-6`}>
                                <div className={`h-2 w-2/3 bg-amber-600`}></div>
                                <div className={`h-2 w-1/3 bg-blue-800`}></div>
                            </div>
                            <h4 className={`text-center font-bold text-link mb-3`}>Thông tin về Kế toán trưởng/ Người phụ trách kế toán</h4>
                            <FormAccountant />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default RegisterCompare;
