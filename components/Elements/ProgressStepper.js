import React, { useEffect, useState } from 'react';

const ProgressStepper = (page) => {
    return (
        <>
            <div className="flex mb-9" id="ProgressStepper">
                {/* progress item 1 */}
                <div className="w-1/4 flex justify-center items-center">
                    <div className="relative mr-1">
                        {page.page == 1 ? (
                            <div className="w-8 h-8 mx-auto bg-zinc-700 rounded-full text-lg text-white flex items-center">
                                <span className="text-center text-white w-full">1</span>
                            </div>
                        ) : (
                            <div className="w-8 h-8 mx-auto bg-sky-200 rounded-full text-lg border border-sky-300 flex items-center">
                                <span className="text-center text-sky-400 w-full">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="text-xs text-left 2xl:text-base">
                        Đăng ký thông tin
                    </div>
                </div>
                {/* progress item 2 */}
                <div className="w-1/4 flex justify-center items-center">
                    <div className="relative mr-1">
                        <div className="absolute flex align-center items-center align-middle content-center" style={{ width: '258%', top: '50%', transform: 'translate(-112%, -50%)' }}>
                            <div className="w-full h-0.5 bg-main-color rounded items-center align-middle align-center flex-1">
                                <div className="w-0 bg-main-color py-0.5 rounded" />
                                {/* middle part 100 full & 50 half progressstatus*/}
                            </div>
                        </div>
                        {page.page > 2 ? (
                            <div className="w-8 h-8 mx-auto bg-sky-500 border border-main-color rounded-full text-lg text-white flex items-center">
                                <span className="text-center text-main-color w-full">
                                    <i className="fas fa-check"></i>
                                </span>
                            </div>
                        ) : page.page == 2 ? (
                            <div className="w-8 h-8 mx-auto bg-sky-500 border border-sky-500 rounded-full text-lg text-white flex items-center">
                                <span className="text-center w-full" style={{ color: 'white' }}>
                                    2
                                </span>
                            </div>
                        ) : (
                            <div className="w-8 h-8 mx-auto bg-white border border-main-color rounded-full text-lg text-white flex items-center">
                                <span className="text-center text-main-color w-full">2</span>
                            </div>
                        )}
                    </div>
                    <div className="text-xs text-center 2xl:text-base">
                        Hoàn thiện hồ sơ
                    </div>
                </div>
                {/* progress item 3 */}
                <div className="w-1/4 flex justify-center items-center">
                    <div className="relative mr-1">
                        <div className="absolute flex align-center items-center align-middle content-center" style={{ width: '258%', top: '50%', transform: 'translate(-112%, -50%)' }}>
                            <div className="w-full h-0.5 bg-main-color rounded items-center align-middle align-center flex-1">
                                <div className="w-0 bg-main-color py-0.5 rounded" />
                                {/* middle part 100 full & 50 half progressstatus*/}
                            </div>
                        </div>
                        {page.page > 3 ? (
                            <div className="w-8 h-8 mx-auto bg-white border border-main-color rounded-full text-lg text-white flex items-center">
                                <span className="text-center text-main-color w-full">3</span>
                            </div>
                        ) : page.page == 3 ? (
                            <div className="w-8 h-8 mx-auto bg-sky-500 border border-sky-500 rounded-full text-lg text-white flex items-center">
                                <span className="text-center text-main-color w-full">3</span>
                            </div>
                        ) : (
                            <div className="w-8 h-8 mx-auto bg-white border border-main-color rounded-full text-lg text-white flex items-center">
                                <span className="text-center text-main-color w-full">3</span>
                            </div>
                        )}
                    </div>
                    <div className="text-xs text-center 2xl:text-base">
                        Xác thực chữ ký số
                    </div>
                </div>
                {/* progress item 4 */}
                <div className="w-1/4 flex justify-center items-center">
                    <div className="relative mr-1">
                        <div className="absolute flex align-center items-center align-middle content-center" style={{ width: '258%', top: '50%', transform: 'translate(-112%, -50%)' }}>
                            <div className="w-full h-0.5 bg-main-color rounded items-center align-middle align-center flex-1">
                                <div className="w-0 bg-main-color py-0.5 rounded" />
                                {/* middle part 100 full & 50 half progressstatus*/}
                            </div>
                        </div>
                        {page.page > 4 ? (
                            <div className="w-8 h-8 mx-auto bg-white border border-main-color rounded-full text-lg text-white flex items-center">
                                <span className="text-center text-main-color w-full">4</span>
                            </div>
                        ) : page.page == 4 ? (
                            <div className="w-8 h-8 mx-auto bg-sky-500 border border-sky-500 rounded-full text-lg text-white flex items-center">
                                <span className="text-center text-main-color w-full">4</span>
                            </div>
                        ) : (
                            <div className="w-8 h-8 mx-auto bg-white border border-main-color rounded-full text-lg text-white flex items-center">
                                <span className="text-center text-main-color w-full">4</span>
                            </div>
                        )}
                    </div>
                    <div className="text-xs text-center 2xl:text-base">
                        Hoàn tất đăng ký
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default ProgressStepper;
