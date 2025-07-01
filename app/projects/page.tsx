"use client";

import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import NextVideo from "next-video";
import ccMovie2 from "@/videos/ccMovie2.mp4";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectsPage = () => {
  const [visibleProjects, setVisibleProjects] = useState([false, false, false]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const pioneerMartImages = [
    {
      src: "/project photos/pioneermart/login.jpg",
      alt: "Pioneer Mart Sign In Screen",
      width: 500,
      height: 500,
    },
    {
      src: "/project photos/pioneermart/home.png",
      alt: "Pioneer Mart Home Screen",
      width: 500,
      height: 500,
    },
    {
      src: "/project photos/pioneermart/additem.png",
      alt: "Pioneer Mart Add Item Screen",
      width: 500,
      height: 500,
    },
    {
      src: "/project photos/pioneermart/notification.png",
      alt: "Pioneer Mart Chat Screen",
      width: 500,
      height: 500,
    },
    {
      src: "/project photos/pioneermart/profile.png",
      alt: "Pioneer Mart Profile Screen",
      width: 500,
      height: 500,
    },
  ];

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    visibleProjects.forEach((_, index) => {
      timeouts.push(
        setTimeout(() => {
          setVisibleProjects((prev) =>
            prev.map((v, i) => (i === index ? true : v))
          );
        }, index * 700)
      ); // Adjust the delay (700ms) as needed
    });

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === pioneerMartImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? pioneerMartImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  return (
    <main className="flex flex-col justify-center items-center min-h-screen font-mono p-6 mb-16">
      <div className="text-6xl mt-16 pt-16 mb-16">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Projects").start();
          }}
        />
      </div>
      <div className="space-y-16 m-18 text-center">
        <div
          className={`w-[80%] max-w-4xl mx-auto flex flex-col p-12 rounded-xl bg-navcover transform transition-opacity duration-1000 ease-in-out ${
            visibleProjects[0] ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl mb-2">Pioneer Mart</h2>
            <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4 my-4 items-center">
              <Link
                href="https://github.com/muhammadkhalid-03/Pioneer_Mart"
                className="text-sm text-blue-200 hover:underline"
                target="_blank"
                passHref
              >
                GitHub Repository
              </Link>
              <span className="text-sm">•</span>
              <Link
                href="/privacy-policy"
                className="text-sm text-blue-200 hover:underline"
                passHref
              >
                Privacy Policy
              </Link>
            </div>
            <p className="text-sm mb-12 text-center">
              A full-stack online marketplace mobile application designed for
              Grinnell College students, faculty, and staff to buy and sell
              second-hand items. This project has real-time chat w/ websockets,
              automated image/text moderation thru a third party API, cloud
              object storage thru AWS S3, secure OTP authentication and many
              other features!
            </p>

            {/* Image Carousel */}
            <div className="w-full max-w-2xl mb-6">
              <div className="overflow-hidden rounded-lg bg-gray-800 mb-4">
                <div className="flex justify-center items-center h-60 sm:h-72 md:h-96">
                  <Image
                    src={pioneerMartImages[currentImageIndex].src}
                    alt={pioneerMartImages[currentImageIndex].alt}
                    className="max-h-full max-w-full object-contain rounded-lg"
                    width={pioneerMartImages[currentImageIndex].width}
                    height={pioneerMartImages[currentImageIndex].height}
                  />
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={prevImage}
                  className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center space-x-2">
                {pioneerMartImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? "bg-blue-500"
                        : "bg-gray-500 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm mt-2 text-center">
              Technologies: React Native, TypeScript, Django, PostgreSQL, Expo,
              AWS S3, Zustand
            </p>
            <p className="text-sm mt-12 text-center text-gray-600">
              Note: The Github repository linked here is forked from the main
              repository and serves our web app. The original repository is
              private due to security issues. I'm currently maintaining the
              project as the user base continues to grow.
            </p>
          </div>
        </div>
        <div
          className={`w-[80%] max-w-4xl mx-auto flex flex-col p-12 rounded-xl bg-navcover transform transition-opacity duration-1000 ease-in-out ${
            visibleProjects[1] ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl mb-2">Cipher Cracker</h2>
            <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4 my-4 items-center">
              <Link
                href="http://cipher-cracker.muhammadkhalid.dev"
                className="text-sm text-blue-200 hover:underline"
                target="_blank"
                passHref
              >
                Website
              </Link>
              <span className="text-sm">•</span>
              <Link
                href="https://github.com/muhammadkhalid-03/djangocipher"
                className="text-sm text-blue-200 hover:underline"
                passHref
                target="_blank"
              >
                GitHub Repo
              </Link>
            </div>
            <p className="text-sm mb-12 text-center">
              A full-stack project designed to crack substitution ciphers using
              the Metropolis-Hastings algorithm, a serverless backend (AWS
              Lambda & API Gateway), and the ChatGPT API.
            </p>
            <div>
              <p className="text-md text-center mb-4 underline underline-offset-4">
                Watch the demo below!
              </p>
              <NextVideo
                src={ccMovie2}
                className="w-[50vw] border border-white object-cover aspect-square rounded"
              />
            </div>
            <p className="text-sm text-center mt-2">
              Technologies: AWS Lambda, AWS API Gateway, Python, Next.js,
              Typescript
            </p>
          </div>
        </div>
        <div
          className={`w-[80%] max-w-4xl mx-auto flex flex-col p-12 rounded-xl bg-navcover transform transition-opacity duration-1000 ease-in-out ${
            visibleProjects[2] ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl mb-2">Gradient Descent</h2>
            <Link
              href="https://github.com/muhammadkhalid-03/gradient-descent.git"
              className="text-sm text-center text-blue-200 mb-4 hover:underline"
              target="_blank"
              passHref
            >
              https://github.com/muhammadkhalid-03/gradient-descent.git
            </Link>
            <p className="text-sm mb-8 text-center">
              A python implementation of Gradient Descent and Newton&apos;s
              method to find the max/min of functions in multiple dimensions.
            </p>
            <div className="flex flex-row justify-center items-center space-x-4">
              <div className="border border-gray-500 bg-black p-2 rounded-lg">
                <Image
                  src="/project photos/grad-descent/gd-1.png"
                  alt="Cipher Cracker Home Page"
                  width={500}
                  height={500}
                  className="object-cover aspect-square rounded-xl"
                />
              </div>
              <div className="border border-gray-500 bg-black p-2 rounded-lg">
                <Image
                  src="/project photos/grad-descent/gd-2.png"
                  alt="Cipher Cracker Home Page"
                  width={500}
                  height={500}
                  className="object-cover aspect-square rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-[80%] max-w-4xl mx-auto flex flex-col p-12 rounded-xl bg-navcover transform transition-opacity duration-1000 ease-in-out ${
            visibleProjects[3] ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl mb-2">Genetic Data Fitting</h2>
            <Link
              href="https://github.com/muhammadkhalid-03/genetic-data-fitting.git"
              className="text-sm text-center text-blue-200 mb-4 hover:underline"
              target="_blank"
              passHref
            >
              https://github.com/muhammadkhalid-03/genetic-data-fitting.git
            </Link>
            <p className="text-sm mb-8 text-center">
              A python implementation of a genetic algorithm to fit polynomials
              to data.
            </p>
            <div className="flex flex-row justify-center items-center space-x-4">
              <div className="border border-gray-500 bg-black p-2 rounded-lg">
                <Image
                  src="/project photos/gen-alg/fitA.png"
                  alt="fitA"
                  width={500}
                  height={500}
                  className="object-cover aspect-square rounded-xl"
                />
              </div>
              <div className="border border-gray-500 bg-black p-2 rounded-lg">
                <Image
                  src="/project photos/gen-alg/fitB.png"
                  alt="fitB"
                  width={500}
                  height={500}
                  className="object-cover aspect-square rounded-xl"
                />
              </div>
              <div className="border border-gray-500 bg-black p-2 rounded-lg">
                <Image
                  src="/project photos/gen-alg/fitC.png"
                  alt="fitC"
                  width={500}
                  height={500}
                  className="object-cover aspect-square rounded-xl"
                />
              </div>
              <div className="border border-gray-500 bg-black p-2 rounded-lg">
                <Image
                  src="/project photos/gen-alg/fitD.png"
                  alt="fitD"
                  width={500}
                  height={500}
                  className="object-cover aspect-square rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
