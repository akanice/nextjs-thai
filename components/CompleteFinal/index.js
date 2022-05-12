import React, { useEffect, useState } from 'react';
import ProgressStepper from '@components/Elements/ProgressStepper';
import { AiFillCheckCircle, AiOutlineRightCircle, AiOutlineDownCircle } from 'react-icons/ai';
import { data } from 'autoprefixer';

const CompleteFinal = (page) => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalWarning, setOpenModalWarning] = useState(false);
    const openModalGuide = () => setOpenModal(true);
    const closeModalGuide = () => setOpenModal(false);
    const [tab, setTab] = useState(`step1`);
    const [data, setData] = useState({});
    useEffect(() => {
        data.company_name = localStorage.getItem('company_name');
        setData(data);
    }, []);
    return (
        <>
            <ProgressStepper page={4} />
            <div className={`border-b border-dashed border-gray-300 mb-9`}></div>

            <div className={`flex justify-center mb-3 text-green-500`}>
                <AiFillCheckCircle size={36} />
            </div>
            <h1 className={`font-bold text-center text-xl text-black mb-2`}>Đăng kí tài khoản thành công</h1>
            <p className={`text-black text-center mb-6`}>
                PVcomBank sẽ thực hiện xác minh hồ sơ thông tin của Doanh nghiệp theo quy định
                <br />
                của NHNN trong vòng 01 ngày làm việc và sẽ phản hồi kết quả thông qua Email/SMS
            </p>
            <div className={`flex justify-center mb-9`}>
                <ul className={`list-disc`}>
                    <li className={`mb-2 flex items-center list-item list-inside`}>
                        Tên tổ chức:<span className={`ml-2 text-sky-500`}>{data?.company_name}</span>
                    </li>
                    <li className={`mb-2 flex items-center list-item list-inside`}>
                        Số tài khoản thanh toán: <span className={`ml-2 text-sky-500`}>0313449404583</span>
                    </li>
                    <li className={`mb-2 flex items-center list-item list-inside`}>
                        Số CIF: <span className={`ml-2 text-sky-500`}>108678678</span>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className={`flex justify-center flex-col items-center mb-6`}>
                <div className={`border border-gray-200 max-w-screen-md w-full`}>
                    <div className={`bg-gray-50 py-2 px-9 font-bold text-black flex justify-between`}>
                        <span>Dịch vụ khác</span>
                        <span className={`w-36 text-center`}>Trạng thái</span>
                    </div>
                </div>

                <div className="accordion max-w-screen-md w-full border border-gray-200 -mt-px" id="accordionExample">
                    <div className="accordion-item py-3 px-9 border-b border-gray-200">
                        <h2 className="accordion-header mb-0 relative" id="headingOne">
                            <button className="relative flex justify-between items-center w-full transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded={tab == 'step1' ? 'true' : 'false'} aria-controls="collapseOne">
                                <div className={`flex flex-col items-start`}>
                                    <span className={`font-bold text-normal text-sky-500 flex items-center`}>
                                        Dịch vụ Internet Banking KHDN
                                        {tab == `step1` ? <AiOutlineDownCircle className={`ml-3`} size={`18`} /> : <AiOutlineRightCircle className={`ml-3`} size={`18`} />}
                                    </span>
                                    <p className={`text-black`}>12.000đ/tháng</p>
                                </div>
                                <a href="#" className={`w-36 py-2 px-4 bg-yellow-100 border border-yellow-400 rounded`}>
                                    Đăng ký ngay
                                </a>
                            </button>
                        </h2>
                        <div id="collapseOne" className={`accordion-collapse collapse pb-9 ` + (tab == `step1` ? 'show' : '')} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className={`border-t border-dashed border-sky-100 mt-6 mb-6`}></div>
                            <div>
                                Internet Banking là dịch vụ Ngân hàng điện tử của PVcomBank nhằm mang đến cho Khách hàng một phương thức quản lý tài chính an toàn và tiện lợi.
                                <br />
                                Với dịch vụ này, khách hàng có thể thực hiện các giao dịch chuyển tiền, nạp tiền điện thoại, thanh toán hóa đơn, gửi tiết kiệm trực tuyến… bất kỳ lúc nào, bất kỳ nơi đâu thông qua thiết bị điện tử có kết nối Internet mà không cần đến quầy giao dịch.
                            </div>
                        </div>
                    </div>
                    {/* Tab 1 */}

                    <div className="accordion-item py-3 px-9">
                        <h2 className="accordion-header mb-0 relative" id="heading2">
                            <button className="relative flex justify-between items-center w-full transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded={tab == 'step2' ? 'true' : 'false'} aria-controls="collapse2">
                                <div className={`flex flex-col items-start`}>
                                    <span className={`font-bold text-normal text-sky-500 flex items-center`}>
                                        Dịch vụ SMS Banking KHDN
                                        {tab == `step2` ? <AiOutlineDownCircle className={`ml-3`} size={`18`} /> : <AiOutlineRightCircle className={`ml-3`} size={`18`} />}
                                    </span>
                                    <p className={`text-black`}>18.000đ/tháng</p>
                                </div>
                                <a href="#" className={`w-36 py-2 px-4 bg-yellow-100 border border-yellow-400 rounded`}>
                                    Đăng ký ngay
                                </a>
                            </button>
                        </h2>
                        <div id="collapse2" className={`accordion-collapse collapse pb-9 ` + (tab == `step2` ? 'show' : '')} aria-labelledby="heading2" data-bs-parent="#accordionExample">
                            <div className={`border-t border-dashed border-sky-100 mt-6 mb-6`}></div>
                            <div>
                                SMS Banking PVcombank là một dịch vụ ngân hàng điện tử được PVcombank triển khia nhằm thông báo đến số điện thoại đăng ký số dư tài khoản hiện tại khi có sự biến động như có người chuyển tiền, rút tiền, chuyển khoản cho người khác.
                                <br />
                                Bên cạnh đó, khi sử dụng SMS Banking PVcombank thì bạn có hưởng nhiều lợi ích như:
                                <br />
                                - Truy vấn các giao dịch gần nhất, lãi suất, tỷ giá ... nhanh chóng, không cần phải ra chi nhánh/phòng giao dịch PVcombank.
                                <br />
                                - Kiểm soát được số dư tài khoản của mình, từ đó chi tiêu hợp lý hơn.
                                <br />
                                - Kiểm tra số tài khoản PVcombank dễ dàng.
                                <br />
                            </div>
                        </div>
                    </div>
                    {/* Tab 2 */}
                </div>
            </div>

            <div className={`flex justify-center`}>
                <button className="bg-second-color hover:text-white text-black font-medium py-2 px-9 mt-3 rounded focus:outline-none focus:shadow-outline" type="button">
                    Trải nghiệm ngay
                </button>
            </div>
        </>
    );
};

export default CompleteFinal;
