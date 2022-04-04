import { data } from 'autoprefixer';
import React, { Fragment, useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FiTrash } from 'react-icons/fi';
import { UploadFile } from '@mui/icons-material';
import axios from 'axios';
const UploadImageButton = ({ type, sendDataToParent, className, label, mess, name }) => {
    const data = {
        sample_img: '',
        name: ''
    };
    const [file, setFile] = useState('');
    const [filepath, setFilePath] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);

    useEffect(() => {
        console.log('filename' + filename);
        if (file) {
            onSubmit(file);
        }
    }, [file]);

    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
        setFilePath(e.target.files[0].filepath);
        console.log(e);
        e.preventDefault();
    };
    const onSubmit = async (e) => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            console.log('select file ' + filename);
            var url = 'http://localhost:8583/business/api/v1/ocr';
            type == 'gpdkkd' ? (url = url + '/upload/businessRegistration') : type == 'visa' ? (url = url + '/upload/visa') : type == 'giay_dkmst' ? (url = url + '/upload/taxRegistration') : type == 'GTTT' ? (url = url + '/upload/personalId') : type == 'GTTT_ktt' ? (url = url + '/upload/personalId') : (url = url + '/upload/appoimentDecision');
            const res = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (progressEvent) => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
                    setTimeout(() => setUploadPercentage(0), 10000);
                }
            });
            //const { fileName, filePath } = res.data;
            // setUploadedFile({ fileName, filePath });
            setMessage(JSON.stringify(res.data), undefined, 4);
            console.log(JSON.stringify(res.data));
            sendDataToParent(type, res.data);
        } catch (err) {
            console.log(err);
            if (err.response && err.response.status == 500) {
                setMessage('There was a problem witht he server');
            } else {
                setMessage(err.response.data.msg);
            }
        }
    };
    return (
        <>
            <div className={`overflow-hidden relative ${className}`}>
                <button className={`bg-sky-600 rounded hover:bg-blue-light py-2 px-5 inline-flex items-center text-white font-bold`}>
                    <MdKeyboardArrowRight size={18} />
                    <span className={`ml-2`}>{label}</span>
                </button>
                <input
                    className={`cursor-pointer absolute block py-2 px-5 opacity-0 top-0 left-0 bottom-0`}
                    type="file"
                    name={name}
                    id="customFile"
                    onChange={onChange}
                    //accept="image/*"
                />
                <p className={`text-gray-500`}>{mess}</p>
            </div>
        </>
    );
};

export default UploadImageButton;
