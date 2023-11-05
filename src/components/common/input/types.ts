import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  register?: UseFormRegisterReturn;
}
