import { ILabelProps } from './types';

export const Label = ({ children, ...props }: ILabelProps) => {
  return (
    <label className='block text-gray-700 text-sm font-bold mb-2' {...props}>
      {children}
    </label>
  );
};
