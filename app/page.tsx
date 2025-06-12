"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [visibleIntro, setVisibleIntro] = useState([false, false]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    visibleIntro.forEach((_, index) => {
      timeouts.push(
        setTimeout(() => {
          setVisibleIntro((prev) =>
            prev.map((v, i) => (i === index ? true : v))
          );
        }, index * 300)
      ); // Increased delay for better visibility
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <main className="flex flex-col sm:flex-row w-full xs:justify-center px-4 sm:justify-evenly min-h-screen sm:mt-16 sm:pt-16 font-mono overflow-x-hidden">
      {/* Content column */}
      {/* Image container - conditionally positioned */}
      <div
        className={`mt-8 sm:mt-0 self-center sm:self-auto w-60 sm:w-72 md:w-80 lg:w-96 transition-opacity duration-1000 ease-in-out ${
          visibleIntro[0] ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/professionalphoto.jpg"
          alt="Me"
          width={200}
          height={200}
          className="rounded-full object-cover aspect-square w-full h-auto"
          priority
        />
      </div>
      <div
        className={`flex flex-col pt-6 sm:space-y-4 sm:space-y-8 items-center text-center max-w-xl transition-opacity duration-1000 ease-in-out ${
          visibleIntro[1] ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-row items-center space-x-2 sm:space-x-4">
          <p className="text-2xl md:text-5xl lg:text-6xl">Hi</p>
          <Image
            src="/waving-hand-svgrepo-com.svg"
            alt="waving hand"
            width={50}
            height={50}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
          />
        </div>

        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
          I'm Muhammad
        </p>

        <div className="space-y-4 max-w-[500px]">
          <p className="text-sm sm:text-base md:text-lg">
            I'm a full-stack engineer, Computer Science major, and rising senior
            at Grinnell College. I love building new things & using my technical
            skills to bring innovative ideas to life.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 sm:justify-start mt-4">
          <Link href="/projects" passHref>
            <div className="border border-gray-300 rounded-full py-2 px-4 text-sm sm:text-base hover:bg-gray-800 text-center transition-colors">
              View my work
            </div>
          </Link>
          <Link href="/about" passHref>
            <div className="border border-gray-300 rounded-full py-2 px-4 text-sm sm:text-base hover:bg-gray-800 text-center transition-colors">
              Get to know me!
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
