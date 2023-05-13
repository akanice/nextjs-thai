import React, {useState} from 'react';
import FormInput from '../FormInput';

import Button from '@components/Common/Button';
import Button3 from '@components/Common/Button3';

const ModalCreateUserGroup = ({name,checked,className}) => {

  // const [value, setValue] = useState(``);

  return (
    <>
      <div class="p-6">
        <div className='font-bold text-lg mb-5'>
          Thêm mới nhóm người dùng
        </div>
        <FormInput label={`Nhóm người dùng`} type="text" className={`mb-2`} />
        <div className='mb-2'>
          <h3 className='font-semibold'>Mô tả</h3>
          <textarea  className='border border-gray-200 outline-0 rounded-md p-3 w-full' />
        </div>
        <div className='mb-2'>
          <h3 className='font-semibold'>Phân quyền</h3>
          <div className='flex items-center gap-4'>
            <div className="w-1/2">
              <h5 className='bg-gray-100 p-2 text-center'>Chức năng</h5>
              <div className='h-48 w-full border border-gray-100'></div>
            </div>
            <div className="w-1/2">
              <h5 className='bg-gray-100 p-2 text-center'>Quyền</h5>
              <div className='h-48 w-full border border-gray-100'></div>
            </div>
          </div>
        </div>

        <label class="block cursor-pointer mb-5">
          <input type="checkbox" defaultChecked className="default:ring-2 mr-2" />
          Kích hoạt
        </label>

        <div className='flex jusfity-between'>
          <Button label="Bỏ qua" className={'h-12'}/>
          <Button3 label="Thêm mới" className={'h-12 ml-auto'}/>
        </div>
      </div>
    </>
  );
};
export default ModalCreateUserGroup;