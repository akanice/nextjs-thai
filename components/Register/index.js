import React, { useEffect, useState } from 'react';
import { Button, Modal, Box } from '@material-ui/core';
import { FaExclamationCircle } from 'react-icons/fa';
import ProgressStepper from '@components/Elements/ProgressStepper';
import { useRouter } from 'next/router';
import FileUpload from '@components/Upload/FileUpload';
import { MdCheckCircleOutline } from 'react-icons/md';
import UploadButton from '@components/Common/UploadButton';
import ModalSignError from '@components/Common/Modal/ModalSignError';
import ModalImageError from '@components/Common/Modal/ModalImageError';
import ModalInfoError from '@components/Common/Modal/ModalInfoError';
import ModalIdentityError from '@components/Common/Modal/ModalIdentityError';

let ps;
const Register = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '1px solid #ccc',
        boxShadow: 24
    };
    const [gpdkkd, setGpdkkd] = useState({});
    const [gttt, setGttt] = useState({});
    const [bonhiem, setBonhiem] = useState({});
    const [gtttktt, setGtttktt] = useState({});
    const [match_1, setMatch1] = useState(null);
    const [match_2, setMatch2] = useState(null);
    const [match_3, setMatch3] = useState(null);

    const sendDataToParent = (data, type) => {
        if (type == 'gpdkkd') {
            setGpdkkd(data);
        }
        if (type == 'GTTT') {
            setGttt(data);
        }
        if (type == 'bonhiem_KTT') {
            setBonhiem(data);
        }
        if (type == 'GTTT_ktt') {
            setGtttktt(data);
        }
    };
    useEffect(() => {
        if (gpdkkd != null && bonhiem != null) {
            if (gpdkkd.company_name == bonhiem.company_name) {
                setMatch1(true);
            } else {
                setMatch1(false);
            }
        }
        if (gpdkkd != null && gttt != null) {
            if (gpdkkd.company_name == bonhiem.company_name) {
                setMatch2(true);
            } else {
                setMatch2(false);
            }
        }
        if (bonhiem.web_data.name != null && gtttktt.name != null) {
            if (gpdkkd.company_name == bonhiem.company_name) {
                setMatch3(true);
            } else {
                setMatch3(false);
            }
        }
    }, [gpdkkd, gttt, bonhiem, gtttktt]);

    const [openModal,setOpenModal] = useState(false);
    const openModalGuide = () => setOpenModal(true);
    const closeModalGuide = () => setOpenModal(false);

    const [openModal2,setOpenModal2] = useState(false);
    const _openModal2 = () => setOpenModal2(true);
    const _closeModal2 = () => setOpenModal2(false);

    const [openModal3,setOpenModal3] = useState(false);
    const _openModal3 = () => setOpenModal3(true);
    const _closeModal3 = () => setOpenModal3(false);

    const [openModal4,setOpenModal4] = useState(false);
    const _openModal4 = () => setOpenModal4(true);
    const _closeModal4 = () => setOpenModal4(false);

    const nextPage = (e) => {
        router.push('/register/compare');
    };

    return (
        <div className={`p-6`}>
            <div className={``}>
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
                <div className="container mx-auto py-6">
                    <h2 className={`text-center text-xl font-bold mb-9 text-link`}>CHỤP/TẢI HỒ SƠ KHÁCH HÀNG TỔ CHỨC</h2>
                    <ProgressStepper page={2} />
                    <p className={`text-center`}>Quý khách vui lòng tải/ chụp đầy đủ hồ sơ Tổ chức theo danh mục bên dưới. </p>
                    <p className={`text-center text-sm text-red-500 mb-9`}>Lưu ý: Toàn bộ hồ sơ cần phải được xác nhận bằng chữ ký số khách hàng tổ chức trước khi tải lên.</p>
                    <div className={`box-wrapper p-6 border border-gray-200 rounded-2xl mb-6`}>
                        <div className={`flex justify-start mb-9`}>
                            {/* Row 1 */}
                            <div className={`w-9 h-9 leading-9 rounded bg-yellow-400 font-bold text-2xl text-center mr-24`}>1</div>
                            <p>
                                <span className={`text-red-400`}>*</span>
                            </p>
                            <p className={`text-right mr-3 w-96`}>
                                <span className={``}>
                                    Đăng ký kinh doanh/
                                    <br />
                                    Giấy chứng nhận đăng ký doanh nghiệp1:{' '}
                                </span>
                            </p>
                            {/* Upload button */}
                            <div className={`flex-1`}>
                                <UploadButton name={`upload_1`} label={`Chọn tải hồ sơ`} mess={`Vui lòng tải hồ sơ đã  xác nhận bằng Chữ ký số KHTC`} type={'gpdkkd'} sendDataToParent={sendDataToParent} />
                            </div>
                        </div>

                        <div className={`flex justify-start mb-9`}>
                            {/* Row 2 */}
                            <div className={`w-9 h-9 leading-9 rounded bg-yellow-400 font-bold text-2xl text-center mr-24`}>2</div>
                            <p>
                                <span className={`text-red-400`}>*</span>
                            </p>
                            <p className={`text-right mr-3 w-96`}>
                                <span className={``}>Giấy chứng nhận Mã số thuế:</span>
                            </p>
                            {/* Upload button */}
                            <div className={`flex-1`}>
                                <UploadButton name={`upload_2`} label={`Chọn tải hồ sơ`} mess={`Áp dụng với doanh nghiệp thành lập trước ngày 01/07/2015`} type={'giay_dkmst'} sendDataToParent={sendDataToParent} />
                            </div>
                        </div>

                        <div className={`flex justify-start mb-9`}>
                            {/* Row 3 */}
                            <div className={`w-9 h-9 leading-9 rounded bg-yellow-400 font-bold text-2xl text-center mr-24`}>3</div>
                            <p>
                                <span className={`text-red-400`}>*</span>
                            </p>
                            <p className={`text-right mr-3 w-96`}>
                                <span className={``}>Giấy tờ tùy thân của người đại diện:</span>
                            </p>
                            {/* Upload button */}
                            <div className={`flex-1`}>
                                <UploadButton name={`upload_3`} label={`Chọn tải hồ sơ`} mess={`CMND/CCCD/HC của người đại diện theo pháp luật `} type={'GTTT'} sendDataToParent={sendDataToParent} />
                            </div>
                        </div>

                        <div className={`flex justify-start mb-9`}>
                            {/* Row 4 */}
                            <div className={`w-9 h-9 leading-9 rounded bg-yellow-400 font-bold text-2xl text-center mr-24`}>4</div>
                            <p>
                                <span className={`text-red-400`}>*</span>
                            </p>
                            <p className={`text-right mr-3 w-96`}>
                                <span className={``}>Quyết định bổ nhiệm kế toán trưởng: </span>
                            </p>
                            {/* Upload button */}
                            <div className={`flex-1`}>
                                <UploadButton name={`upload_4`} label={`Chọn tải hồ sơ`} mess={`Quyết định bổ nhiệm kế toán trưởng/Người phụ trách kế toán`} type={'bonhiem_KTT'} sendDataToParent={sendDataToParent} />
                            </div>
                        </div>

                        <div className={`flex justify-start mb-9`}>
                            {/* Row 5 */}
                            <div className={`w-9 h-9 leading-9 rounded bg-yellow-400 font-bold text-2xl text-center mr-24`}>5</div>
                            <p>
                                <span className={`text-red-400`}>*</span>
                            </p>
                            <p className={`text-right mr-3 w-96`}>
                                <span className={``}>Giấy tờ tùy thân của kế toán trưởng: </span>
                            </p>
                            {/* Upload button */}
                            <div className={`flex-1`}>
                                <UploadButton name={`upload_5`} label={`Chọn tải hồ sơ`} mess={`CMND/CCCD/HC của kế toán trưởng/ Người phụ trách kế toán`} type={'GTTT_ktt'} sendDataToParent={sendDataToParent} />
                            </div>
                        </div>
                    </div>
                    <div className={`text-center text-gray-300 italic font-normal`}>
                        Lưu ý: Ảnh chụp/tải lên cần rõ nét, đầy đủ thông tin trên hồ sơ.
                        <br />
                        Định dạng cho phép: png,pdf,jpg,rar,zip. Kích thước tối đa: 5 MB.
                    </div>
                    <div className={`p-9 flex justify-between`}>
                        <button className={`py-2 px-9 bg-gray-300 text-black rounded w-52`}>Huỷ</button>
                        <button className={`py-2 px-9 bg-yellow-400 text-black rounded w-52`}>Đối chiếu hồ sơ</button>
                    </div>
                </div>
            </div>
            
            {/* Modals 1 */}
            <a href='#' className={`text-link underline`} onClick={openModalGuide}>Lỗi chữ ký</a>
            <Modal
                open={openModal}
                onClose={closeModalGuide}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={`px-16 py-9 custom-modal`}><ModalSignError /></Box> 
            </Modal>
            <br />
            {/* Modals 2 */}
            <a href='#' className={`text-link underline`} onClick={_openModal2}>Lỗi hình ảnh</a>
            <Modal
                open={openModal2}
                onClose={_closeModal2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={`px-16 py-9 custom-modal`}><ModalImageError /></Box> 
            </Modal>  
            <br />
            {/* Modals 3 */}
            <a href='#' className={`text-link underline`} onClick={_openModal3}>Lỗi không khớp thông tin</a>
            <Modal
                open={openModal3}
                onClose={_closeModal3}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={`px-16 py-9 custom-modal`}><ModalInfoError /></Box> 
            </Modal>
            <br />
            {/* Modals 4 */}
            <a href='#' className={`text-link underline`} onClick={_openModal4}>Lỗi định danh khách hàng thất bại</a>
            <Modal
                open={openModal4}
                onClose={_closeModal4}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={`px-16 py-9 custom-modal`}><ModalIdentityError /></Box> 
            </Modal>
        </div>
    );
};

export default Register;
