import { LandingPage } from '@/components/landing-page';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <div className='w-full max-w-md px-2 py-16 sm:px-0'>
        <LandingPage />
      </div>
    </main>
  );
}
