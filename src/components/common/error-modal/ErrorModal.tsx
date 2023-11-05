import { Modal } from '@/components/common';

import { IErrorModalProps } from './types';

export const ErrorModal = ({ isModalOpen, closeModal, message }: IErrorModalProps) => {
  return (
    <Modal title='Error' {...{ isModalOpen, closeModal }}>
      <div className='mt-2'>
        <p className='text-sm text-gray-500'>{message}</p>
      </div>

      <div className='mt-4'>
        <button
          type='button'
          className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};
