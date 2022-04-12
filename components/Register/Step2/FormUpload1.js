import { Button, Modal, Box } from '@material-ui/core';
import { FaExclamationCircle } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import UploadImageButton from '@components/Common/UploadImageButton';
import FormInput2 from '@components/Common/FormInput2';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import FormSelect2 from '@components/Common/FormSelect2';
import ReactLoading from 'react-loading';
const FormUpload1 = ({ setTab, setOpenModalWarning, options, name, label, defaultValue, className }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '1px solid #ccc',
        boxShadow: 24
    };
    const img1 = '/images/icon-check.png';
    const img2 = '/images/icon-uncheck.png';
    const field = [
        { title: `Lĩnh vực 1`, value: `linh_vuc_1` },
        { title: `Lĩnh vực 2`, value: `linh_vuc_2` }
    ];
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const sendDataToParent = (type, res) => {
        setData(res);
        console.log('test res');
        console.log(res);
        console.log(type);
    };
    const [user, setUser] = useState(false);
    const onChangeUS = (e) => {
        setOpenModalWarning(e.target.checked);
    };
    const onChangeUser = (e) => {
        setUser(!user);
    };
    return (
        <>
            <Modal open={loading} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style} className={`px-36 py-9`}>
                    <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
                </Box>
            </Modal>
            <div className="accordion-body py-4 px-5">
                <div className={`flex justify-between mb-6`}>
                    <div className={`bg-zinc-300 rounded flex items-center`}>
                        <div className={`flex justify-between items-center bg-zinc-300 rounded p-3`}>
                            <div className={`h-24 w-36 bg-white block mr-3`}></div>
                            <div>
                                <UploadImageButton type={'gpdkkd'} sendDataToParent={sendDataToParent} name={`upload_2`} label={`UPLOAD ẢNH`} className={`mb-2`} setLoading={setLoading} />
                                <div className={`flex items-center mb-1`}>
                                    <AiOutlineCheckCircle size={12} className={`mr-2`} /> Định dạng: png, jpg, jpeg, tif, pdf
                                </div>
                                <div className={`flex items-center mb-1`}>
                                    <AiOutlineCheckCircle size={12} className={`mr-2`} /> Dung lượng: Từ 500KB đến 5MB
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`border-r border-gray-300 mx-3`}>&nbsp;</div>
                    <div className={``}>
                        <div className={`font-bold mb-3`}>Mô tả</div>
                        <div className={`flex justify-between items-center`}>
                            <div className={`flex flex-col justify-between items-center mr-3`}>
                                <img src={img1} width={68} />
                                <span className={`text-center`}>
                                    Ảnh chụp đúng
                                    <br />
                                    yêu cầu
                                </span>
                            </div>
                            <div className={`flex flex-col justify-between items-center mr-3`}>
                                <img src={img2} width={68} />
                                <span className={`text-center`}>
                                    Ảnh chụp thẳng
                                    <br />
                                    không chụp nghiêng
                                </span>
                            </div>
                            <div className={`flex flex-col justify-between items-center`}>
                                <img src={img2} width={68} />
                                <span className={`text-center`}>
                                    Ảnh chụp không
                                    <br />
                                    bị loá sáng
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={`grid grid-cols-2 gap-4`}>
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Tên doanh nghiệp`} placeholder={`Công ty cổ phần ABC`} value={data?.company_name} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Tên viết tắt`} placeholder={``} value={data?.company_name_short} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-4`}>
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Mã số doanh nghiệp ĐKKD`} placeholder={`1228392389`} value={data?.company_id} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Mã số thuế`} placeholder={``} value={data?.company_tax_code} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-4`}>
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Ngày cấp  `} placeholder={`12/07/2021`} value={data?.company_issue_first_date} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Nơi cấp`} placeholder={``} value={data?.company_issue_place} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-4`}>
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Địa chỉ trụ sở chính`} placeholder={`Công ty cổ phần ABC`} value={data?.company_location} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Số điện thoại liên hệ`} placeholder={``} value={data?.company_tel} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-4`}>
                        <div className={''}>
                            <FormSelect2 label={`Lĩnh vực hoạt động kinh doanh`} options={field} name={`name_2`} defaultValue={`linh_vuc_1`} className={``} />
                        </div>
                        <div className={''}>
                            <FormSelect2 label={`Doanh thu năm gần nhất`} options={field} name={`name_2`} defaultValue={`linh_vuc_1`} className={``} />
                        </div>
                    </div>
                    <div className="py-4">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className={`grid grid-cols-2 gap-4`}>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Tên tài khoản đăng kí với ngân hàng - tiếng Việt`} placeholder={``} value={``} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Tên tài khoản đăng kí với ngân hàng - tiếng Anh`} placeholder={``} value={``} />
                        </div>
                    </div>
                    <div className="py-4">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className={`grid grid-cols-2 gap-4 mb-6`}>
                        <div className={''}>
                            <FormSelect2 label={`Đăng kí loại tài khoản cần mở`} options={field} name={`name_2`} defaultValue={`linh_vuc_1`} className={``} />
                        </div>
                        <div className={''}>
                            <FormSelect2 label={`Chọn loại tiền tệ`} options={field} name={`name_2`} defaultValue={`linh_vuc_1`} className={``} />
                        </div>
                    </div>
                    <div className={`flex items-center mb-3`}>
                        <input className={`form-check-input appearance-none h-4 w-4 border-2 border-gray-400 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 shrink-0`} onChange={onChangeUS} type="checkbox" defaultValue="" id="flexCheckChecked" />
                        <label htmlFor="flexCheckChecked" className={`text-link font-bold cursor-pointer`}>
                            Thông tin Khách hàng tại Hoa Kỳ (FATCA)
                        </label>
                    </div>
                    <div className={`ml-6 text-sm mb-3`}>Tố chức được thành lập tại Mỹ hoặc chi nhánh Mỹ của một tổ chức thành lập ngoài Mỹ – Vui lòng điền mẫu đơn W-9 dành cho tổ chức | US legal entity or US-branch of foreign legal entity - W-9 form needed</div>

                    <div className={`flex items-center mb-3`}>
                        <input className={`form-check-input appearance-none h-4 w-4 border-2 border-gray-400 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 shrink-0`} onChange={onChangeUser} type="checkbox" defaultValue="" id="flexCheckChecked" />
                        <label htmlFor="flexCheckChecked" className={`text-link font-bold cursor-pointer`}>
                            Thông tin về chủ sở hữu hưởng lợi
                        </label>
                    </div>
                    {user ? (
                        <div>
                            <div className={`grid grid-cols-2 gap-4`}>
                                <div className={''}>
                                    <FormInput2 name={`name_6`} label={`Họ và tên`} placeholder={`Công ty cổ phần ABC`} value={data?.boss_name} />
                                </div>
                                <div className={''}>
                                    <FormInput2 name={`name_7`} label={`Số CMND/CCCD`} placeholder={`1228392389`} value={data?.boss_id_number} />
                                </div>
                            </div>
                            <div className={`grid grid-cols-2 gap-4`}>
                                <div className={''}>
                                    <FormInput2 name={`name_6`} label={`Số điện thoại di động`} placeholder={`Công ty cổ phần ABC`} value={``} />
                                </div>
                                <div className={''}>
                                    <FormInput2 name={`name_7`} label={`Địa chỉ liên lạc`} placeholder={`1228392389`} value={data?.boss_current_address} />
                                </div>
                            </div>
                            <div className={`grid grid-cols-2 gap-4 mb-3`}>
                                <div className={''}>
                                    <FormInput2 name={`name_6`} label={`Quốc tịch`} placeholder={`Công ty cổ phần ABC`} value={``} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                    <div>
                        <button className={`py-2 px-9 bg-yellow-400 font-bold text-black rounded w-52`} onClick={() => setTab('step2')}>
                            Tiếp tục
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormUpload1;
