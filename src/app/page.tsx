import Image from 'next/image';

// Components:
import { Navbar } from '@/components/Navbar';
import { ProfileSection } from '@/components/ProfileSection';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <Navbar />

      <div className='container mx-auto px-12 py-4'>
        <ProfileSection />
      </div>
    </main>
  );
}
