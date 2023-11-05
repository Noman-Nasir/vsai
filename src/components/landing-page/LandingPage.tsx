import { Tab } from '@headlessui/react';

import { AuthForm } from '@/components/auth-form';

export const LandingPage = () => {
  const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

  const authForms = ['SignIn' as const, 'SignUp' as const];

  return (
    <Tab.Group>
      <Tab.List className='flex space-x-1 rounded-xl bg-blue-900/20 p-1'>
        {authForms.map(form => (
          <Tab
            key={form}
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
              )
            }
          >
            {form}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className='mt-2'>
        {authForms.map((formType, idx) => (
          <Tab.Panel
            key={idx}
            className={classNames(
              'rounded-xl bg-white p-3',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
            )}
          >
            <AuthForm formType={formType} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
