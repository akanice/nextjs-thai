import React, { useRef, useEffect, useState } from 'react';
import { Button, Modal, Box } from '@material-ui/core';
import ModalGuideAuthenSignature from '@components/Common/Modal/ModalGuideAuthenSignature';

const SignatureStep1 = ({ setTab }) => {
    const [openModal, setOpenModal] = useState(false);
    const openModalGuide = () => setOpenModal(true);
    const closeModalGuide = () => setOpenModal(false);
    const nextStep = () => {
        setTab('step2');
    };
    return (
        <>
            <div className={`scrollpy h-96 w-full border border-dashed border-gray-200 bg-gray-50 rounded-lg p-4 overflow-y-auto text-sm mb-3`}>
                <h4 className={`font-bold mb-2`}>Kính gửi: NGÂN HÀNG TMCP ĐẠI CHÚNG VIỆT NAM (PVcomBank)</h4>
                <p className={`mb-4`}>Đề nghị Ngân hàng đăng ký thông tin và mở tài khoản cho chúng tôi với các thông tin sau :</p>
                <p className={`uppercase mb-1`}>1.THÔNG TIN TỔ CHỨC MỞ TÀI KHOẢN</p>
                <div className={`ml-2`}>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>1.1, Tên tiếng việt của Tổ chức: Công ty Cổ phần ABCD</span>
                        <span className={``}>1.2.Tên viết tắt: ABCD</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>1.3. Giấy tờ chứng minh tổ chức thành lập hợp pháp: 123456789</span>
                        <span className={`mr-3`}>Ngày cấp: 06/6/2021</span>
                        <span className={``}>Nơi cấp: Sở Kế hoạch & Đầu Tư</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>1.4. Mã số thuế: 08081234567</span>
                        <span className={`mr-3`}>1.5. Loại hình doanh nghệp: Công ty cổ phần</span>
                        <span className={``}>1.6. Ngành nghề: SX & KD thương mại</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>1.7. Địa chỉ trụ sở chính: 22 Ngô Quyền, Hoàn Kiếm, Hà Nội</span>
                        <span className={`mr-3`}>1.8. Số điện thoại: (024) 7726789</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>1.9. Địa chỉ liên hệ: 22 Ngô Quyền, Hoàn Kiếm, Hà Nội</span>
                        <span className={`mr-3`}>1.10. Tên Tài khoản đăng ký với Ngân hàng: Công ty CP ABCD</span>
                    </div>
                </div>
                <p className={`uppercase mt-4 mb-4`}>2. Thông tin khách hàng tại Hoa Kỳ (FATCA): Không</p>
                <p className={`uppercase mb-1`}>3. THÔNG TIN VỀ NGƯỜI ĐẠI DIỆN HỢP PHÁP CỦA TỔ CHỨC</p>
                <div className={`ml-2`}>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>3.1, Tên tiếng việt của Tổ chức: Công ty Cổ phần ABCD</span>
                        <span className={``}>3.2.Tên viết tắt: ABCD</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>3.3. Giấy tờ chứng minh tổ chức thành lập hợp pháp: 123456789</span>
                        <span className={`mr-3`}>Ngày cấp: 06/6/2021</span>
                        <span className={``}>Nơi cấp: Sở Kế hoạch & Đầu Tư</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>3.4. Mã số thuế: 08081234567</span>
                        <span className={`mr-3`}>3.5. Loại hình doanh nghệp: Công ty cổ phần</span>
                        <span className={``}>3.6. Ngành nghề: SX & KD thương mại</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>3.7. Địa chỉ trụ sở chính: 22 Ngô Quyền, Hoàn Kiếm, Hà Nội</span>
                        <span className={`mr-3`}>3.8. Số điện thoại: (024) 7726789</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>3.9. Địa chỉ liên hệ: 22 Ngô Quyền, Hoàn Kiếm, Hà Nội</span>
                        <span className={`mr-3`}>3.10. Tên Tài khoản đăng ký với Ngân hàng: Công ty CP ABCD</span>
                    </div>
                </div>
            </div>
            <div className={`flex mb-3`}>
                <input className={`form-check-input appearance-none h-4 w-4 border-2 border-gray-400 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 shrink-0`} type="checkbox" defaultValue="" id="flexCheckChecked" />
                <label htmlFor="flexCheckChecked" className={`cursor-pointer`}>
                    Tôi xác nhận đã đọc kỹ và cam kết tuân thủ theo đúng các điều kiện đã cam kết với PVcomBank.
                </label>
            </div>
            <button onClick={nextStep} className="mt-3 bg-second-color hover:text-white text-black font-medium py-2 px-12 rounded focus:outline-none focus:shadow-outline" type="button">
                Tải về và xác thực chữ kí số
            </button>
            <div className={`mt-3 text-link underline cursor-pointer`} onClick={openModalGuide}>
                Hướng dẫn xác thực chữ kí số
            </div>
            {/* Modal Mẫu tham khảo (edit this) */}
            <Modal open={openModal} onClose={closeModalGuide} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box className={`px-16 py-9 custom-modal`}>
                    <ModalGuideAuthenSignature />
                </Box>
            </Modal>
        </>
    );
};

export default SignatureStep1;
