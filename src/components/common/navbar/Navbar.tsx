import { useAuthContext } from '@/context';
import { logout } from '@/firebase/auth';

export const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <nav className='border-gray-200 bg-gray-900'>
      <div className='flex justify-items justify-between p-4'>
        <a href='#' className='flex items-center ml-6'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Virtual Staging AI
          </span>
        </a>
        <div className='hidden w-full md:block md:w-auto mr-6' id='navbar-default'>
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            {user && (
              <li>
                <button
                  onClick={logout}
                  className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'
                  aria-current='page'
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
