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
    <main className="flex flex-row w-full justify-center sm:justify-evenly min-h-screen mt-8 sm:mt-16 pt-8 sm:pt-16 font-mono overflow-hidden">
      <div className="flex flex-col space-y-4 sm:space-y-8 max-w-xl sm::max-w-2xl">
            <div className="flex flex-row space-x-4 sm:space-x-8">
              <p className="text-2xl sm:text-6xl">Hi</p>
              <Image src="/waving-hand-svgrepo-com.svg" alt="waving hand" width={50} height={50} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
            </div>
            <p className="text-2xl sm:text-6xl">I'm Muhammad</p>
            <div className="space-y-2 max-w-[500px]">
              <p className="text-base sm:text-md mt-8">I'm a full-stack engineer, Computer Science major, and junior at Grinnell College. 
                I love building new things & using my technical skills to bring innovative ideas to life.</p>
              <p className="text-base sm:text-md mt-8">I'm currently looking for summer 2025
              internships!</p>
            </div>
          <div className="flex flex-row justify-evenly items-center">
            <Link href="/projects" passHref>
              <div className="border border-gray-300 rounded-full py-2 px-3 sm:py-3 sm:px-4 md:py-4 md:px-6 lg:py-5 lg:px-8 text-sm sm:text-base md:text-lg lg:text-xl hover:bg-gray-800 text-center">
                View my work
              </div>
            </Link>
            <Link href="/about" passHref>
              <div className="border border-gray-300 rounded-full py-2 px-3 sm:py-3 sm:px-4 md:py-4 md:px-6 lg:py-5 lg:px-8 text-sm sm:text-base md:text-lg lg:text-xl hover:bg-gray-800 text-center">
                Get to know me!
              </div>
            </Link>
          </div>
      </div>
      <div className={`w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 transform transition-opacity duration-1000 ease-in-out ${visibleIntro[1] ? 'opacity-100': 'opacity-0'}`}>
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


