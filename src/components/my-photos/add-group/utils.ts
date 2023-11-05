import { IPhotoGroups } from '@/components/my-photos/types';
import { addDataToFS, uploadFile } from '@/firebase/firestore';

export const UNASSIGNED_BUCKET = 'Ungrouped';

/**
 * Utility responsible for upload images to cloud storage and saving the image URLs
 * to firebase.
 * If the group with the group name is already present, new image is added to the group.
 * If no group name is given, file is added to a default "unassigned" bucket.
 *
 * @param fileList - Filelist object of selected files
 * @param userId - user id to be used as directory path
 * @param photoGroups - Existing photos in the selected group/property
 * @param groupName - Name of the group; If not given photos are assigned to the default group
 */
export const addMergeFiles = async (
  fileList: FileList,
  userId: string,
  photoGroups: IPhotoGroups,
  groupName: string,
) => {
  groupName = groupName || UNASSIGNED_BUCKET;
  const files: File[] = Array.from(fileList);
  const isExistingGroup = Object.keys(photoGroups).includes(groupName);

  const uploadTasks = files.map(file =>
    uploadFile({
      file,
      dir: `images/${userId}/`,
      name: `${userId}-${groupName}-${file.name}`,
    }),
  );

  const filePaths = await Promise.all(uploadTasks);

  const group = {
    [groupName]: isExistingGroup ? [...filePaths, ...photoGroups[groupName]] : filePaths,
  };

  await addDataToFS('images', userId, group);
};
