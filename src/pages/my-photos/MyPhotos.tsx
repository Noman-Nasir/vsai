import { Button } from '@/components/common/button';
import { AddPhotoGroup } from '@/components/my-photos/add-group';
import { Gallery } from '@/components/my-photos/gallery';
import { PhotoGroupsContextProvider } from '@/context/PhotoGroups';
import { useLoggedInUser } from '@/hooks/useLoggedInUser';
import { useModal } from '@/hooks/useModal';

export default function MyPhotosPage() {
  const user = useLoggedInUser();

  const { isModalOpen: isAddPhotosModalOpen, closeModal, openModal } = useModal(false);

  if (!user) return null;

  return (
    <PhotoGroupsContextProvider>
      <div className='flex justify-between mx-20 mt-2'>
        <span className='text-5xl'>My Photos</span>
        <Button onClick={openModal}>Upload Photos</Button>
      </div>
      <AddPhotoGroup {...{ isModalOpen: isAddPhotosModalOpen, closeModal }} />
      <Gallery />
    </PhotoGroupsContextProvider>
  );
}
