import React, { useRef, useEffect, useState } from 'react';
import { Button, Modal, Box } from '@material-ui/core';
import FormInput2 from '@components/Common/FormInput2';
import FormSelect2 from '@components/Common/FormSelect2';
import UploadFile from './UploadFile';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import ReactLoading from 'react-loading';
const BriefStep1 = ({ setTab }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '1px solid #ccc',
        boxShadow: 24
    };
    const [data, setData] = useState({});
    const sendDataToParent = (res) => {
        data = setData(res);
    };
    const [loading, setLoading] = useState(false);
    const field = [
        { title: `1. Nông nghiệp và hoạt động dịch vụ có liên quan`, value: `1. Nông nghiệp và hoạt động dịch vụ có liên quan` },
        { title: `2. Lâm nghiệp và hoạt động dịch vụ có liên quan`, value: `2. Lâm nghiệp và hoạt động dịch vụ có liên quan` },
        { title: `3. Khai thác, nuôi trồng thuỷ sản`, value: `3. Khai thác, nuôi trồng thuỷ sản` },
        { title: ` 5. Khai thác than cứng và than non`, value: ` 5. Khai thác than cứng và than non` }
    ];
    const volum_field = [
        { title: `0 - 20 tỷ VND`, value: `0 - 20 tỷ VND` },
        { title: `Trên 20 tỷ VND - 500 tỷ VND`, value: `Trên 20 tỷ VND - 500 tỷ VND` },
        { title: `Trên 500 tỷ VND -1000 tỷ VND`, value: `Trên 500 tỷ VND -1000 tỷ VND` },
        { title: ` > 1000 tỷ VND`, value: ` > 1000 tỷ VND` }
    ];
    const [owner, setOwner] = useState(false);
    const currency_field = [
        { title: `US`, value: `US` },
        { title: `VND`, value: `VND` },
        { title: `EUR`, value: `EUR` }
    ];
    const category_field = [
        { title: `Doanh Nghiệp Tư Nhân`, value: `Doanh Nghiệp Tư Nhân` },
        { title: `Công ty Trách Nhiệm Hữu Hạn`, value: `Công ty Trách Nhiệm Hữu Hạn` },
        { title: `Công ty Cổ Phần`, value: `Công ty Cổ Phần` }
    ];
    const onChangeUS = (e) => {
        setOwner(!owner);
    };
    const nextStep = () => {
        setTab('step2');
    };

    const user = [{ avatar: '/images/leftcol-avatar.png' }];
    const avatarRef = useRef();
    const [openModal, setOpenModal] = useState(false);
    const openModalGuide = () => setOpenModal(true);
    const closeModalGuide = () => setOpenModal(false);
    const [volumCompany, setVolumCompany] = useState('');
    const [categoryCompany, setCategoryCompany] = useState('');
    const [currency, setCurrency] = useState('');
    const [typeAccount, setTypeAccount] = useState('');
    const [vietnameName, setVietnamName] = useState('');
    const [englishName, setEnglishName] = useState('');
    const [isContinue, setContinue] = useState(false);
    const [benefitPersonName, setBenefitPersonName] = useState('');
    const [benefitPersonAdress, setBenefitPersonAdres] = useState('');
    const [benefitPersonId, setBenefitPersonId] = useState('');
    const [benefitPersonPhone, setBenefitPersonPhone] = useState('');

    useEffect(() => {
        if (data?.company_id != null) {
            localStorage.setItem('company_name', data?.company_name);
            localStorage.setItem('company_name_short', data?.company_name_short);
            localStorage.setItem('company_id', data?.company_id);
            localStorage.setItem('company_tax_code', data?.company_tax_code);
            localStorage.setItem('company_name_short', data?.company_name_short);
            localStorage.setItem('company_issue_first_date', data?.company_issue_first_date);
            localStorage.setItem('company_issue_place', data?.company_issue_place);
            localStorage.setItem('company_location', data?.company_location);
            localStorage.setItem('company_tel', data?.company_tel);
            localStorage.setItem('company_name_eng', data?.company_name_eng);
        }
        if (data?.msg != null) {
            openModalGuide();
        }
    }, [data]);
    useEffect(() => {
        localStorage.setItem('volum_company', volumCompany);
        localStorage.setItem('currency_company', currency);
        localStorage.setItem('category_company', categoryCompany);
        localStorage.setItem('type_company', typeAccount);

        localStorage.setItem('benefit_name', benefitPersonName);
        localStorage.setItem('benefit_phone', benefitPersonPhone);
        localStorage.setItem('benefit_id', benefitPersonId);
        localStorage.setItem('benefit_adress', benefitPersonAdress);
        if (typeAccount != '' && categoryCompany != '' && currency != '' && volumCompany != '') {
            setContinue(true);
        }
    }, [volumCompany, categoryCompany, currency, typeAccount, benefitPersonAdress, benefitPersonId, benefitPersonName, benefitPersonPhone]);
    return (
        <>
            <Modal open={openModal} onClose={closeModalGuide} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box className={`px-16 py-9 custom-modal`}>
                    <div>{data?.msg}</div>
                </Box>
            </Modal>
            <Modal open={loading} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style} className={`px-36 py-9`}>
                    <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
                </Box>
            </Modal>
            <div className={`upload-docs`}>
                <UploadFile
                    sendDataToParent={sendDataToParent}
                    type={'gpdkkd'}
                    setLoading={setLoading}
                    // defaultPicture={user.avatar}
                    ref={avatarRef}
                    className={`normal-case text-gray-600 text-xs`}
                />
                {data?.company_id != null ? (
                    <div className={`flex justify-start items-center mt-6`}>
                        <div className={`text-green-500 mr-3`}>
                            <AiFillCheckCircle size={24} />
                        </div>
                        <div>
                            <div className={`text-green-500 text-lg font-bold`}>Tải hồ sơ lên thành công</div>
                            <div className={`text-gray-600 text-sm`}>Bấm vào &apos;Hoàn tất hồ sơ&apos; để hoàn thiện xác thực chữ ký số</div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
            {data?.company_id != null ? (
                <div>
                    {' '}
                    <div className={`border-b border-gray-200 my-6`}></div>
                    <div className={`grid grid-cols-2 gap-8`}>
                        {/* Row 1 */}
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Tên doanh nghiệp`} placeholder={`Công ty cổ phần ABC`} value={data?.company_name} disabled={true} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Tên viết tắt`} placeholder={`ABC`} value={data?.company_name_short} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-8`}>
                        {/* Row 2 */}
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Mã số doanh nghiệp`} placeholder={`0123456789`} value={data?.company_id} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Mã số thuế`} placeholder={`ABC`} value={data?.company_tax_code} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-8`}>
                        {/* Row 3 */}
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Ngày cấp`} placeholder={`21/08/2017`} value={data?.company_issue_first_date} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Nơi cấp`} placeholder={`ABC`} value={data?.company_issue_place} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-8`}>
                        {/* Row 4 */}
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Địa chỉ trụ sở chính`} placeholder={`0123456789`} value={data?.company_location} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Số điện thoại liên hệ`} placeholder={`ABC`} value={data?.company_tel} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-8`}>
                        {/* Row 5 */}
                        <div className={''}>
                            <FormSelect2 label={`Lĩnh vực hoạt động kinh doanh`} options={field} name={`name_2`} defaultValue={`linh_vuc_1`} className={``} setValue={setCategoryCompany} />
                        </div>
                        <div className={''}>
                            <FormSelect2 label={`Doanh thu năm gần nhất`} options={volum_field} name={`name_2`} defaultValue={`linh_vuc_1`} className={``} setValue={setVolumCompany} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-8`}>
                        {/* Row 4 */}
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Tên tài khoản đăng ký với tài khoản tiếng Việt`} placeholder={`0123456789`} value={data?.company_name} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Tên tài khoản đăng ký với tài khoản tiếng Anh`} placeholder={`ABC`} value={data?.company_name_eng} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-8`}>
                        {/* Row 5 */}
                        <div className={''}>
                            <FormSelect2 label={`Đăng ký loại tài khoản cần mở`} options={category_field} name={`name_2`} defaultValue={`linh_vuc_1`} className={``} setValue={setTypeAccount} />
                        </div>
                        <div className={''}>
                            <FormSelect2 label={`Chọn loại tiền tệ`} options={currency_field} name={`name_2`} defaultValue={`linh_vuc_1`} className={``} setValue={setCurrency} />
                        </div>
                    </div>
                    <div className={`flex items-center mb-3`}>
                        <input className={`form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-sky-400 checked:border-sky-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 shrink-0`} onChange={onChangeUS} type="checkbox" defaultValue="" id="flexCheckChecked" />
                        <label htmlFor="flexCheckChecked" className={`cursor-pointer`}>
                            Thông tin Khách hàng tại Hoa Kỳ (FATCA)
                        </label>
                    </div>
                    <div className={`flex items-center mb-3`}>
                        <input className={`form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-sky-400 checked:border-sky-400 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 shrink-0`} onChange={onChangeUS} type="checkbox" defaultValue="" id="flexCheckChecked" />
                        <label htmlFor="flexCheckChecked" className={`cursor-pointer`}>
                            Đăng ký thông tin về chủ sở hữu hưởng lợi
                        </label>
                    </div>
                    <div className={`border-b border-gray-200 my-6`}></div>
                    {owner ? (
                        <div>
                            <div className={`grid grid-cols-2 gap-8`}>
                                {/* Row 4 */}
                                <div className={''}>
                                    <FormInput2 name={`name_6`} label={`Họ và tên`} placeholder={`0123456789`} value={''} setValue={setBenefitPersonName} />
                                </div>
                                <div className={''}>
                                    <FormInput2 name={`name_7`} label={`Số CMND/CCCD`} placeholder={`ABC`} value={''} setValue={setBenefitPersonId} />
                                </div>
                            </div>
                            <div className={`grid grid-cols-2 gap-8`}>
                                {/* Row 4 */}
                                <div className={''}>
                                    <FormInput2 name={`name_6`} label={`Số điện thoại di động`} placeholder={`0123456789`} value={''} setValue={setBenefitPersonPhone} />
                                </div>
                                <div className={''}>
                                    <FormInput2 name={`name_7`} label={`Địa chỉ liên lạc`} placeholder={`ABC`} value={''} setValue={setBenefitPersonAdres} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                    <button onClick={nextStep} className="bg-second-color hover:text-yellow-500 text-black font-medium py-2 px-9 mt-3 rounded focus:outline-none focus:shadow-outline" type="button">
                        Tiếp tục
                    </button>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default BriefStep1;
