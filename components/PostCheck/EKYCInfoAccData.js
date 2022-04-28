import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import ButtonToggle2 from '@components/Common/ButtonToggle2';
import { TextField } from '@material-ui/core';

const EKYCInfoAccData = () => {

    return (
        <>
            <div className={`text-lg font-bold mb-3`}>Dành cho nhân viên hậu kiểm</div>
            <ButtonToggle2 name={`name_1`} id="id_1" checked={`checked`} className={`mr-2 mb-3`} label={`Đúng, chính xác, hợp lệ`} positionButton={`left`} />
            <Box className={`mb-6`}>
                <div className={`font-bold mb-2`}>1.Kiểm tra định dạng các hồ sơ</div>
                <div className={`ml-2`}>
                    <ButtonToggle2 name={`name_2`} id="id_2" checked={`checked`} className={`justify-between mb-2`} label={`Giấy chứng nhận đăng ký kinh doanh`} positionButton={`right`} />
                    <ButtonToggle2 name={`name_3`} id="id_3" checked={`checked`} className={`justify-between mb-2`} label={`Quyết định bổ nhiệm KTT`} positionButton={`right`} />
                    <ButtonToggle2 name={`name_4`} id="id_4" checked={`checked`} className={`justify-between mb-2`} label={`GTTT người đại diện Pháp luật`} positionButton={`right`} />
                    <ButtonToggle2 name={`name_5`} id="id_5" checked={`checked`} className={`justify-between mb-6`} label={`GTTT Kế toán trưởng/PT kế toán`} positionButton={`right`} />
                    <TextField id="standard-basic" variant="standard" name="note1" placeholder={`Ghi chú`} size="small"className={`w-full`} />
                </div>
            </Box>
            <Box className={`mb-6`}>
                <div className={`font-bold mb-2`}>2.Kiểm tra thông tin quan trọng của các hồ sơ</div>
                <div className={`ml-2`}>
                    <ButtonToggle2 name={`name_2`} id="id_2" checked={`checked`} className={`justify-between mb-2`} label={`Giấy chứng nhận đăng ký kinh doanh`} positionButton={`right`} />
                    <ButtonToggle2 name={`name_3`} id="id_3" checked={`checked`} className={`justify-between mb-2`} label={`Quyết định bổ nhiệm KTT`} positionButton={`right`} />
                    <ButtonToggle2 name={`name_4`} id="id_4" checked={`checked`} className={`justify-between mb-2`} label={`GTTT người đại diện Pháp luật`} positionButton={`right`} />
                    <ButtonToggle2 name={`name_5`} id="id_5" checked={`checked`} className={`justify-between mb-6`} label={`GTTT Kế toán trưởng/PT kế toán`} positionButton={`right`} />
                    <TextField id="standard-basic" variant="standard" name="note1" placeholder={`Ghi chú`} size="small"className={`w-full`} />
                </div>
            </Box>
            <Box className={`mb-6`}>
                <div className={`font-bold mb-2`}>3.Check chéo thông tin giữa Giấy chứng nhận đăng ký kinh doanh và Quyết định bổ nhiệm KTT</div>
                <div className={`ml-2`}>
                    <ButtonToggle2 name={`name_2`} id="id_2" checked={`checked`} className={`justify-between mb-2`} label={`Tên tổ chức`} positionButton={`right`} />
                    <TextField id="standard-basic" variant="standard" name="note1" placeholder={`Ghi chú`} size="small"className={`w-full`} />
                </div>
            </Box>
            <Box className={`mb-6`}>
                <div className={`font-bold mb-2`}>4.Check chéo thông tin giữa Giấy chứng nhận đăng ký kinh doanh và GTTT người đại diện PL</div>
                <div className={`ml-2`}>
                    <ButtonToggle2 name={`name_2`} id="id_2" checked={`checked`} className={`justify-between mb-2`} label={`Họ và tên người đại diện PL`} positionButton={`right`} />
                    <ButtonToggle2 name={`name_3`} id="id_3" checked={`checked`} className={`justify-between mb-2`} label={`Số GTTT người đại diện PL`} positionButton={`right`} />
                    <ButtonToggle2 name={`name_4`} id="id_4" checked={`checked`} className={`justify-between mb-2`} label={`Ngày cấp GTTT`} positionButton={`right`} />
                    <ButtonToggle2 name={`name_5`} id="id_5" checked={`checked`} className={`justify-between mb-6`} label={`Nơi cấp GTTT`} positionButton={`right`} />
                    <ButtonToggle2 name={`name_5`} id="id_5" checked={`checked`} className={`justify-between mb-6`} label={`Địa chỉ thường  trú người đại diện PL`} positionButton={`right`} />
                    <TextField id="standard-basic" variant="standard" name="note1" placeholder={`Ghi chú`} size="small"className={`w-full`} />
                </div>
            </Box>
            <Box className={`mb-6`}>
                <div className={`font-bold mb-2`}>5.Check chéo thông tin giữa Quyết định bổ nhiệm KTT và GTTT KTTT</div>
                <div className={`ml-2`}>
                    <ButtonToggle2 name={`name_2`} id="id_2" checked={`checked`} className={`justify-between mb-2`} label={`Họ và tên KTT`} positionButton={`right`} />
                    <TextField id="standard-basic" variant="standard" name="note1" placeholder={`Ghi chú`} size="small"className={`w-full`} />
                </div>
            </Box>
        </>
    );
};

export default EKYCInfoAccData;
