'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";



export default function Home() {
  const [visibleIntro, setVisibleIntro] = useState([false, false]);


  useEffect(() => {
      const timeouts: NodeJS.Timeout[] = [];
      visibleIntro.forEach((_: any, index: number) => {
          timeouts.push(setTimeout(() => {
              setVisibleIntro(prev => prev.map((v, i) => i === index ? true : v));
          }, index*100)); // Adjust the delay (500ms) as needed
      });

      return () => {
        timeouts.forEach(timeout => clearTimeout(timeout))
      };
  }, []);

  return (
    <main className="flex flex-row w-full justify-evenly min-h-screen mt-16 pt-16 font-mono overflow-hidden">
      <div className="flex flex-col space-y-8">
          <div className={`space-y-4 w-full max-w-4xl transform transition-opacity shadow-2xl bg-navcover rounded-xl p-6 duration-1000 ease-in-out ${visibleIntro[0] ? 'opacity-100': 'opacity-0'}`}>
            <div className="flex flex-row space-x-8">
              <p className="text-4xl md:text-6xl">Hi</p>
              <Image src="/waving-hand-svgrepo-com.svg" alt="waving hand" width={50} height={50} className="" />
            </div>
            <p className="text-4xl md:text-6xl max-w-[200px] md:max-w-[450px]">I'm Muhammad</p>
            <div className="space-y-2 max-w-[500px]">
              <p className="text-base md:text-md mt-8">I'm a full-stack engineer, Computer Science major, and junior at Grinnell College. I love building new things & using my technical skills to bring innovative ideas to life.</p>
            </div>
          </div>
          <div className="flex flex-row justify-evenly items-center">
            <Link href="/projects" passHref>
              <div className="border border-gray-300 rounded-full py-3 px-4 hover:bg-gray-800">
                View my work
              </div>
            </Link>
            <Link href="/about" passHref>
              <div className="border border-gray-300 rounded-full py-3 px-4 hover:bg-gray-800">
                Get to know me!
              </div>
            </Link>
          </div>
      </div>
      <div className={`min-w-[200px] transform transition-opacity duration-1000 ease-in-out ${visibleIntro[1] ? 'opacity-100': 'opacity-0'}`}>
        <Image
          src="/professionalphoto.jpg"
          alt="Me"
          width={200}
          height={200}
          className="rounded-full object-cover aspect-square w-full h-auto"
        />
      </div>
    </main>
  );
}


