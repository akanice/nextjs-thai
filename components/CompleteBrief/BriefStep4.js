import React, { useRef, useEffect, useState } from 'react';
import { Button, Modal, Box } from '@material-ui/core';
import FormInput2 from '@components/Common/FormInput2';
import FormSelect2 from '@components/Common/FormSelect2';
import UploadFile from './UploadFile';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import ReactLoading from 'react-loading';
const BriefStep4 = ({ setTab }) => {
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
        { title: `Lĩnh vực 1`, value: `linh_vuc_1` },
        { title: `Lĩnh vực 2`, value: `linh_vuc_2` }
    ];
    const onChangeUS = (e) => {};
    const nextStep = () => {
        setTab('step5');
    };
    const user = [{ avatar: '/images/leftcol-avatar.png' }];
    const avatarRef = useRef();
    return (
        <>
            <Modal open={loading} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style} className={`px-36 py-9`}>
                    <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
                </Box>
            </Modal>
            <div className={`upload-docs`}>
                <UploadFile
                    sendDataToParent={sendDataToParent}
                    type={''}
                    setLoading={setLoading}
                    // defaultPicture={user.avatar}
                    ref={avatarRef}
                    className={`normal-case text-gray-600 text-xs`}
                />
                {data?.company_name != null ? (
                    <div className={`flex justify-start items-center mt-6`}>
                        <div className={`text-green-500 mr-3`}>
                            <AiFillCheckCircle size={24} />
                        </div>
                        <div>
                            <div className={`text-green-500 text-lg font-bold`}>Tải hồ sơ lên thành công</div>
                            <div className={`text-gray-600 text-sm`}>Bấm vào `&quot;Hoàn tất hồ sơ&quot; để hoàn thiện xác thực chữ ký số</div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>

            <div className={`border-b border-gray-200 my-6`}></div>
            {data?.company_name ? (
                <div>
                    <div className={`grid grid-cols-2 gap-8`}>
                        {/* Row 1 */}
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Tên tổ chức`} placeholder={`Công ty cổ phần ABC`} value={data?.company_name} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Tên người được bổ nhiệm`} placeholder={`ABC`} value={data?.name} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-8`}>
                        {/* Row 2 */}
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Chức vụ bổ nhiệm`} placeholder={`0123456789`} value={data?.appointment_position} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Ngày bổ nhiệm`} placeholder={`ABC`} value={data?.appointment_from} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-8`}>
                        {/* Row 3 */}
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Thời hạn bổ nhiệm`} placeholder={`21/08/2017`} value={data?.appointment_duration} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Số CMT/CCCD/Hộ chiếu`} placeholder={`ABC`} value={data?.company_id} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-8`}>
                        {/* Row 4 */}
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Ngày cấp`} placeholder={`0123456789`} value={data?.company_id} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Nơi cấp`} placeholder={`ABC`} value={data?.company_id} />
                        </div>
                    </div>
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

export default BriefStep4;
