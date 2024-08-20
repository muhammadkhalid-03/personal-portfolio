'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [visibleIntro, setVisibleIntro] = useState([false, false, false]);


  useEffect(() => {
      const timeouts: NodeJS.Timeout[] = [];
      visibleIntro.forEach((_: any, index: number) => {
          timeouts.push(setTimeout(() => {
              setVisibleIntro(prev => prev.map((v, i) => i === index ? true : v));
          }, index * 700)); // Adjust the delay (500ms) as needed
      });

      return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, []);

  return (
    <main className="flex flex-col justify-center items-center min-h-screen p-6">
      <div className="flex flex-row">

        <div className={`p-16 font-mono space-y-4 m-16 transform transition-opacity duration-1000 ease-in-out ${visibleIntro[0] ? 'opacity-100': 'opacity-0'}`}>
          <p className="text-6xl">Hi,</p>
          <p className="text-6xl">I'm Muhammad</p>
          <div className="space-y-2">
            <p className="text-lg">A full-stack engineer & junior at Grinnell College</p>
          </div>
        </div>
        <div className={`text-7xl p-16 font-mono m-16 transform transition-opacity duration-1000 ease-in-out ${visibleIntro[1] ? 'opacity-100': 'opacity-0'}`}>
          <Image
            src="/Professional Photo.jpg"
            alt="Me"
            width={800}
            height={800}
            className="rounded-full object-cover aspect-square"
          />
        </div>
      </div>

    </main>
  );
}
