import React, { useRef, useEffect, useState } from 'react';
import { Button, Modal, Box } from '@material-ui/core';
import ModalGuideAuthenSignature from '@components/Common/Modal/ModalGuideAuthenSignature';
import axios from 'axios';
import ReactLoading from 'react-loading';
import next from 'next';
const SignatureStep1 = ({ setTab }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '1px solid #ccc',
        boxShadow: 24
    };
    const [openModal, setOpenModal] = useState(false);
    const openModalGuide = () => setOpenModal(true);
    const closeModalGuide = () => setOpenModal(false);
    const [loading, setLoading] = useState(false);
    const nextStep = () => {
        setTab('step2');
    };
    const onSubmit = async (e) => {
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append('_1tenDoanhNghiep', localStorage.getItem('company_name'));
            formData.append('_1tenVietTat', localStorage.getItem('company_name_short'));
            formData.append('_1maSoDoanhNghiep', localStorage.getItem('company_id'));
            formData.append('_1ngayCap', localStorage.getItem('company_issue_first_date'));
            formData.append('_1diaChiTruSoChinh', localStorage.getItem('company_location'));
            formData.append('_1sdt', localStorage.getItem('company_tel'));
            formData.append('_1loaiHinhDN', '');
            formData.append('_1noiCap', localStorage.getItem('company_name'));
            formData.append('_1doanhThuNamGanNhat', '');

            formData.append('_1tenTKDKTV', '');
            formData.append('_1tenTKDKTA', localStorage.getItem('company_name_eng'));
            formData.append('_1linhVucKD', localStorage.getItem('company_name'));
            formData.append('_1noiCap', '');
            formData.append('_2TTCSHHL', '');

            formData.append('_2hoTen', localStorage.getItem('boss_name'));
            formData.append('_2diaChi', localStorage.getItem('boss_address'));
            formData.append('_2soCMND', localStorage.getItem('boss_id'));
            formData.append('_2sdtDiDong', '');
            formData.append('_2quocTich', '');
            formData.append('_2LNNNAHCT', '');

            formData.append('_3hoTen', localStorage.getItem('boss_name'));
            formData.append('_3ngaySinh', localStorage.getItem('boss_birthday'));
            formData.append('_3chucVu', '');
            formData.append('_3soCMND', localStorage.getItem('boss_id'));
            formData.append('_3ngayCap', '');
            formData.append('_3noiCap', localStorage.getItem('boss_issue_place'));

            formData.append('_3sdti', '');
            formData.append('_3diaChiThuongTru', localStorage.getItem('boss_address'));
            formData.append('_3email', '');
            formData.append('_3diaChiLienLac', localStorage.getItem('boss_address'));

            formData.append('_4hoTen', localStorage.getItem('name'));
            formData.append('_4ngaySinh', localStorage.getItem('birthday'));
            formData.append('_4chucVu', '');
            formData.append('_4soCMND', localStorage.getItem('id'));
            formData.append('_4ngayCap', localStorage.getItem('issue_date'));
            formData.append('_4noiCap', localStorage.getItem('issue_place'));

            formData.append('_4sdti', '');
            formData.append('_4diaChiThuongTru', localStorage.getItem('address'));
            formData.append('_4email', '');
            formData.append('_4diaChiLienLac', localStorage.getItem('address'));
            var url = 'http://localhost:8583/business/api/v1/export/generate';
            const res = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (progressEvent) => {
                    //setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
                    //setTimeout(() => setUploadPercentage(0), 10000);
                }
            });
            //const { fileName, filePath } = res.data;
            // setUploadedFile({ fileName, filePath });
            setLoading(false);
            console.log(JSON.stringify(res.data));
            nextStep();
        } catch (err) {
            setLoading(false);
            console.log(err);
            if (err.response && err.response.status == 500) {
                // setMessage('There was a problem witht he server');
            } else {
                // setMessage(err.response.data.msg);
            }
        }
    };
    return (
        <>
            <Modal open={loading} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style} className={`px-36 py-9`}>
                    <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
                </Box>
            </Modal>
            <div className={`scrollpy h-96 w-full border border-dashed border-gray-200 bg-gray-50 rounded-lg p-4 overflow-y-auto text-sm mb-3`}>
                <h4 className={`font-bold mb-2`}>Kính gửi: NGÂN HÀNG TMCP ĐẠI CHÚNG VIỆT NAM (PVcomBank)</h4>
                <p className={`mb-4`}>Đề nghị Ngân hàng đăng ký thông tin và mở tài khoản cho chúng tôi với các thông tin sau :</p>
                <p className={`uppercase mb-1`}>1.THÔNG TIN TỔ CHỨC MỞ TÀI KHOẢN</p>
                <div className={`ml-2`}>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>1.1, Tên tiếng việt của Tổ chức: {localStorage.getItem('company_name')}</span>
                        <span className={``}>1.2.Tên viết tắt: {localStorage.getItem('company_name_short')}</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>1.3. Giấy tờ chứng minh tổ chức thành lập hợp pháp: {localStorage.getItem('company_id')}</span>
                        <span className={`mr-3`}>Ngày cấp: {localStorage.getItem('company_issue_first_date')}</span>
                        <span className={``}>Nơi cấp: Sở Kế hoạch & Đầu Tư</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>1.4. Mã số thuế: {localStorage.getItem('company_id')}</span>
                        <span className={`mr-3`}>1.5. Loại hình doanh nghệp: Công ty cổ phần</span>
                        <span className={``}>1.6. Ngành nghề: SX & KD thương mại</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>1.7. Địa chỉ trụ sở chính: {localStorage.getItem('company_location')}</span>
                        <span className={`mr-3`}>1.8. Số điện thoại: (024) 7726789</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>1.9. Địa chỉ liên hệ: {localStorage.getItem('company_location')}</span>
                        <span className={`mr-3`}>1.10. Tên Tài khoản đăng ký với Ngân hàng: {localStorage.getItem('company_name')}</span>
                    </div>
                </div>
                <p className={`uppercase mt-4 mb-4`}>2. Thông tin khách hàng tại Hoa Kỳ (FATCA): Không</p>
                <p className={`uppercase mb-1`}>3. THÔNG TIN VỀ NGƯỜI ĐẠI DIỆN HỢP PHÁP CỦA TỔ CHỨC</p>
                <div className={`ml-2`}>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>3.1, Tên tiếng việt của Tổ chức: {localStorage.getItem('company_name')}</span>
                        <span className={``}>3.2.Tên viết tắt: {localStorage.getItem('company_name_short')}</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>3.3. Giấy tờ chứng minh tổ chức thành lập hợp pháp: {localStorage.getItem('company_id')}</span>
                        <span className={`mr-3`}>Ngày cấp:{localStorage.getItem('company_issue_first_date')}</span>
                        <span className={``}>Nơi cấp: Sở Kế hoạch & Đầu Tư</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>3.4. Mã số thuế: {localStorage.getItem('company_id')}</span>
                        <span className={`mr-3`}>3.5. Loại hình doanh nghệp: Công ty cổ phần</span>
                        <span className={``}>3.6. Ngành nghề: SX & KD thương mại</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>3.7. Địa chỉ trụ sở chính: {localStorage.getItem('company_location')}</span>
                        <span className={`mr-3`}>3.8. Số điện thoại: {localStorage.getItem('company_tel')}</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>3.9. Địa chỉ liên hệ: {localStorage.getItem('company_location')}</span>
                        <span className={`mr-3`}>3.10. Tên Tài khoản đăng ký với Ngân hàng: {localStorage.getItem('company_name')}</span>
                    </div>
                </div>
            </div>
            <div className={`flex mb-3`}>
                <input className={`form-check-input appearance-none h-4 w-4 border-2 border-gray-400 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 shrink-0`} type="checkbox" defaultValue="" id="flexCheckChecked" />
                <label htmlFor="flexCheckChecked" className={`cursor-pointer`}>
                    Tôi xác nhận đã đọc kỹ và cam kết tuân thủ theo đúng các điều kiện đã cam kết với PVcomBank.
                </label>
            </div>
            <button onClick={onSubmit} className="mt-3 bg-second-color hover:text-white text-black font-medium py-2 px-12 rounded focus:outline-none focus:shadow-outline" type="button">
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
