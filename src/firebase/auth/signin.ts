import { FirebaseError } from '@firebase/util';
import { getAuth, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';

import firebase_app from '../config';

const auth = getAuth(firebase_app);

interface ISignInReturn {
  result?: UserCredential;
  error?: FirebaseError;
}

/**
 * A basic Email/Password Login method for firebase authentication system
 *
 * @param email
 * @param password
 */
export const signIn = async (email: string, password: string): Promise<ISignInReturn> => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return { result };
  } catch (error) {
    return { error: error as FirebaseError };
  }
};
