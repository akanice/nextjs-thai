import { data } from 'autoprefixer';
import React, { Fragment, useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FiTrash } from 'react-icons/fi';
import { UploadFile } from '@mui/icons-material';
import axios from 'axios';
const UploadButton = ({ label, mess, name, type, sendDataToParent }) => {
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
            sendDataToParent(res.data, type);
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
            <div className={`overflow-hidden relative`}>
                <button className={`bg-white hover:bg-blue-light border border-gray-300 py-2 px-4 inline-flex w-48 items-center`}>
                    <MdKeyboardArrowRight size={18} />
                    <span className={`ml-2`}>{label}</span>
                </button>
                <input
                    className={`cursor-pointer absolute block py-2 px-4 opacity-0 top-0 left-0 bottom-0 w-48`}
                    type="file"
                    name={name}
                    id="customFile"
                    onChange={onChange}
                    //accept="image/*"
                />
                <p className={`text-gray-500`}>{mess}</p>
            </div>

            {/* If have uploaded */}
            {filename.length > 0 ? (
                <ul className={`list-uploaded w-96`}>
                    <li className={`border border-gray-200 p-2 flex items-center`}>
                        <img src={filepath} width={48} height={48} className={`mr-2`} />
                        <p className={`flex-1`}>{filename}</p>
                        <div className={`cursor-pointer`} onClick={() => {}}>
                            <FiTrash size={16} />
                        </div>
                    </li>
                </ul>
            ) : null}
        </>
    );
};

export default UploadButton;
