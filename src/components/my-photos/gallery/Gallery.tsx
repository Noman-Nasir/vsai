import { useEffect, useState } from 'react';

import { UNASSIGNED_BUCKET } from '@/components/my-photos/add-group/utils';
import { usePhotoGroupsContext } from '@/context';

import { PhotoGroup } from './PhotoGroup';

export const Gallery = () => {
  const { photoGroups } = usePhotoGroupsContext();

  const groupNames = Object.keys(photoGroups);
  const hasPhotos = !!groupNames.length;
  const [selectedGroup, setSelectedGroup] = useState(UNASSIGNED_BUCKET);

  useEffect(() => setSelectedGroup(groupNames[0]), [photoGroups]);

  if (!hasPhotos) {
    return (
      <div className='relative bg-opacity-0 h-96 w-screen flex items-center justify-center'>
        <span className='text-3xl'>So silent, add some photos</span>
      </div>
    );
  }

  return (
    <>
      <div className='flex items-center justify-center py-4 md:py-8 flex-wrap'>
        {Object.keys(photoGroups).map(name => (
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none 
            focus:shadow-outline mr-1 ${name === selectedGroup && 'rounded-full'}`}
            onClick={() => setSelectedGroup(name)}
            key={name}
          >
            {name}
          </button>
        ))}
      </div>
      <PhotoGroup filePaths={photoGroups[selectedGroup]} />
    </>
  );
};
