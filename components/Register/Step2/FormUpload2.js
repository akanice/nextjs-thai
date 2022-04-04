import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UploadImageButton from '@components/Common/UploadImageButton';
import FormInput2 from '@components/Common/FormInput2';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import FormSelect2 from '@components/Common/FormSelect2';
const FormUpload2 = ({ setTab, options, name, label, defaultValue, className }) => {
    const img1 = '/images/icon-check.png';
    const img2 = '/images/icon-uncheck.png';
    const field = [
        { title: `Lĩnh vực 1`, value: `linh_vuc_1` },
        { title: `Lĩnh vực 2`, value: `linh_vuc_2` }
    ];
    const [data, setData] = useState({});
    const sendDataToParent = ({ type, res }) => {
        setData(res);
    };
    return (
        <>
            <div className="accordion-body py-4 px-5" style={{ backgroundColor: '#E5E5E5' }}>
                <div className={`flex justify-between mb-6`}>
                    <div className={`bg-zinc-300 rounded flex items-center`}>
                        <div className={`flex justify-between items-center bg-zinc-300 rounded p-3`}>
                            <div className={`h-24 w-36 bg-white block mr-3`}></div>
                            <div>
                                <UploadImageButton name={`upload_2`} label={`UPLOAD ẢNH`} type={'giay_dkmst'} className={``} sendDataToParent={sendDataToParent} />
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
                            <FormInput2 name={`name_6`} label={`Mã số người nộp thuế`} placeholder={`Công ty cổ phần ABC`} value={``} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Ngày hoạt động`} placeholder={``} value={``} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-4`}>
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Mã số chứng nhận đăng kí doanh kinh doanh`} placeholder={`1228392389`} value={``} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Ngày cấp CMND`} placeholder={``} value={``} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-4 mb-3`}>
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Ngày cấp MST`} placeholder={`Công ty cổ phần ABC`} value={``} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Cơ quan thuế quản lý trức tiếp`} placeholder={`Công ty cổ phần ABC`} value={``} />
                        </div>
                    </div>
                    <div>
                        <button className={`py-2 px-9 bg-yellow-400 font-bold text-black rounded w-52`} onClick={() => setTab('step3')}>
                            Tiếp tục
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormUpload2;
