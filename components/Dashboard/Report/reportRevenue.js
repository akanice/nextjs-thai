import React, { useEffect, useState } from 'react';
import FormSelect from '@components/Common/FormSelect';
import {HiArrowLeft} from 'react-icons/hi';
import FormInput from '@components/Common/FormInput';
import Button from '@components/Common/Button';
import Button3 from '@components/Common/Button3';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

const reportRevenue = () => {
    const options1 = [
        {title:'Đơn vị',value:"1"},
        {title:'Đơn vị 2',value:"2"},
    ]
    const options2 = [
        {title:'Nhóm quyền',value:"1"},
        {title:'Nhóm quyền 2',value:"2"},
    ]
    const dataTable = [
        {username:'user-1',fullname:"Afonso Davies",phone:"0123456789",status:"active",deparment:"Mars",position:"CEO",permision:""},
        {username:'user-1',fullname:"Afonso Davies",phone:"0123456789",status:"active",deparment:"Mars",position:"CEO",permision:""},
        {username:'user-1',fullname:"Afonso Davies",phone:"0123456789",status:"active",deparment:"Mars",position:"CEO",permision:""},
        {username:'user-1',fullname:"Afonso Davies",phone:"0123456789",status:"active",deparment:"Mars",position:"CEO",permision:""},
        {username:'user-1',fullname:"Afonso Davies",phone:"0123456789",status:"active",deparment:"Mars",position:"CEO",permision:""},
        {username:'user-1',fullname:"Afonso Davies",phone:"0123456789",status:"active",deparment:"Mars",position:"CEO",permision:""},
        {username:'user-1',fullname:"Afonso Davies",phone:"0123456789",status:"active",deparment:"Mars",position:"CEO",permision:""},
        {username:'user-8',fullname:"Afonso Davies",phone:"0123456789",status:"active",deparment:"Mars",position:"CEO",permision:""},
    ]
    const columns = [
        {Header: 'username',accessor:'username'},
        {Header: 'Họ và tên',accessor:'fullname'},
        {Header: 'Điện thoại',accessor:'phone'},
        {Header: 'Trạng thái',accessor:'status'},
        {Header: 'Đơn vị',accessor:'deparment'},
        {Header: 'Chức vụ',accessor:'position'},
        {Header: 'Nhóm quyền',accessor:'permision'},
    ]
    
    return (
        <>
            <div className='flex mb-5 items-center'>
                <HiArrowLeft size={16} />
                <span className="ml-2 font-bold">Quản lý người dùng</span>
            </div>
            
            <div className='search-bar flex justify-start gap-2 mb-5'>
                <FormInput type='text' placeholder='Tìm theo sđt, họ tên,...' />
                <FormSelect options={options1} />
                <FormSelect options={options2} />
                <Button label="Tìm kiếm" className={'h-12'}/>
                <Button3 label="Thêm mới" className={'h-12 ml-auto'}/>
            </div>

            <div className='data-table'>
                <ReactTable data={dataTable} columns={columns} defaultPageSize={15}
                    showPagination={true}
                    showPaginationTop={false}
                    showPaginationBottom={true}
                    showPageSizeOptions={true}
                    sortable={false}
                    className={``}
                />
            </div>
        </>
    );
};

export default reportRevenue;
