import Image from 'next/image';

// Components:
import { Navbar } from '@/components/Navbar';

export default function Backend() {
  return (
    <div className='flex flex-1 items-center justify-center flex-col'>
      <Navbar />

      <h1 className='mt-24'>Página para o backend do app EP</h1>

      <Image
        alt='Imagem das configurações do package.json da minha aplicação EP.'
        src='/images/projects/ep/package-json.jpeg'
        width={500}
        height={500}
        style={{ borderRadius: 20 }}
      />
    </div>
  );
}
