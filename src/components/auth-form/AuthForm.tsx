import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { Button, ErrorModal, Input, Label } from '@/components/common';
import { useAuthContext } from '@/context';
import { signIn, signUp } from '@/firebase/auth';
import { useModal } from '@/hooks';

import { IAuthFormProps } from './types';

export const AuthForm = ({ formType }: IAuthFormProps) => {
  const router = useRouter();

  const { user } = useAuthContext();
  const { isModalOpen, openModal, closeModal } = useModal();
  const [errorMessage, setErrorMessage] = useState('');
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (user) router.push('/my-photos');
  }, [user]);

  const onSubmit = async (data: FieldValues) => {
    const authFunc = formType === 'SignIn' ? signIn : signUp;
    const { error } = await authFunc(data.email, data.password);

    if (error) {
      setErrorMessage(error.message);
      return openModal();
    }

    router.push('/my-photos');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <div className='mb-4'>
        <Label>Email</Label>
        <Input register={register('email', { required: true })} required />
      </div>
      <div className='mb-4'>
        <Label>Password</Label>
        <Input type='password' register={register('password', { required: true })} required />
      </div>
      <div className='flex items-center justify-between'>
        <Button type='submit'>{formType}</Button>
      </div>
      <ErrorModal {...{ isModalOpen, closeModal, message: errorMessage }} />
    </form>
  );
};
