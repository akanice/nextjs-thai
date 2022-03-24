import React, { useEffect, useState } from 'react';
import { Button, Modal, Box } from '@material-ui/core';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { MdCheckCircleOutline } from 'react-icons/md';
import { FaExclamationCircle } from 'react-icons/fa';
import ProgressStepper from '../Elements/ProgressStepper';
import { Router } from '@mui/icons-material';
import { useRouter } from 'next/router';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid #ccc',
    boxShadow: 24
};

const Register = () => {
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
                    <ProgressStepper page={1} />

                    <div className={`relative border border-gray-600 rounded p-6 mx-36 flex justify-center`}>
                        <div className={`absolute top-3 right-3`}>
                            <a href="#" className={`text-link underline`} onClick={openModalGuide}>
                                Hướng dẫn
                            </a>
                            <Modal open={openModal} onClose={closeModalGuide} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                <Box sx={style} className={`px-36 py-9`}>
                                    <div className={`flex flex-col justify-center`}>
                                        <h3 className={`text-center font-bold text-black text-2xl mb-3`}>HƯỚNG DẪN CHỤP/TẢI HỒ SƠ TỔ CHỨC</h3>
                                        <p className={`text-xl text-gray-600 font-bold mb-3`}>Danh mục hồ sơ cần chuẩn bị:</p>
                                        <ul className={`text-left`}>
                                            <li className={`mb-2 flex items-center`}>
                                                <MdCheckCircleOutline size="16" className={`text-link mr-3`} />
                                                Giấy chứng nhận đăng ký doanh nghiệp.
                                            </li>
                                            <li className={`mb-2 flex items-center`}>
                                                <MdCheckCircleOutline size="16" className={`text-link mr-3`} />
                                                Giấy đăng ký mã số thuế (chỉ áp dụng với doanh nghiệp thành lập trước ngày 01/07/2015).
                                            </li>
                                            <li className={`mb-2 flex items-center`}>
                                                <MdCheckCircleOutline size="16" className={`text-link mr-3`} />
                                                Giấy tờ tùy thân của người đại diện theo pháp luật.
                                            </li>
                                            <li className={`mb-2 flex items-center`}>
                                                <MdCheckCircleOutline size="16" className={`text-link mr-3`} />
                                                Quyết định bổ nhiệm kế toán trưởng/người phụ trách kế toán.
                                            </li>
                                            <li className={`mb-2 flex items-center`}>
                                                <MdCheckCircleOutline size="16" className={`text-link mr-3`} />
                                                Giấy tờ tùy thân của Kế toán trưởng/người phụ trách kế toán.
                                            </li>
                                        </ul>
                                        <p className={`text-xl text-gray-600 font-bold mb-3 mt-3`}>Hướng dẫn chụp/tải hồ sơ:</p>
                                        <ul className={`text-left`}>
                                            <li className={`mb-2 flex items-center`}>
                                                <MdCheckCircleOutline size="16" className={`text-link mr-3`} />
                                                Hồ sơ phải dùng bản gốc, không scan và photocopy.
                                            </li>
                                            <li className={`mb-2 flex items-center`}>
                                                <MdCheckCircleOutline size="16" className={`text-link mr-3`} />
                                                Ảnh chụp rõ ràng thông tin, đủ góc cạnh, không bị lóa mờ.
                                            </li>
                                        </ul>
                                        <p className={`text-xl text-red-500 flex items-center font-bold mb-3 mt-3`}>
                                            <FaExclamationCircle size="16" className={`mr-2`} /> Lưu ý
                                        </p>
                                        <p className={`text-sm text-red-500`}>Mọi thông tin làm giả giấy tờ đều là vi phạm pháp luật, khách hàng chịu hoàn toàn trách nhiệm trước pháp luật về các thông tin đã cung cấp.</p>
                                        <p className={`text-sm text-red-500`}>Lưu ý: Toàn bộ hồ sơ cần phải được xác nhận bằng chữ ký số khách hàng tổ chức trước khi tải lên.</p>
                                    </div>
                                </Box>
                            </Modal>
                        </div>
                        <div className={`flex-justify-center`}>
                            <h2 className={`text-xl text-center`}>Nhập thông tin doanh nghiệp của quý khách tại đây</h2>
                            <form className="px-8 pt-6 pb-8 mb-4 w-128">
                                <div className="mb-4">
                                    <input className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nhập số giấy tờ pháp lý của tổ chức" />
                                </div>
                                <div className={`text-sm mb-3 text-gray-400`}>*Số giấy tờ pháp lý chính là mã số đăng kí doanh nghiệp của tổ chức</div>
                                <div className="mb-6">
                                    <select className="form-select appearance-none block w-full py-3 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border  border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                        <option selected>Chọn loại hình tổ chức</option>
                                        <option value={1}>Doanh nghiệp tư nhân</option>
                                        <option value={2}>Công ty TNHH 01 thành viên</option>
                                        <option value={3}>Công ty cổ phần</option>
                                    </select>
                                </div>
                                <div className="flex items-center justify-center">
                                    <button onClick={nextPage} className="bg-second-color hover:text-yellow-500 text-black font-medium py-2 px-6 rounded focus:outline-none focus:shadow-outline" type="button">
                                        Tiếp tục
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <Button onClick={handleOpen}>Open modal</Button>
                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={style} className={`px-36 py-9`}>
                            <div className={`flex flex-col items-center justify-center`}>
                                <h3 className={`text-center font-bold text-black text-2xl mb-3`}>Số giấy tờ pháp lý đã tồn tại</h3>
                                <p className={`text-sm text-gray-500 mb-3`}>Quý khách vui lòng kiểm tra thông tin và lựa chọn theo hướng dẫn dưới đây.</p>
                                <ol className={`text-left list-disc`}>
                                    <li className={`mb-2`}>
                                        Số giấy tờ pháp lý đã tồn tại: <span className={`text-link font-medium`}>0313449404583</span>
                                    </li>
                                    <li className={`mb-2`}>
                                        Tên Tổ chức: <span className={`text-link font-medium`}>Công ty cổ phần ABC</span>
                                    </li>
                                    <li className={`mb-2`}>
                                        Định danh tại: <span className={`text-link font-medium`}>Chi nhánh PVCombank Hàng Bông</span>
                                    </li>
                                    <li className={`mb-2 list-none`}>
                                        <FormGroup>
                                            <FormControlLabel disableTypography={true} control={<Checkbox defaultChecked size="small" />} label="Mở thêm tài khoản online" className={`text-link`} />
                                        </FormGroup>
                                    </li>
                                </ol>
                            </div>
                        </Box>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Register;
