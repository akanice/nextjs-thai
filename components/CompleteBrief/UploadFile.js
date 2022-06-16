import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { AiOutlineCloudUpload,AiOutlineZoomIn } from 'react-icons/ai';
import { Button } from '@mui/material';
import ReactLoading from 'react-loading';
import axios from 'axios';
import { FileUploader } from 'react-drag-drop-files';
const UploadFile = forwardRef((props, ref) => {
    const { sendDataToParent, type, setLoading, text, textSupport, label, defaultPicture, className } = props;
    const fileInput = useRef();
    const [file, setFile] = useState('');
    const [filepath, setFilePath] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const onBtnClick = () => {
        /*Collecting node-element and performing click*/
        fileInput.current.click();
      }
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
        e.preventDefault();
    };
    useEffect(() => {
        if (defaultPicture) setFile(defaultPicture);
    }, [defaultPicture]);

    useImperativeHandle(ref, () => ({
        selectedImage: () => {
            return file;
        }
    }));
    const onSubmit = async (e) => {
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append('file', file);
            if (localStorage.getItem('company_id') != null) {
                formData.append('company_id', localStorage.getItem('company_id'));
            }
            console.log('select file ' + filename);
            var url = 'http://localhost:8583/business/api/v1/ocr';
            type == 'gpdkkd' ? (url = url + '/upload/businessRegistration') : type == 'visa' ? (url = url + '/upload/visa') : type == 'giay_dkmst' ? (url = url + '/upload/taxRegistration') : type == 'GTTT' ? (url = url + '/upload/personalId') : type == 'GTTT_ktt' ? (url = url + '/upload/personalId') : (url = url + '/upload/appoimentDecision');
            const res = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (progressEvent) => {
                    //setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
                    //setTimeout(() => setUploadPercentage(0), 10000);
                }
            });
            //const { fileName, filePath } = res.data;
            // setUploadedFile({ fileName, filePath });
            setLoading(false);
            console.log(JSON.stringify(res.data));
            sendDataToParent(res.data);
        } catch (err) {
            setLoading(false);
            console.log(err);
            if (err.response && err.response.status == 500) {
                // setMessage('There was a problem witht he server');
            } else {
                // setMessage(err.response.data.msg);
            }
        }
    };
    const file1 = null; // Delete this and replace file1 with file
    // const file1 = "/images/logo_main.png";

    // Refer: https://dev.to/chandrapantachhetri/responsive-react-file-upload-component-with-drag-and-drop-4ef8
    
    return (
        <>
            <div className={`flex flex-col items-center w-40 ${className}`}>
                <div className={`h-48 rounded-xl border-main border-2 border-dotted`}>
                    <div className={`flex self-center flex-col items-center bg-gray-50 justify-center h-full w-full relative`}>
                        <input
                            onClick={(event) => {
                                event.target.value = null;
                            }}
                            ref={fileInput}
                            className="opacity-0 h-full w-full z-30"
                            type="file"
                            accept=""
                            multiple={true}
                            onChange={(e) => {
                                if (e.target?.files?.length > 0) {
                                    setFile(e.target?.files[0]);
                                }
                            }}
                        />
                        {file1 === null && ( // Change to "file" later
                            <div className={`absolute h-full flex flex-col justify-center items-center`}>
                                <AiOutlineCloudUpload size={24} />
                                <div className={`text-sm text-center`}>
                                    Kéo/thả tài liệu<br />vào đây hoặc
                                    <br /> <span className={`text-sky-500 underline`}>chọn từ máy tính</span>
                                </div>
                                <div className={`absolute bottom-0 text-sm text-gray-300`}>
                                    {textSupport}
                                </div>
                            </div>
                        )}
                        {file1 !== null && ( // Change to "file" later
                            <div className={`absolute h-full flex flex-col justify-center items-center z-50`}>
                                {/* <img className="w-full h-full object-cover" alt={'avatar'} src={typeof file === `string` ? file : file} /> */}
                                <img className="w-full h-full object-cover p-2" alt={'avatar'} src={'/images/sample_document.jpg'} />
                                <div className={`absolute flex flex-col h-full justify-between`}>
                                    <div className={`grow self-center flex flex-col justify-center`}>
                                        <div className={`flex justify-center items-center bg-white rounded-full w-12 h-12 shadow-lg cursor-pointer`}><AiOutlineZoomIn size={36} /></div>
                                    </div>
                                    <div className={`border border-gray-100 px-3 py-2 bg-white justify-self-end mb-2  cursor-pointer`} onClick={onBtnClick}>Tải file khác</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={`text-center my-3`}>{label}</div>
            </div>
        </>
    );
});
UploadFile.displayName = `UpdatePictureCircle`;
export default UploadFile;  
