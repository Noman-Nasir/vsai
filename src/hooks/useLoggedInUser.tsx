import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuthContext } from '@/context/AuthContext';

/**
 * A hook to "protect" pages from unauthenticated users.
 * If the hook is used, unauthenticated users will be redirected to the
 * login page.
 */
export const useLoggedInUser = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push('/');
  }, [user]);

  return user;
};
