import React, { useEffect, useState } from 'react';
import { Button, Modal, Box } from '@material-ui/core';
import { FaExclamationCircle } from 'react-icons/fa';
import ProgressStepper from '@components/Elements/ProgressStepper';
import { useRouter } from 'next/router';
import {FaCaretDown} from 'react-icons/fa';
import { MdCheckCircleOutline } from 'react-icons/md';
import FormUpload1 from '@components/Register/Step2/FormUpload1';
import FormUpload2 from '@components/Register/Step2/FormUpload2';
import FormUpload3 from '@components/Register/Step2/FormUpload3';

let ps;

const RegisterStep2 = () => {
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
    const [openModal, setOpenModal] = useState(false);
    const openModalGuide = () => setOpenModal(true);
    const closeModalGuide = () => setOpenModal(false);

    const [tab, setTab] = useState(`step1`); 

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
        // if (gpdkkd != null && bonhiem != null) {
        //     if (gpdkkd.company_name == bonhiem.company_name) {
        //         setMatch1(true);
        //     } else {
        //         setMatch1(false);
        //     }
        // }
        // if (gpdkkd != null && gttt != null) {
        //     if (gpdkkd.company_name == bonhiem.company_name) {
        //         setMatch2(true);
        //     } else {
        //         setMatch2(false);
        //     }
        // }
        // if (bonhiem.web_data.name != null && gtttktt.name != null) {
        //     if (gpdkkd.company_name == bonhiem.company_name) {
        //         setMatch3(true);
        //     } else {
        //         setMatch3(false);
        //     }
        // }
    }, [gpdkkd, gttt, bonhiem, gtttktt]);
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
                <div className="container mx-auto py-6" style={{maxWidth: "900px"}}>
                    <ProgressStepper page={2} />
                    <div className={`flex justify-between`}>
                        <p className={`text-center text-xl font-bold text-gray-500`}>Quý khách vui lòng tải/ chụp đầy đủ hồ sơ Tổ chức theo danh mục bên dưới. </p>
                        <a href="#" className={`text-link font-bold underline`} onClick={openModalGuide}>
                            Hướng dẫn
                        </a>
                    </div>
                    <p className={`text-sm text-red-500 mb-9`}>Lưu ý: Toàn bộ hồ sơ cần phải được xác nhận bằng chữ ký số khách hàng tổ chức trước khi tải lên.</p>
                   
                    {/* Main Content */}
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item border border-gray-200">
                            <div className="accordion-header mb-0 flex" id="headingOne">
                                <div className={`h-12 w-12 rounded-full bg-main-color mr-3 shrink-0 flex justify-center items-center`}>
                                    <span className={`` + ((tab==`step1`) ? 'w-4 h-4 bg-white rounded-full' : '')}></span>
                                </div>
                                <button className={`relative flex items-center w-full py-3 px-5 text-base text-white flex justify-between items-center bg-main-color border-0 rounded-md transition focus:outline-none`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <span>1. Giấy chứng nhận đăng kí kinh doanh/đăng kí doanh nghiệp</span>
                                    <span><FaCaretDown size={16}/></span>
                                </button>
                            </div>
                            <div className={`flex`}>
                                <div className={`w-12 flex shrink-0 justify-center items-center mr-3`}>
                                    <div className={`w-0.5 bg-main-color h-full`}></div>
                                </div>
                                <div id="collapseOne" className={`ml-9 accordion-collapse collapse ` + ((tab==`step1`) ? 'show' : '')} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <FormUpload1 />
                                </div>
                            </div>
                        </div>{/* Tab 1 */}

                        <div className="accordion-item border border-gray-200">
                            <div className="accordion-header flex mb-0" id="headingTwo">
                                <div className={`h-12 w-12 rounded-full bg-main-color mr-3 shrink-0 flex justify-center items-center`}>
                                    <span className={`` + ((tab==`step2`) ? 'w-4 h-4 bg-white rounded-full' : '')}></span>
                                </div>
                                <button className="relative flex items-center w-full py-3 px-5 text-base text-white flex justify-between items-center bg-main-color border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <span>2. Giấy chứng nhận mã số thuế  | *Chỉ áp dụng với DN đăng kí trước 01/07/2015</span>
                                    <span><FaCaretDown size={16}/></span>
                                </button>
                            </div>
                            <div className={`flex`}>
                                <div className={`w-12 flex shrink-0 justify-center items-center mr-3`}>
                                    <div className={`w-0.5 bg-main-color h-full`}></div>
                                </div>
                                <div id="collapseTwo" className={`accordion-collapse collapse ` + ((tab==`step2`) ? 'show' : '')} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <FormUpload2 />
                                </div>
                            </div>
                        </div>{/* Tab 2 */}

                        <div className="accordion-item border border-gray-200">
                            <div className="accordion-header flex mb-0" id="headingThree">
                                <div className={`h-12 w-12 rounded-full bg-main-color mr-3 shrink-0 flex justify-center items-center`}>
                                    <span className={`` + ((tab==`step3`) ? 'w-4 h-4 bg-white rounded-full' : '')}></span>
                                </div>
                                <button className="relative flex items-center w-full py-3 px-5 text-base text-white flex justify-between items-center bg-main-color border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <span>3. Giấy tờ tuỳ thân của người đại diện</span>
                                    <span><FaCaretDown size={16}/></span>
                                </button>
                            </div>
                            <div className={`flex`}>
                                <div className={`w-12 flex shrink-0 justify-center items-center mr-3`}>
                                    <div className={`w-0.5 h-full`}></div>
                                </div>
                                <div id="collapseThree" className={`accordion-collapse collapse show` + ((tab==`step3`) ? 'show' : '')} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <FormUpload3 />
                                </div>
                            </div>
                        </div>{/* Tab 3 */}
                    </div>
                    {/* End Main Content */}


                </div>
            </div>
        </div>
    );
};

export default RegisterStep2;
