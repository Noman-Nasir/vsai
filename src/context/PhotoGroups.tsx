import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { onSnapshot } from '@firebase/firestore';
import { doc, getFirestore } from 'firebase/firestore';

import { LoadingPage } from '@/components/common/loading-page';
import { IPhotoGroups } from '@/components/my-photos/types';
import { useAuthContext } from '@/context/AuthContext';
import firebase_app from '@/firebase/config';

const db = getFirestore(firebase_app);

const PhotoGroupsContext = createContext({ photoGroups: {} as IPhotoGroups });

export const usePhotoGroupsContext = () => useContext(PhotoGroupsContext);

/**
 * React Context Provider for Photo Groups for the loggedIn user. Context is subscribed to
 * firebase store and automatically updates the photo groups after any change.
 */
export const PhotoGroupsContextProvider = ({ children }: { children?: ReactNode }) => {
  const [photoGroups, setPhotoGroups] = useState<IPhotoGroups>({});
  const [loading, setLoading] = useState(true);

  const { user } = useAuthContext();

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'images', user?.uid || ''), d => {
      setPhotoGroups(d?.data() || {});
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <PhotoGroupsContext.Provider value={{ photoGroups }}>
      {loading ? <LoadingPage /> : children}
    </PhotoGroupsContext.Provider>
  );
};
