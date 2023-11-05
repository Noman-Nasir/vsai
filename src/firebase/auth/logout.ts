import { getAuth } from 'firebase/auth';

import firebase_app from '@/firebase/config';

const auth = getAuth(firebase_app);

/**
 * Utility to logout user using Firebase Auth module
 */
export const logout = async () => await auth.signOut();
