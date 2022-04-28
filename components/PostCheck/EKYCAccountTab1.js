import React, { useEffect, useState } from 'react';
import EKYCShowData from '@components/Common/EKYCShowData';

const EKYCAccountTab1 = () => {

    return (
        <>
            <div className={`section mb-9`}>{/* Section 1 */}
                <div className={`grid grid-cols-2 gap-4`}>
                    <div className={`flex justify-self-center`}>
                        <div className={`mr-6`}>
                            <div className={`w-36 h-48 border border-gray-100`} style={{backgroundImage:"url('/images/sample_img.png')",backgroundSize:"cover",backgroundPosition:"center center"}}></div>
                            <div className={`flex justify-center`}>
                                <span className={`underline text-link mr-3`}>Phóng to</span>
                                {/* <span className={`underline text-link`}>Print</span> */}
                            </div>
                        </div>
                        <div className={`mr-6`}>
                            <div className={`w-36 h-48 border border-gray-100`} style={{backgroundImage:"url('/images/sample_img.png')",backgroundSize:"cover",backgroundPosition:"center center"}}></div>
                            <div className={`flex justify-center`}>
                                <span className={`underline text-link mr-3`}>Phóng to</span>
                                {/* <span className={`underline text-link`}>Print</span> */}
                            </div>
                        </div>
                        <div className={``}>
                            <div className={`w-36 h-48 border border-gray-100`} style={{backgroundImage:"url('/images/sample_img.png')",backgroundSize:"cover",backgroundPosition:"center center"}}></div>
                            <div className={`flex justify-center`}>
                                <span className={`underline text-link mr-3`}>Phóng to</span>
                                {/* <span className={`underline text-link`}>Print</span> */}
                            </div>
                        </div>
                    </div>
                    <div className={`relative`}>
                        <h3 className={`uppercase text-link text-center font-bold mb-6`}>Thông tin tổ chức</h3>
                        <div className={`absolute top-0 right-1 text-link font-bold underline`}>Print</div>
                        <div className={`flex justify-between mb-6 bg-gray-100 p-3`}>
                            <div>
                                <EKYCShowData label={`Tên tổ chức`} value={`Công ty CP ABC`} className={`mb-3`}/>
                                <EKYCShowData label={`Ngày cấp lần đầu`} value={`20/12/2015`} className={`mb-3`}/>
                                <EKYCShowData label={`Địa chỉ trụ sở chính`} value={`22 Ngô Quyền, Hoàn Kiếm, Hà Nội`} className={`mb-3`}/>
                            </div>
                            <div>
                                <EKYCShowData label={`Mã số ĐKKD`} value={`001187007888`} className={`mb-3`}/>
                                <EKYCShowData label={`Nơi cấp`} value={`TP Hà Nội`} className={`mb-3`}/>
                                <EKYCShowData label={`Số điện thoại liên hệ`} value={`0123456789`} className={`mb-3`}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`section`}>{/* Section 2 */}
                <div className={`grid grid-cols-2 gap-4`}>
                    <div className={`relative`}>
                        <h3 className={`uppercase text-link text-center font-bold mb-6`}>Thông tin người đại diện Pháp luật</h3>
                        <div className={`flex justify-between mb-6 bg-gray-100 p-3`}>
                            <div>
                                <EKYCShowData label={`Tên tổ chức`} value={`Công ty CP ABC`} className={`mb-3`}/>
                                <EKYCShowData label={`Ngày cấp lần đầu`} value={`20/12/2015`} className={`mb-3`}/>
                                <EKYCShowData label={`Địa chỉ trụ sở chính`} value={`22 Ngô Quyền, Hoàn Kiếm, Hà Nội`} className={`mb-3`}/>
                            </div>
                            <div>
                                <EKYCShowData label={`Mã số ĐKKD`} value={`001187007888`} className={`mb-3`}/>
                                <EKYCShowData label={`Nơi cấp`} value={`TP Hà Nội`} className={`mb-3`}/>
                                <EKYCShowData label={`Số điện thoại liên hệ`} value={`0123456789`} className={`mb-3`}/>
                            </div>
                        </div>
                        <h3 className={`uppercase text-link text-center font-bold mb-6`}>Thông tin người đại diện Pháp luật</h3>
                        <div className={`flex justify-between mb-6 bg-gray-100 p-3`}>
                            <div>
                                <EKYCShowData label={`Tên tổ chức`} value={`Công ty CP ABC`} className={`mb-3`}/>
                                <EKYCShowData label={`Ngày cấp lần đầu`} value={`20/12/2015`} className={`mb-3`}/>
                                <EKYCShowData label={`Địa chỉ trụ sở chính`} value={`22 Ngô Quyền, Hoàn Kiếm, Hà Nội`} className={`mb-3`}/>
                            </div>
                            <div>
                                <EKYCShowData label={`Mã số ĐKKD`} value={`001187007888`} className={`mb-3`}/>
                                <EKYCShowData label={`Nơi cấp`} value={`TP Hà Nội`} className={`mb-3`}/>
                                <EKYCShowData label={`Số điện thoại liên hệ`} value={`0123456789`} className={`mb-3`}/>
                            </div>
                        </div>
                    </div>
                    <div className={`relative`}>
                        <h3 className={`uppercase text-link text-center font-bold mb-1`}>Thông tin đăng ký dịch vụ tiện ích</h3>
                        <h4 className={`text-link text-center font-bold mb-6`}>1. Dịch vụ SMS Banking</h4>
                        <table className={`table-auto table-ekyc w-full mb-9`}>
                            <thead>
                                <tr>
                                    <th>Họ và tên</th>
                                    <th>Chức vụ</th>
                                    <th>Số GTTT</th>
                                    <th>Số ĐT</th>
                                    <th>Email</th>
                                    <th>Dịch vụ ĐK</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                        <h4 className={`text-link text-center font-bold mb-6`}>2. Dịch vụ Internet Banking</h4>
                        <table className={`table-auto table-ekyc w-full mb-9`}>
                            <thead>
                                <tr>
                                    <th>Họ và tên</th>
                                    <th>Chức vụ</th>
                                    <th>Số GTTT</th>
                                    <th>Số ĐT</th>
                                    <th>Số Email</th>
                                    <th>Quyền</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EKYCAccountTab1;
