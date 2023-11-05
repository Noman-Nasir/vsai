import { FirebaseError } from '@firebase/util';
import { createUserWithEmailAndPassword, getAuth, UserCredential } from 'firebase/auth';

import firebase_app from '@/firebase/config';

const auth = getAuth(firebase_app);

interface ISignUpReturn {
  result?: UserCredential;
  error?: FirebaseError;
}

/**
 * A basic Email/Password Signup method for firebase authentication system
 *
 * @param {string} email
 * @param {string} password
 */
export const signUp = async (email: string, password: string): Promise<ISignUpReturn> => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return { result };
  } catch (error) {
    return { error: error as FirebaseError };
  }
};
