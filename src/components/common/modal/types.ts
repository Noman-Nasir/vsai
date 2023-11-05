import { ReactNode } from 'react';

export interface IModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  title: string;
  children: ReactNode;
}
