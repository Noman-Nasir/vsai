import { FirebaseError } from '@firebase/util';
import { doc, DocumentData, getFirestore, setDoc } from 'firebase/firestore';

import firebase_app from '../config';

const db = getFirestore(firebase_app);

interface IAddDataReturn {
  error?: FirebaseError;
}

/**
 * Utility method to add/update Firestore documents
 *
 * @param collection - Collection name
 * @param id - Document id
 * @param data - Data to add
 */
export const addDataToFS = async (collection: string, id: string, data: DocumentData): Promise<IAddDataReturn> => {
  try {
    await setDoc(doc(db, collection, id), data, { merge: true });
    return {};
  } catch (error) {
    return { error: error as FirebaseError };
  }
};
