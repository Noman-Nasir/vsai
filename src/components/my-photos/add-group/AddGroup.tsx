import { FieldValues, useForm } from 'react-hook-form';

import { Button, Input, Label, Modal } from '@/components/common';
import { useAuthContext, usePhotoGroupsContext } from '@/context';

import { IAddPhotoGroupModalProps } from './types';
import { addMergeFiles } from './utils';

export const AddPhotoGroup = ({ isModalOpen, closeModal }: IAddPhotoGroupModalProps) => {
  const { user } = useAuthContext();
  const { photoGroups } = usePhotoGroupsContext();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const add = async (values: FieldValues) => {
    await addMergeFiles(values.files, user?.uid || '', photoGroups, values.groupName);
    closeModal();
  };

  return (
    <Modal {...{ closeModal, isModalOpen, title: 'Add Photo Group' }}>
      <form onSubmit={handleSubmit(add)}>
        <div className='mb-6'>
          <Label>Property Name (Optional)</Label>
          <Input placeholder='Birnaur 4' register={register('groupName')} list='groupNames' />
          <datalist id='groupNames'>
            {Object.keys(photoGroups).map(group => (
              <option key={group} value={group} />
            ))}
          </datalist>
        </div>
        <Label>
          Files *
          <div className='mb-6 cursor-pointer flex flex-col items-center justify-center pt-5 pb-6'>
            <svg
              className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 16'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
              />
            </svg>
            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
              <span className='font-semibold'>Click to upload</span> or drag and drop
            </p>
            <p className='text-xs text-gray-500 dark:text-gray-400'>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input
            id='dropzone-file'
            type='file'
            multiple
            accept='image/png, image/jpeg'
            required
            {...register('files', { required: true })}
          />
        </Label>
        <Button isLoading={isSubmitting} type='submit'>
          Submit
        </Button>
      </form>
    </Modal>
  );
};
