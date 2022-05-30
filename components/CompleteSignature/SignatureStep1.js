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
            console.log('treser tset');
            setLoading(true);
            var formData = {};
            formData['_1tenDoanhNghiep'] = localStorage.getItem('company_name');
            formData['_1tenVietTat'] = localStorage.getItem('company_name_short');
            formData['_1maSoDoanhNghiep'] = localStorage.getItem('company_id');
            formData['_1ngayCap'] = localStorage.getItem('company_issue_first_date');
            formData['_1diaChiTruSoChinh'] = localStorage.getItem('company_location');
            formData['_1sdt'] = localStorage.getItem('company_tel');
            formData['_1loaiHinhDN'] = localStorage.getItem('type_company');
            formData['_1noiCap'] = localStorage.getItem('company_name');
            formData['_1doanhThuNamGanNhat'] = localStorage.getItem('volum_company');

            formData['_1tenTKDKTV'] = localStorage.getItem('company_name');
            formData['_1tenTKDKTA'] = localStorage.getItem('company_name_eng');
            formData['_1linhVucKD'] = localStorage.getItem('category_company');
            formData['_1noiCap'] = localStorage.getItem('company_issue_place');

            formData['_3hoTen'] = localStorage.getItem('boss_name');
            formData['_3ngaySinh'] = localStorage.getItem('boss_birthday');
            formData['_3chucVu'] = localStorage.getItem('boss_position');
            formData['_3soCMND'] = localStorage.getItem('boss_id');
            formData['_3ngayCap'] = localStorage.getItem('boss_issue_date');
            formData['_3noiCap'] = localStorage.getItem('boss_issue_place');

            formData['_3email'] = localStorage.getItem('boss_email');
            formData['_3diaChiLienLac'] = localStorage.getItem('boss_current_adress');
            formData['_3sdti'] = localStorage.getItem('boss_phone');

            formData['_4hoTen'] = localStorage.getItem('name');
            formData['_4ngaySinh'] = localStorage.getItem('birthday');
            formData['_4chucVu'] = localStorage.getItem('appointment_position');
            formData['_4soCMND'] = localStorage.getItem('id');
            formData['_4ngayCap'] = localStorage.getItem('issue_date');
            formData['_4noiCap'] = localStorage.getItem('issue_place');

            formData['_4diaChiThuongTru'] = localStorage.getItem('address');
            formData['_4email'] = localStorage.getItem('email');
            formData['_4diaChiLienHe'] = localStorage.getItem('current_adress');
            formData['_4soDTi'] = localStorage.getItem('phone');

            formData['_1doanhThuNamGanNhat'] = localStorage.getItem('volum_company');
            formData['_6chonLoaiTienTe'] = localStorage.getItem('currency_company');
            formData['_1linhVucKD'] = localStorage.getItem('category_company');
            formData['_1loaiHinhDN'] = localStorage.getItem('type_company');

            formData['_2hoTen'] = localStorage.getItem('benefit_name');
            formData['_2sdtDiDong'] = localStorage.getItem('benefit_phone');
            formData['_2soCMND'] = localStorage.getItem('benefit_id');
            formData['_2diaChi'] = localStorage.getItem('benefit_adress');
            if (localStorage.getItem('benefit_name') != '') {
                formData['_2TTCSHHL'] = 'Có';
            } else {
                formData['_2TTCSHHL'] = 'Không';
            }
            nextStep();
            var url = 'http://localhost:8583/business/api/v1/export/generate';
            const res = await axios
                .post(url, formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    responseType: 'blob',
                    onUploadProgress: (progressEvent) => {
                        //setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
                        //setTimeout(() => setUploadPercentage(0), 10000);
                    }
                })
                .then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'Thong-Tin-Hop-Dong.pdf');
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
            //const { fileName, filePath } = res.data;
            // setUploadedFile({ fileName, filePath });
            setLoading(false);
            console.log(JSON.stringify(res.data));
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
    const [company, setCompany] = useState({});

    const getLocalStorageItem = (key) => {
        return typeof window !== undefined ? localStorage.getItem(key) : null;
    };

    useEffect(() => {
        console.log('=========== 1');
        let data = {};
        data.company_name = getLocalStorageItem('company_name');
        data.company_name_short = getLocalStorageItem('company_name_short');
        data.company_issue_first_date = getLocalStorageItem('company_issue_first_date');
        data.company_id = getLocalStorageItem('company_id');
        data.company_location = getLocalStorageItem('company_location');
        data.company_tel = getLocalStorageItem('company_tel');
        setCompany(data);
    }, []);

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
                        <span className={`mr-3`}>1.1, Tên tiếng việt của Tổ chức: {company?.company_name}</span>
                        <span className={``}>1.2.Tên viết tắt: {company?.company_name_short}</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>1.3. Giấy tờ chứng minh tổ chức thành lập hợp pháp: {company?.company_id}</span>
                        <span className={`mr-3`}>Ngày cấp: {company?.company_issue_first_date}</span>
                        <span className={``}>Nơi cấp: Sở Kế hoạch & Đầu Tư</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>1.4. Mã số thuế: {company?.company_id}</span>
                        <span className={`mr-3`}>1.5. Loại hình doanh nghệp: Công ty cổ phần</span>
                        <span className={``}>1.6. Ngành nghề: SX & KD thương mại</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>1.7. Địa chỉ trụ sở chính: {company?.company_location}</span>
                        <span className={`mr-3`}>1.8. Số điện thoại: (024) 7726789</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>1.9. Địa chỉ liên hệ: {company?.company_location}</span>
                        <span className={`mr-3`}>1.10. Tên Tài khoản đăng ký với Ngân hàng: {company?.company_name}</span>
                    </div>
                </div>
                <p className={`uppercase mt-4 mb-4`}>2. Thông tin khách hàng tại Hoa Kỳ (FATCA): Không</p>
                <p className={`uppercase mb-1`}>3. THÔNG TIN VỀ NGƯỜI ĐẠI DIỆN HỢP PHÁP CỦA TỔ CHỨC</p>
                <div className={`ml-2`}>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>3.1, Tên tiếng việt của Tổ chức: {company?.company_name}</span>
                        <span className={``}>3.2.Tên viết tắt: {company?.company_name_short}</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>3.3. Giấy tờ chứng minh tổ chức thành lập hợp pháp: {company?.company_id}</span>
                        <span className={`mr-3`}>Ngày cấp:{company?.company_issue_first_date}</span>
                        <span className={``}>Nơi cấp: Sở Kế hoạch & Đầu Tư</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>3.4. Mã số thuế: {company?.company_id}</span>
                        <span className={`mr-3`}>3.5. Loại hình doanh nghệp: Công ty cổ phần</span>
                        <span className={``}>3.6. Ngành nghề: SX & KD thương mại</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>3.7. Địa chỉ trụ sở chính: {company?.company_location}</span>
                        <span className={`mr-3`}>3.8. Số điện thoại: {company?.company_tel}</span>
                    </div>
                    <div className={`mb-2`}>
                        <span className={`mr-3`}>3.9. Địa chỉ liên hệ: {company?.company_location}</span>
                        <span className={`mr-3`}>3.10. Tên Tài khoản đăng ký với Ngân hàng: {company?.company_name}</span>
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
