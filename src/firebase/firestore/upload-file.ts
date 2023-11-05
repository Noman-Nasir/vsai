import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

const storage = getStorage();

interface IUploadFileProps {
  file: File;
  dir: string;
  name?: string;
}

/**
 * Utility to upload file to firebase storage.
 * Returns the URL for the uploaded file.
 *
 * @param file - File object to be uploaded
 * @param dir - Directory path to store file
 * @param name - File name. If not given, name from File object will be used
 */
export const uploadFile = async ({ file, dir, name }: IUploadFileProps) => {
  const storageRef = ref(storage, dir + name || file.name);
  const uploadTask = await uploadBytes(storageRef, file, {
    contentType: file.type,
  });

  return await getDownloadURL(uploadTask.ref);
};
