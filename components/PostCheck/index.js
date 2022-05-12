import React, { useEffect, useState } from 'react';
import Filter from '@components/Elements/Filter';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'name', label: 'Tên tổ chức', sub: 'Mã số thuế/Mã số ĐKKD', minWidth: 170 },
    { id: 'code', label: 'Số CIF', minWidth: 100 },
    { id: 'phone', label: 'Số điện thoại', minWidth: 100 },
    { id: 'ekyc', label: 'Hồ sơ EKYC', minWidth: 100 },
    { id: 'log', label: 'Log đăng ký', minWidth: 100 },
    { id: 'postcheck_info', label: 'Thông tin hậu kiểm', minWidth: 100 },
    { id: 'postcheck_user', label: 'USER HẬU KIỂM', minWidth: 100 },
    { id: 'postcheck_reg', label: 'THÔNG TIN ĐĂNG KÝ DỊCH VỤ', minWidth: 100 }
];

const data_ttc = { title: `CÔNG TY CP ABC`, sub: `0123456789` };
const data_cif = { title: `0123456`, sub: `  101008683658` };
const data_phone = { title: `0988277288`, sub: `abc@gmail.com` };
const data_log = [
    { time: `09:12:50  29/9/2021`, title: `Đăng ký CA`, status: `success` },
    { time: `09:12:50  29/9/2021`, title: `Đăng ký TK`, status: `success` },
    { time: `09:12:50  29/9/2021`, title: `Đăng ký CA`, status: `success` },
    { time: `09:12:50  29/9/2021`, title: `EKYC`, status: `success` },
    { time: `09:12:50  29/9/2021`, title: `Up hồ sơ`, status: `system_error` }
];
const data_profile_ekyc = [
    { label: `Giấy chứng nhận ĐKKD`, link: `link_giay_chung_nhan` },
    { label: `Quyết định bổ nhiệm KTT`, link: `link_giay_chung_nhan` },
    { label: `GTTT người đại diện PL`, link: `link_giay_chung_nhan` },
    { label: `GTTT kế toán trưởng`, link: `link_giay_chung_nhan` },
    { label: `Đăng ký mở TKTT`, link: `link_giay_chung_nhan` }
];
const data_pc_info = { status: 'pending', time: '09:04:55 30/9/2021', issue: [`Thông tin đại diện PL không khớp`, `Hồ sơ Quyết định bổ nhiệm KTT không hợp lệ`] };
// Demo: thay status bang 1 trong 3 gia tri {pending,approved,reject}
const data_pc_user = `trangvt`;
const data_pc_regservice = [
    { time: `09:12:50  29/9/2021`, title: `Đăng ký CA`, status: `success` },
    { time: `09:12:50  29/9/2021`, title: `Đăng ký TK`, status: `success` },
    { time: `09:12:50  29/9/2021`, title: `Đăng ký CA`, status: `success` },
    { time: `09:12:50  29/9/2021`, title: `EKYC`, status: `success` },
    { time: `09:12:50  29/9/2021`, title: `Up hồ sơ`, status: `system_error` }
];

function createData(ttc, cif, phone, profile_ekyc, log, pc_info, pc_user, pc_regservice) {
    ttc = renderColumnTTC(data_ttc);
    cif = renderColumnTTC(data_cif);
    phone = renderColumnTTC(data_phone);
    profile_ekyc = renderColumnProfile(profile_ekyc);
    log = renderColumnPClog(data_log);
    pc_info = renderColumnPCinfo(data_pc_info);
    pc_regservice = renderColumnPClog(data_pc_regservice);
    let _status;
    {
        data_pc_info.status == 'approved' ? (_status = `bg-white`) : data_pc_info.status == 'pending' ? (_status = `bg-cyan-50`) : (_status = `bg-red-50`);
    }
    return { ttc, cif, phone, profile_ekyc, log, pc_info, pc_user, pc_regservice, _status };
}
const renderColumnTTC = (data) => {
    return (
        <>
            <div>
                <b>{data.title}</b>
            </div>
            <div>{data.sub}</div>
        </>
    );
};
function renderColumnProfile(data) {
    return data.map((item) => <div key={item.id}>{item.label}</div>);
}
function renderColumnPClog(data) {
    return data.map((item, index) => (
        <div key={index} className={`flex justify-between`}>
            <div>{item.time}</div>
            <div>{item.title}</div>
            <div className={item.status == `success` ? 'text-green-400' : 'text-red-400'}>{item.status == `success` ? 'Thành công' : 'Lỗi hệ thống'}</div>
        </div>
    ));
}
function renderColumnPCinfo(data) {
    return (
        <div>
            {data.status == `approved` ? (
                <>
                    <div className={`text-lg text-black font-bold uppercase`}>Đã duyệt</div>
                    <div>{data.time}</div>
                </>
            ) : (
                <>
                    <div className={`text-lg font-bold uppercase ` + (data.status == `pending` ? 'text-green-400' : 'text-red-400')}>{data.status == `pending` ? 'Chờ duyệt' : 'Từ chối'}</div>
                    {data.status == `reject` ? (
                        data.issue?.map((item, index) => (
                            <div key={item.index}>
                                {index + 1}.{item}
                            </div>
                        ))
                    ) : (
                        <></>
                    )}
                </>
            )}
        </div>
    );
}
function renderColumnPCregservice(data) {}

const rows = [
    createData(data_ttc, data_cif, data_phone, data_profile_ekyc, data_log, data_pc_info, data_pc_user, data_pc_regservice),
    createData(data_ttc, data_cif, data_phone, data_profile_ekyc, data_log, data_pc_info, data_pc_user, data_pc_regservice),
    createData(data_ttc, data_cif, data_phone, data_profile_ekyc, data_log, data_pc_info, data_pc_user, data_pc_regservice),
    createData(data_ttc, data_cif, data_phone, data_profile_ekyc, data_log, data_pc_info, data_pc_user, data_pc_regservice),
    createData(data_ttc, data_cif, data_phone, data_profile_ekyc, data_log, data_pc_info, data_pc_user, data_pc_regservice),
    createData(data_ttc, data_cif, data_phone, data_profile_ekyc, data_log, data_pc_info, data_pc_user, data_pc_regservice),
    createData(data_ttc, data_cif, data_phone, data_profile_ekyc, data_log, data_pc_info, data_pc_user, data_pc_regservice),
    createData(data_ttc, data_cif, data_phone, data_profile_ekyc, data_log, data_pc_info, data_pc_user, data_pc_regservice)
];

const PostCheck = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(7);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <Filter />

            <Paper sx={{ width: '100%' }} className={`mt-3`}>
                <TableContainer sx={{ width: '100%' }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <tr className={`bg-teal-100`}>
                                {columns.map((column, index) => (
                                    <td key={index} className={`text-center p-2`}>
                                        <div className={`font-bold text-black uppercase`}>{column.label}</div>
                                        <div className={`text-xs`}>{column.sub}</div>
                                    </td>
                                ))}
                            </tr>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <tr key={row} className={`text-center shadow my-2 ` + row._status}>
                                        <td className={`border-b border-gray-300 p-2`}>{row.ttc}</td>
                                        <td className={`border-b border-gray-300 p-2`}>{row.cif}</td>
                                        <td className={`border-b border-gray-300 p-2`}>{row.phone}</td>
                                        <td className={`border-b border-gray-300 p-2`}>{row.profile_ekyc}</td>
                                        <td className={`border-b border-gray-300 p-2`}>{row.log}</td>
                                        <td className={`border-b border-gray-300 p-2`}>{row.pc_info}</td>
                                        <td className={`border-b border-gray-300 p-2`}>{row.pc_user}</td>
                                        <td className={`border-b border-gray-300 p-2`}>{row.pc_regservice}</td>
                                    </tr>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination rowsPerPageOptions={[5, 15, 25]} component="div" count={rows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
            </Paper>

            <div className={`h-24`}></div>
        </>
    );
};

export default PostCheck;
