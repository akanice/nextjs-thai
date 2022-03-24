import React, { useEffect, useState } from 'react';
import { Button, Modal, Box } from '@material-ui/core';
import { FaExclamationCircle } from 'react-icons/fa';
import ProgressStepper from '@components/Elements/ProgressStepper';
import { useRouter } from 'next/router';
import FileUpload from '@components/Upload/FileUpload';
import UploadButton from '@components/Common/UploadButton';

let ps;
const RegisterStep2 = () => {
    
    return (
        <div className={`p-6`}>
            <div className={``}>
                <div className="container mx-auto py-6">
                    <h2 className={`text-center text-xl font-bold mb-9 text-link`}>CHỤP/TẢI HỒ SƠ KHÁCH HÀNG TỔ CHỨC</h2>
                    <ProgressStepper page={2} />
                    <p className={`text-center`}>Quý khách vui lòng tải/ chụp đầy đủ hồ sơ Tổ chức theo danh mục bên dưới. </p>
                    <p className={`text-center text-sm text-red-500 mb-9`}>Lưu ý: Toàn bộ hồ sơ cần phải được xác nhận bằng chữ ký số khách hàng tổ chức trước khi tải lên.</p>
                    <div className={`box-wrapper p-6 border border-gray-200 rounded-2xl mb-6`}>
                        <div className={`flex justify-start mb-9`}>{/* Row 1 */}
                            <div className={`w-9 h-9 leading-9 rounded bg-yellow-400 font-bold text-2xl text-center mr-24`}>1</div>
                            <p>
                                <span className={`text-red-400`}>*</span>
                            </p>
                            <p className={`text-right mr-3 w-96`}>
                                <span className={``}>Đăng ký kinh doanh/<br />Giấy chứng nhận đăng ký doanh nghiệp: </span>
                            </p>
                            {/* Upload button */}
                            <div className={`flex-1`}>
                                <UploadButton name={`upload_1`} label={`Chọn tải hồ sơ`} mess={`Vui lòng tải hồ sơ đã  xác nhận bằng Chữ ký số KHTC`} />
                            </div>
                        </div>

                        <div className={`flex justify-start mb-9`}>{/* Row 2 */}
                            <div className={`w-9 h-9 leading-9 rounded bg-yellow-400 font-bold text-2xl text-center mr-24`}>2</div>
                            <p>
                                <span className={`text-red-400`}>*</span>
                            </p>
                            <p className={`text-right mr-3 w-96`}>
                                <span className={``}>Giấy chứng nhận Mã số thuế:</span>
                            </p>
                            {/* Upload button */}
                            <div className={`flex-1`}>
                                <UploadButton name={`upload_2`} label={`Chọn tải hồ sơ`} mess={`Áp dụng với doanh nghiệp thành lập trước ngày 01/07/2015`} />
                            </div>
                        </div>
                        
                        <div className={`flex justify-start mb-9`}>{/* Row 3 */}
                            <div className={`w-9 h-9 leading-9 rounded bg-yellow-400 font-bold text-2xl text-center mr-24`}>3</div>
                            <p>
                                <span className={`text-red-400`}>*</span>
                            </p>
                            <p className={`text-right mr-3 w-96`}>
                                <span className={``}>Giấy tờ tùy thân của người đại diện:</span>
                            </p>
                            {/* Upload button */}
                            <div className={`flex-1`}>
                                <UploadButton name={`upload_3`} label={`Chọn tải hồ sơ`} mess={`CMND/CCCD/HC của người đại diện theo pháp luật `} />
                            </div>
                        </div>

                        <div className={`flex justify-start mb-9`}>{/* Row 4 */}
                            <div className={`w-9 h-9 leading-9 rounded bg-yellow-400 font-bold text-2xl text-center mr-24`}>4</div>
                            <p>
                                <span className={`text-red-400`}>*</span>
                            </p>
                            <p className={`text-right mr-3 w-96`}>
                                <span className={``}>Quyết định bổ nhiệm kế toán trưởng: </span>
                            </p>
                            {/* Upload button */}
                            <div className={`flex-1`}>
                                <UploadButton name={`upload_4`} label={`Chọn tải hồ sơ`} mess={`Quyết định bổ nhiệm kế toán trưởng/Người phụ trách kế toán`} />
                            </div>
                        </div>

                        <div className={`flex justify-start mb-9`}>{/* Row 5 */}
                            <div className={`w-9 h-9 leading-9 rounded bg-yellow-400 font-bold text-2xl text-center mr-24`}>5</div>
                            <p>
                                <span className={`text-red-400`}>*</span>
                            </p>
                            <p className={`text-right mr-3 w-96`}>
                                <span className={``}>Giấy tờ tùy thân của kế toán trưởng: </span>
                            </p>
                            {/* Upload button */}
                            <div className={`flex-1`}>
                                <UploadButton name={`upload_5`} label={`Chọn tải hồ sơ`} mess={`CMND/CCCD/HC của kế toán trưởng/ Người phụ trách kế toán`} />
                            </div>
                        </div>
                    </div>
                    <div className={`text-center text-gray-300 italic font-normal`}>
                        Lưu ý: Ảnh chụp/tải lên cần rõ nét, đầy đủ thông tin trên hồ sơ.<br />
                        Định dạng cho phép: png,pdf,jpg,rar,zip. Kích thước tối đa: 5 MB.
                    </div>
                    <div className={`p-9 flex justify-between`}>
                        <button className={`py-2 px-9 bg-gray-300 text-black rounded w-52`}>Huỷ</button>
                        <button className={`py-2 px-9 bg-yellow-400 text-black rounded w-52`}>Đối chiếu hồ sơ</button>
                    </div>
                </div>
            </div>
            <FileUpload></FileUpload>
        </div>
    );
};

export default RegisterStep2;
