import { Button, Modal, Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import UploadImageButton from '@components/Common/UploadImageButton';
import FormInput2 from '@components/Common/FormInput2';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import FormSelect2 from '@components/Common/FormSelect2';
import ReactLoading from 'react-loading';
const FormUpload3 = ({ setTab, options, name, label, defaultValue, className }) => {
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
    const sendDataToParent = (type, res) => {
        setData(res);
        console.log('test res');
        console.log(res);
        console.log(type);
    };
    const [loading, setLoading] = useState(false);
    return (
        <>
            <Modal open={loading} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style} className={`px-36 py-9`}>
                    <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
                </Box>
            </Modal>
            <div className="accordion-body py-4 px-5" style={{ backgroundColor: '#E5E5E5' }}>
                <div className={`flex justify-between mb-6`}>
                    <div className={`bg-zinc-300 rounded flex items-center`}>
                        <div className={`flex justify-between items-center bg-zinc-300 rounded p-3`}>
                            <div className={`h-24 w-36 bg-white block mr-3`}></div>
                            <div>
                                <UploadImageButton type={'GTTT'} sendDataToParent={sendDataToParent} name={`upload_2`} label={`UPLOAD ẢNH`} className={`mb-2`} setLoading={setLoading} />
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
                            <FormInput2 name={`name_6`} label={`Họ và tên`} placeholder={`Công ty cổ phần ABC`} value={data?.name} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Ngày tháng năm sinh`} placeholder={``} value={data?.birthday} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-4`}>
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Số CMND/CCCD`} placeholder={`1228392389`} value={data?.id} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Ngày cấp`} placeholder={``} value={data?.issue_date} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-4 mb-3`}>
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Nơi cấp`} placeholder={`Công ty cổ phần ABC`} value={data?.issue_by} />
                        </div>
                        <div className={''}>
                            <FormSelect2 label={`Quốc tịch`} options={field} name={`name_2`} defaultValue={`linh_vuc_1`} className={``} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-4`}>
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Chức vụ`} placeholder={`1228392389`} value={``} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Số điện thoại di động`} placeholder={``} value={``} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-4`}>
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`E-mail`} placeholder={`1228392389`} value={``} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Địa chỉ thường trú`} placeholder={``} value={data?.address} />
                        </div>
                    </div>
                    <div className={''}>
                        <FormInput2 name={`name_6`} label={`Địa chỉ liên lạc`} placeholder={`1228392389`} value={data?.address} disabled={false} />
                    </div>
                    <div>
                        <button className={`py-2 px-9 bg-yellow-400 font-bold text-black rounded w-52`} onClick={() => setTab('step4')}>
                            Tiếp tục
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormUpload3;
