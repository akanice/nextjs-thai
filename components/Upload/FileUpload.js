import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';
import LayoutGDKK from './LayoutGDKK';
const FileUpload = ({ type }) => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const onChange = (e) => {
        setFile(e.target.file[0]);
        setFilename(e.target.files[0].name);
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        try {
            var url = 'http://localhost:8583/business/api/v1/ocr';
            type == 'gdkk' ? (url = url + '/upload/businessRegistration') : type == 'visa' ? (url = url + '/upload/visa') : type == 'giay_dkmst' ? (url = url + '/upload/taxRegistration') : type == 'GTTT' ? (url = '/upload/personalId') : (url = url + '/upload/appoimentDecision');
            const res = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (progressEvent) => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
                    setTimeout(() => setUploadPercentage(0), 10000);
                }
            });
            const { fileName, filePath } = res.data;
            setUploadedFile({ fileName, filePath });
            setMessage(JSON.stringify(res.data), undefined, 4);
        } catch (err) {
            console.log(err);
            if (err.response && response.status == 500) {
                setMessage('There was a problem witht he server');
            } else {
                setMessage(err.response.data.msg);
            }
        }
    };
    return <LayoutGDKK onChange={onChange} onSubmit={onSubmit} fileName={filename} uploadPercentage={uploadPercentage} uploadedFile={uploadedFile}></LayoutGDKK>;
};
export default FileUpload;
