import Image from 'next/image';
import myImage from '@/../public/photo.avif';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Hello, World!</h1>
      <Image src={myImage} alt="My Image" placeholder="blur" />
    </main>
  );
}
