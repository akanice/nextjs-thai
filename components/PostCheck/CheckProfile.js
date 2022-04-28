import React, { useEffect, useState } from 'react';
import {ImDownload} from 'react-icons/im';
import ToggleButton from '@components/Elements/ToggleButton';
import EKYCInfo from './EKYCInfo';
import CreateAccount from './CreateAccount';
import Paper from '@mui/material/Paper';
import { TextField } from '@material-ui/core';

const CheckProfile = () => {
    const [tab, setTab] = useState(`info`);

    const renderSubHeader = () => {
      return <ToggleButton tab={tab} setTab={setTab} />;
    };
    return (
        <>
            <Paper className={`bg-gray-50 rounded shadow mb-6`}>
                <div className={`flex justify-between items-center p-2 mb-3`}>
                    <h1 className={`grow text-2xl text-center font-bold`}>Thông tin hậu kiểm</h1>
                    <div className={`flex underline text-green-500`}>
                        <span className={`mr-2`}>Download toàn bộ hồ sơ</span>
                        <ImDownload size={28} />
                    </div>
                </div>
                <div className={`w-full`}>
                    {renderSubHeader()}
                    {tab === `info` ? <EKYCInfo /> : <CreateAccount />}
                </div>
            </Paper>
            
            <div className={`flex justify-center items-center`}>
                <button className={`bg-yellow-400 px-9 py-2 text-lg font-bold rounded border border-yellow-500 uppercase mr-6 hover:bg-yellow-500`} onClick={``}>Duyệt hồ sơ</button>
                <button className={`bg-gray-200 px-9 py-2 text-lg font-bold rounded border border-gray-300 uppercase mr-6 hover:bg-gray-300`} onClick={``}>Từ chối hồ sơ</button>
                <TextField variant="standard" placeholder={`Lý do từ chối`} className={`w-64`}/>
            </div>

            <div className={`h-24`}></div>
        </>
    );
};

export default CheckProfile;
