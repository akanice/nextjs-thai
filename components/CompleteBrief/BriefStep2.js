import React, { useRef, useEffect, useState } from 'react';
import { Button, Modal, Box } from '@material-ui/core';
import FormInput2 from '@components/Common/FormInput2';
import FormSelect2 from '@components/Common/FormSelect2';
import UploadFile from './UploadFile';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import ReactLoading from 'react-loading';
import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router';
const BriefStep2 = ({ setTab }) => {
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
    const router = useRouter();
    const nextPage = () => {
        router.push('/register/complete-signature');
    };
    const [loading, setLoading] = useState(false);
    const field = [
        { title: `Lĩnh vực 1`, value: `linh_vuc_1` },
        { title: `Lĩnh vực 2`, value: `linh_vuc_2` }
    ];
    const onChangeUS = (e) => {};
    const nextStep = () => {
        setTab('step3');
    };
    const user = [{ avatar: '/images/leftcol-avatar.png' }];
    const avatarRef = useRef();
    useEffect(() => {
        if (data?.msg != null) {
            openModalGuide();
        }
    }, [data]);
    const [openModal, setOpenModal] = useState(false);
    const openModalGuide = () => setOpenModal(true);
    const closeModalGuide = () => setOpenModal(false);
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
                    // defaultPicture={user.avatar}
                    sendDataToParent={sendDataToParent}
                    type={'giay_dkmst'}
                    setLoading={setLoading}
                    ref={avatarRef}
                    className={`normal-case text-gray-600 text-xs`}
                />
                {data?.tax_number != null ? (
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

            <div className={`border-b border-gray-200 my-6`}></div>
            {data?.tax_number ? (
                <div>
                    {' '}
                    <div className={`grid grid-cols-2 gap-8`}>
                        {/* Row 1 */}
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Mã số thuế`} placeholder={`Công ty cổ phần ABC`} value={data?.tax_number} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Tên người nộp thuế`} placeholder={`ABC`} value={data?.tax_payer} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-8`}>
                        {/* Row 2 */}
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Mã số chứng nhận ĐKKD`} placeholder={`0123456789`} value={data?.business_registration_number} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Ngày hoạt động`} placeholder={`ABC`} value={''} />
                        </div>
                    </div>
                    <div className={`grid grid-cols-2 gap-8`}>
                        {/* Row 3 */}
                        <div className={''}>
                            <FormInput2 name={`name_6`} label={`Ngày cấp`} placeholder={`21/08/2017`} value={data?.issue_date} />
                        </div>
                        <div className={''}>
                            <FormInput2 name={`name_7`} label={`Cơ quan quản lý trực tiếp`} placeholder={`ABC`} value={data?.issue_place} />
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
            <button onClick={nextPage} className="bg-second-color hover:text-yellow-500 text-black font-medium py-2 px-9 mt-3 rounded focus:outline-none focus:shadow-outline" type="button">
                Tiếp tục
            </button>
        </>
    );
};

export default BriefStep2;
