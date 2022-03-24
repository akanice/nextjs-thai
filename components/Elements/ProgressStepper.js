import React, { useEffect, useState } from 'react';
 
const ProgressStepper = (page) => {
  console.log(page)
  return (
    <>
      <div className="flex mb-9" id="ProgressStepper"> 
        {/* progress item 1 */}
        <div className="w-1/5">
          <div className="relative mb-2">
            {
              page.page == 1 ? 
              <div className="w-10 h-10 mx-auto bg-zinc-700 rounded-full text-lg text-white flex items-center">
                <span className="text-center text-white w-full">
                  1 
                </span>
              </div>
             :
              <div className="w-10 h-10 mx-auto bg-zinc-700 rounded-full text-lg text-white flex items-center" style={{backgroundColor: "green"}} >
                  <span className="text-center text-white w-full">
                    <i className="fas fa-check"></i>
                  </span>
              </div>
            } 
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
            {
              page.page > 2 ? 
                <div className="w-10 h-10 mx-auto bg-white border border-main-color rounded-full text-lg text-white flex items-center" style={{backgroundColor:"green"}}>
                  <span className="text-center text-main-color w-full">
                    <i className="fas fa-check"></i>
                  </span>
               </div> 
               : page.page == 2 ?
               <div className="w-10 h-10 mx-auto bg-white border border-main-color rounded-full text-lg text-white flex items-center" style={{backgroundColor:"rgb(63 63 70 / var(--tw-bg-opacity))"}}>
                  <span className="text-center text-main-color w-full" style={{color:"white"}}>
                    2
                  </span>
               </div> 
               :
               <div className="w-10 h-10 mx-auto bg-white border border-main-color rounded-full text-lg text-white flex items-center">
                  <span className="text-center text-main-color w-full">
                    2
                  </span>
               </div> 
            }
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
            {
              page.page > 3 ? 
                <div className="w-10 h-10 mx-auto bg-white border border-main-color rounded-full text-lg text-white flex items-center" style={{backgroundColor:"green"}}>
                  <span className="text-center text-main-color w-full">                        
                    3
                  </span>
                </div>
               : page.page == 3 ?
                <div className="w-10 h-10 mx-auto bg-white border border-main-color rounded-full text-lg text-white flex items-center" style={{backgroundColor:"rgb(63 63 70 / var(--tw-bg-opacity))"}}>
                  <span className="text-center text-main-color w-full">                        
                      3
                  </span>
                </div>
               :
                <div className="w-10 h-10 mx-auto bg-white border border-main-color rounded-full text-lg text-white flex items-center">
                  <span className="text-center text-main-color w-full">                        
                      3
                  </span>
                </div>
            }
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
    </>
  );
};

export default ProgressStepper;
