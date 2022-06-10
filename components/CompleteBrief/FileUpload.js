import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { Button } from '@mui/material';
import ReactLoading from 'react-loading';
import axios from 'axios';

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const FileUpload = ({
        className,
        label,
        updateFilesCb,
        maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
        ...otherProps
    }) => {
    const fileInputField = useRef(null);
    const [files, setFile] = useState({});
    // let props = { a: 1, b: 2, c: 3};
    // let {a, ...otherProps} = props;
    const file1=null;
  
    return (
        <Button transparent onClick={() => fileInputField.current.click()} className={`${className}`}>
            <div className={`flex flex-col items-center w-40 h-48 rounded-xl border-main border-2 border-dotted`}>
                <div
                className={`flex self-center flex-col items-center bg-gray-50 justify-center h-full w-full relative`}>
                <input
                    onClick={(event) => {
                        event.target.value = null;
                    }}
                    ref={fileInputField}
                    className="hidden"
                    type="file"
                    accept="image/*"
                    multiple={true}
                    {...otherProps}
                    onChange={(e) => {
                        if (e.target?.files?.length > 0) {
                            setFile(e.target?.files[0]);
                        }
                    }}
                />
                
                {/*second part starts here*/}
                    <article>
                        <span>To Upload</span>
                        <section>
                        {Object.keys(files).map((fileName, index) => {
                            let file = files[fileName];
                            let isImageFile = file.type.split("/")[0] === "image";
                            return (
                            <section key={fileName}>
                                <div>
                                {isImageFile && (
                                    <img
                                    src={URL.createObjectURL(file)}
                                    alt={`file preview ${index}`}
                                    />
                                )}
                                <div isImageFile={isImageFile}>
                                    <span>{file.name}</span>
                                    <aside>
                                    <span>{convertBytesToKB(file.size)} kb</span>
                                    <i className="fas fa-trash-alt" />
                                    </aside>
                                </div>
                                </div>
                            </section>
                            );
                        })}
                        </section>
                    </article>
                    
                </div>

            </div>
            </Button>
    )
  }

export default FileUpload;  
