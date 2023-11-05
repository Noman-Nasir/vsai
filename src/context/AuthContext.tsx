import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

import { LoadingPage } from '@/components/common/loading-page/LoadingPage';
import firebase_app from '@/firebase/config';

const auth = getAuth(firebase_app);

export const AuthContext = createContext<{ user: User | null }>({ user: null });

export const useAuthContext = () => useContext(AuthContext);

/**
 * React Context Provider for User Authentication. Context is subscribed to
 * firebase authentication and automatically updates the user state.
 */
export const AuthContextProvider = ({ children }: { children?: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, changedUser => {
      setUser(changedUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={{ user }}>{loading ? <LoadingPage /> : children}</AuthContext.Provider>;
};
