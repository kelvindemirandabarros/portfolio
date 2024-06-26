// Components:
import { Navbar } from '@/components/Navbar';
import { ProfileSection } from '@/components/ProfileSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <Navbar />

      <div className='container mt-24 mx-auto px-12 py-4'>
        <ProfileSection />

        <AboutSection />

        <ProjectsSection />

        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
