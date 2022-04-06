import React from 'react';
import { Fragment } from 'react';
import FileUpload from './FileUpload';
const LayoutGDKK = ({ onChange, onSubmit, filename, uploadPercentage, uploadedFile }) => {
    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <div className="custom-file mb-4">
                    <input type="file" className="custom-file-input" id="customFile" onChange={onChange} />
                    <label className="custom-file-label" htmlFor="customFile">
                        {filename}
                    </label>
                </div>

                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" />
            </form>
            {uploadedFile ? (
                <div className="row mt-5">
                    <div className="col-md-6 m-auto"></div>
                    <h3 className="text-center">{uploadedFile.fileName}</h3>
                    <img style={{ width: '100%' }} src={uploadedFile.filePath} alt="" />
                </div>
            ) : null}
        </Fragment>
    );
};

export default LayoutGDKK;