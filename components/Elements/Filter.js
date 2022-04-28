import React, { useEffect, useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { vi } from "date-fns/locale";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField,Select,MenuItem } from '@material-ui/core';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {TiExportOutline} from 'react-icons/ti';

const Filter = () => {
    const [status, setstatus] = useState('all');
    const handleChange = (event) => {
        setstatus(event.target.value);
    };
    const [status2, setstatus2] = useState('all');
    const handleChange2 = (event) => {
        setstatus2(event.target.value);
    };
    const [value, setValue] = useState(null);
    const [value2, setValue2] = useState(null);

    return (
        <>
            <div className={`filter-menu grid grid-cols-8 gap-3`}>
                <div className={`flex flex-col justify-between items-center bg-gray-100 p-2`}>
                    <span>Mã số thuế</span>
                    <TextField id="standard-basic" variant="standard" name="mst" />
                </div>
                <div className={`flex flex-col justify-between items-center bg-gray-100 p-2`}>
                    <span>Tên tổ chức</span>
                    <TextField id="standard-basic" variant="standard" name="ttc" />
                </div>
                <div className={`flex flex-col justify-between items-center bg-gray-100 p-2`}>
                    <span>Trạng thái</span>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="status"
                        value={status}
                        onChange={handleChange}
                        label="Trạng thái"
                        className={`w-full`}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
                <div className={`flex flex-col justify-between items-center bg-gray-100 p-2`}>
                    <span>Từ ngày</span>
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={vi}>
                        <DatePicker
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} name={`from_date`} />}
                        />
                    </LocalizationProvider>
                </div>
                <div className={`flex flex-col justify-between items-center bg-gray-100 p-2`}>
                    <span>Đến ngày</span>
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={vi}>
                        <DatePicker
                            value={value2}
                            onChange={(newValue2) => {
                                setValue2(newValue2);
                            }}
                            renderInput={(params) => <TextField {...params} name={`to_date`} />}
                        />
                    </LocalizationProvider>
                </div>
                <div className={`flex flex-col justify-between items-center bg-gray-100 p-2`}>
                    <span>Sắp xếp theo</span>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="status"
                        value={status2}
                        onChange={handleChange2}
                        className={`w-full`}
                    >
                        <MenuItem value="">
                        <em>Trạng thái</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
                <div className={`flex flex-col justify-center items-center p-2`}>
                    <button className={`bg-yellow-400 px-9 py-1 text-lg font-bold rounded uppercase`} onClick={``}>Tiếp tục</button>
                </div>
                <div className={`flex justify-center items-center text-md font-bold underline`}>
                    <button className={`text-md font-bold rounded mr-2`} onClick={``}><TiExportOutline size={24} /></button>
                    <span className={`text-cyan-600`}>Export</span>
                </div>
            </div>
            
        </>
    );
};

export default Filter;
