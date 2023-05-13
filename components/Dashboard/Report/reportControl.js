import React, { useEffect, useState } from 'react';
import FormSelect from '@components/Common/FormSelect';
import { Box } from '@material-ui/core';
import {HiArrowLeft} from 'react-icons/hi';
import {FaRegEdit} from 'react-icons/fa';
import {IoMdClose} from 'react-icons/io';
import FormInput from '@components/Common/FormInput';
import Button from '@components/Common/Button';
import Button3 from '@components/Common/Button3';
import CustomModal from '@components/Common/Modal/Modal';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import ModalCreateUserGroup from '@components/Common/Modal/ModalCreateUserGroup';

const reportControl = () => {
    const options1 = [
        {title:'Đơn vị',value:"1"},
        {title:'Đơn vị 2',value:"2"},
    ]
    const options2 = [
        {title:'Nhóm quyền',value:"1"},
        {title:'Nhóm quyền 2',value:"2"},
    ]
    const dataTable = [
        {orderID:'1',usergroup:'Administrator',description:"Administrator",action:{edit:'actionEdit',delete:'actionDelete'}},
        {orderID:'2',usergroup:'Moderator',description:"Moderator",action:{edit:'actionEdit',delete:'actionDelete'}},
        {orderID:'3',usergroup:'Moderator',description:"Moderator",action:{edit:'actionEdit',delete:'actionDelete'}},
        {orderID:'4',usergroup:'Moderator',description:"Moderator",action:{edit:'actionEdit',delete:'actionDelete'}},
    ]
    const columns = [
        {Header: '#',accessor:'orderID'},
        {Header: 'Nhóm người dùng',accessor:'usergroup'},
        {Header: 'Mô tả',accessor:'description'},
        {id:"action",Header: 'Chức năng',accessor: 'action',
            Cell: props => (
                <div className='text-center flex justify-center items-center'>
                    <span className='edit mr-2'><FaRegEdit /> {props.action}</span>
                    <span className='edit'><IoMdClose /> {props.action}</span>
                    {/* <span className='number'>{props.delete}</span> */}
                </div>
            )},
    ]
    const [openModal, setOpenModal] = useState(false);
    const openModalNew = () => setOpenModal(true);
    const closeModalNew = () => setOpenModal(false);
    
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
                <Button3 label="Thêm mới" className={'h-12 ml-auto'} onClick={openModalNew}/>
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

            <CustomModal setIsOpen={setOpenModal} isOpen={openModal} onClose={closeModalNew}>
                <Box className={`min-w-[48rem]`}>
                    <ModalCreateUserGroup />
                </Box>
            </CustomModal>
        </>
    );
};

export default reportControl;
