import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Modal, Box } from '@material-ui/core';
import ProgressStepper from '@components/Elements/ProgressStepper';
import ModalGuideSample from '@components/Common/Modal/ModalGuideSample';
import ModalCodeExist from '@components/Common/Modal/ModalCodeExist';

const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const openModalGuide = () => setOpenModal(true);
    const closeModalGuide = () => setOpenModal(false);

    const [openModal2, setOpenModal2] = useState(false);
    const openModalGuide2 = () => setOpenModal2(true);
    const closeModalGuide2 = () => setOpenModal2(false);

    const router = useRouter();
    const nextPage = () => {
        router.push('/register/complete-brief');
    };
    return (
        <div className={``}>
            <div className="mx-auto">
                <ProgressStepper page={1} />

                <div className={`border-b border-dashed border-gray-300 mb-9`}></div>

                <div className={`relative flex justify-center`}>
                    <div className={`flex flex-col justify-center`}>
                        <h2 className={`text-3xl font-bold text-black text-center`}>Đăng ký thông tin doanh nghiệp tại đây</h2>
                        <form className="px-6 pt-6 mb-4 w-128">
                            <div className={`text-sm mb-3 text-black font-bold`}>Loại hình doanh nghiệp</div>
                            <div className="mb-6">
                                <select className="form-select appearance-none block w-full py-2 px-3 text-normal font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none" aria-label="Default select example">
                                    <option selected>Chọn loại hình tổ chức</option>
                                    <option value={1}>Doanh nghiệp tư nhân</option>
                                    <option value={2}>Công ty TNHH 01 thành viên</option>
                                    <option value={3}>Công ty cổ phần</option>
                                </select>
                            </div>
                            <div className={`text-sm mb-3 text-black font-bold`}>Mã số doanh nghiệp</div>
                            <div className="mb-4">
                                <input className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nhập số giấy tờ pháp lý của tổ chức" />
                            </div>
                        </form>
                    </div>
                </div>

                <div className={`max-w-2xl mx-auto`}>
                    <div className={`text-sm mb-3 text-center text-black`}>Hồ sơ cần chuẩn bị</div>
                    <ol className={`bg-gray-100 p-6 mb-6 border-2 border-dotted border-sky-300 rounded-lg`}>
                        <li>1. Giấy chứng nhận đăng ký doanh nghiệp <span className={`text-link underline cursor-pointer`} onClick={openModalGuide}>(Mẫu tham khảo)</span></li>
                        <li>2. Giấy tờ tuỳ thân của người đại diện theo pháp luật <span className={`text-link underline cursor-pointer`} onClick={openModalGuide}>(Mẫu tham khảo)</span></li>
                        <li>3. Quyết định bổ nhiệm kế toán trưởng/người phụ trách kế toán <span className={`text-link underline cursor-pointer`} onClick={openModalGuide}>(Mẫu tham khảo)</span></li>
                        <li>4. Giấy tờ tuỳ thân của kế toán trưởng/người phụ trách kế toán <span className={`text-link underline cursor-pointer`} onClick={openModalGuide}>(Mẫu tham khảo)</span></li>
                        <li>5. Giấy đăng ký mã số thuế (áp dụng với doanh nghiệp thành lập trước ngày 01/07/2015)</li>
                    </ol>
                </div>

                <div className="flex items-center justify-center">
                    <button onClick={nextPage} className="bg-second-color hover:text-white text-black font-medium py-2 px-12 rounded focus:outline-none focus:shadow-outline" type="button">
                        Tiếp tục
                    </button>
                </div>

                {/* Modal Mẫu tham khảo (duplicate this) */}
                <Modal open={openModal} onClose={closeModalGuide} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box className={`px-16 py-9 custom-modal`}>
                        <ModalGuideSample />
                    </Box>
                </Modal>

                <button onClick={openModalGuide2}>Modal Mã số DN đã tồn tại</button>
                {/* Modal Mã số DN đã tồn tại */}
                <Modal open={openModal2} onClose={closeModalGuide2} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box className={`px-16 py-9 custom-modal`}>
                        <ModalCodeExist />
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default Home;
