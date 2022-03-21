import React, { useEffect, useState } from 'react';

const Register = () => {

  return (
    <div className={`p-6`}>
      <div className={``}>
        <div className="container mx-auto py-6">
          <div className="flex mb-9" id="ProgressStepper"> 
            {/* progress item 1 */}
            <div className="w-1/5">
              <div className="relative mb-2">
                <div className="w-10 h-10 mx-auto bg-zinc-700 rounded-full text-lg text-white flex items-center">
                  <span className="text-center text-white w-full">
                    1 
                  </span>
                </div>
              </div>
              <div className="text-xs text-center 2xl:text-base">Nhập thông tin<br />doanh nghiệp</div>
            </div>
            {/* progress item 2 */}
            <div className="w-1/5">
              <div className="relative mb-2">
                <div className="absolute flex align-center items-center align-middle content-center" style={{width: 'calc(100% - 2.5rem - 1rem)', top: '50%', transform: 'translate(-50%, -50%)'}}>
                  <div className="w-full h-0.5 bg-main-color rounded items-center align-middle align-center flex-1">
                    <div className="w-0 bg-main-color py-0.5 rounded" />{/* middle part 100 full & 50 half progressstatus*/}
                  </div>
                </div>
                <div className="w-10 h-10 mx-auto bg-white border border-main-color rounded-full text-lg text-white flex items-center">
                  <span className="text-center text-main-color w-full">                        
                    2
                  </span>
                </div>
              </div>
              <div className="text-xs text-center 2xl:text-base">Upload<br />hồ sơ</div>
            </div>
            {/* progress item 3 */}
            <div className="w-1/5">
              <div className="relative mb-2">
                <div className="absolute flex align-center items-center align-middle content-center" style={{width: 'calc(100% - 2.5rem - 1rem)', top: '50%', transform: 'translate(-50%, -50%)'}}>
                  <div className="w-full h-0.5 bg-main-color rounded items-center align-middle align-center flex-1">
                    <div className="w-0 bg-green-300 py-1 rounded" style={{width: '${procentBar}%'}} />{/* middle part 100 full & 50 half progressstatus*/}
                  </div>
                </div>
                <div className="w-10 h-10 mx-auto bg-white border border-main-color rounded-full text-lg text-white flex items-center">
                  <span className="text-center text-main-color w-full">                        
                    3
                  </span>
                </div>
              </div>
              <div className="text-xs text-center 2xl:text-base">Nhập thông tin<br />tài khoản</div>
            </div>
            {/* progress item 4 */}
            <div className="w-1/5">
              <div className="relative mb-2">
                <div className="absolute flex align-center items-center align-middle content-center" style={{width: 'calc(100% - 2.5rem - 1rem)', top: '50%', transform: 'translate(-50%, -50%)'}}>
                  <div className="w-full h-0.5 bg-main-color rounded items-center align-middle align-center flex-1">
                    <div className="w-0 bg-green-300 py-1 rounded" style={{width: '${procentBar}%'}} />{/* middle part 100 full & 50 half progressstatus*/}
                  </div>
                </div>
                <div className="w-10 h-10 mx-auto bg-white border border-main-color rounded-full text-lg text-white flex items-center">
                  <span className="text-center text-main-color w-full">                        
                    4
                  </span>
                </div>
              </div>
              <div className="text-xs text-center 2xl:text-base">Đăng ký<br />dịch vụ tiện ích</div>
            </div>
            {/* progress item 5 */}
            <div className="w-1/5">
              <div className="relative mb-2">
                <div className="absolute flex align-center items-center align-middle content-center" style={{width: 'calc(100% - 2.5rem - 1rem)', top: '50%', transform: 'translate(-50%, -50%)'}}>
                  <div className="w-full h-0.5 bg-main-color rounded items-center align-middle align-center flex-1">
                    <div className="w-0 bg-green-300 py-1 rounded" style={{width: '${procentBar}%'}} />{/* middle part 100 full & 50 half progressstatus*/}
                  </div>
                </div>
                <div className="w-10 h-10 mx-auto bg-white border border-main-color rounded-full text-lg text-white flex items-center">
                  <span className="text-center text-main-color w-full">                        
                    5
                  </span>
                </div>
              </div>
              <div className="text-xs text-center 2xl:text-base">Xác nhận đăng ký<br />tài khoản</div>
            </div>
          </div>

          <div className={`relative border border-gray-600 rounded p-6 mx-36 flex justify-center`}>
            <div className={`absolute top-3 right-3`}>
              <a href='#' className={`text-link underline`}>Hướng dẫn</a>  
            </div>
            <div className={`flex-justify-center`}>
              <h2 className={`text-xl text-center`}>Nhập thông tin doanh nghiệp của quý khách tại đây</h2>
              <form className="px-8 pt-6 pb-8 mb-4 w-128">
                <div className="mb-4">
                  <input className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nhập số giấy tờ pháp lý của tổ chức" />
                </div>
                <div className={`text-sm mb-3 text-gray-400`}>*Số giấy tờ pháp lý chính là mã số đăng kí doanh nghiệp của tổ chức</div>
                  <div className="mb-6">
                    <select className="form-select appearance-none block w-full py-3 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border  border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                      <option selected>Chọn loại hình tổ chức</option>
                      <option value={1}>Doanh nghiệp tư nhân</option>
                      <option value={2}>Công ty TNHH 01 thành viên</option>
                      <option value={3}>Công ty cổ phần</option>
                    </select>
                  </div>
                <div className="flex items-center justify-center">
                  <button className="bg-second-color hover:text-yellow-500 text-black font-medium py-2 px-6 rounded focus:outline-none focus:shadow-outline" type="button">
                    Tiếp tục
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
