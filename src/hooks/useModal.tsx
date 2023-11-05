import { useState } from 'react';

/**
 * A hook to manage Modal states.
 * It returns the utilities to control modal's current state.
 */
export const useModal = (isOpen = false) => {
  const [isModalOpen, setIsOpen] = useState(isOpen);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return {
    isModalOpen,
    closeModal,
    openModal,
  };
};
