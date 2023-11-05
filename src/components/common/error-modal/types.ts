import { ReactNode } from 'react';

export interface IErrorModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  message: ReactNode;
}
