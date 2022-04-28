import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import ButtonToggle2 from '@components/Common/ButtonToggle2';
import { TextField } from '@material-ui/core';
import {FcSmartphoneTablet} from 'react-icons/fc';

const CreateAccountUserPC = () => {

    return (
        <>
            <div className={`text-lg font-bold mb-3`}>Dành cho nhân viên hậu kiểm</div>
            <ButtonToggle2 name={`name_1`} id="id_1" checked={`checked`} className={`mr-2 mb-3`} label={`Đúng, chính xác, hợp lệ`} positionButton={`left`} />
            <Box className={`mb-6`}>
                <div className={`font-bold mb-2`}>1.Đối khớp thông tin giữa hai hồ sơ</div>
                <div className={`ml-2`}>
                    <ButtonToggle2 name={`name_2`} id="id_2" checked={`checked`} className={`justify-between mb-2`} label={`Thông tin tổ chức`} positionButton={`right`} />
                    <ButtonToggle2 name={`name_3`} id="id_3" checked={`checked`} className={`justify-between mb-2`} label={`Thông tin người đại diện PL`} positionButton={`right`} />
                    <ButtonToggle2 name={`name_4`} id="id_4" checked={`checked`} className={`justify-between mb-2`} label={`Thông tin KTT/Phụ trách kế toán`} positionButton={`right`} />
                    <ButtonToggle2 name={`name_5`} id="id_5" checked={`checked`} className={`justify-between mb-6`} label={`Thông tin đăng ký dịch vụ tiện ích`} positionButton={`right`} />
                    <TextField id="standard-basic" variant="standard" name="note1" placeholder={`Ghi chú`} size="small"className={`w-full`} />
                </div>
            </Box>
            <Box className={`mb-6`}>
                <div className={`font-bold mb-2`}>2.Kết quả Video Call</div>
                <div className={`ml-2`}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className={`justify-between mb-6`}>
                        <TextField id="input-with-sx" variant="standard" className={`grow`} placeholder={`Số điện thoại gọi ra`} />
                        <FcSmartphoneTablet size={36} className={`ml-6`}/>
                    </Box>
                    <ButtonToggle2 name={`name_2`} id="id_6" checked={`checked`} className={` mb-6`} label={`Thành công - Đạt`} positionButton={`left`} />
                    <TextField id="standard-basic2" variant="standard" name="note2" placeholder={`Ghi chú`} size="small"className={`w-full`} />
                </div>
            </Box>
        </>
    );
};

export default CreateAccountUserPC;
