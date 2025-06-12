"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import ImageComp from "../components/about/ImageComp";

const AboutPage = () => {
  const [visibleAbouts, setVisibleAbouts] = useState([
    false,
    false,
    false,
    false,
  ]);

  const images1 = [
    ["/python-svgrepo-com.svg", "Python"],
    ["/java-icon.svg", "Java"],
    ["/nextjs-svgrepo-com.svg", "NextJS"],
    ["/typescript-svgrepo-com.svg", "TypeScript"],
    ["/r-project-official.svg", "R"],
    ["/django-svgrepo-com.svg", "Django"],
  ];
  const images2 = [
    ["/amazon-web-services-2.svg", "AWS"],
    ["/postgresql-vertical.svg", "PostgreSQL"],
    ["/pandas.svg", "Pandas"],
    ["/c-1.svg", "C"],
    ["icons8-flask.svg", "Flask"],
    ["/github-icon-1-logo-svgrepo-com.svg", "Git"],
  ];

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    visibleAbouts.forEach((_: any, index: number) => {
      timeouts.push(
        setTimeout(() => {
          setVisibleAbouts((prev) =>
            prev.map((v, i) => (i === index ? true : v))
          );
        }, index * 500)
      ); // Adjust the delay (500ms) as needed
    });

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  return (
    <main className="flex flex-col justify-center items-center font-mono min-h-screen p-6 mb-16">
      <div className="text-4xl sm:text-5xl md:text-6xl mt-16 pt-16 mb-16">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("About Me").start();
          }}
        />
      </div>
      <div className="space-y-12 m-18 w-full max-w-5xl">
        <div
          className={`space-y-4  transform transition-opacity duration-1000 ease-in-out ${
            visibleAbouts[0] ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xl sm:text-2xl">Professional:</p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 sm:w-10 sm:h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
              />
            </svg>
            <div className="relative w-full bg-emerald-800 rounded-lg p-4 sm:p-6 shadow-lg text-md max-w-full fade-border">
              <p>
                This summer (2025), I'm working with Professor Rodrigues at the
                20C Text Lab at Grinnell to benchmark OCR-mLLM post-correction
                for 20th century historical texts. In addition to this, I'm also
                the lead developer and maintainer of PioneerMart, an online
                marketplace officially available to the Grinnell community as of
                May 2025. I've been working on this with the rest of the team
                since January 2025. Last summer & fall semester (2024), I worked
                as a Research Assistant at the{" "}
                <Link
                  href="https://elbica.cs.grinnell.edu/start-here/"
                  target="_blank"
                  className="text-custom1"
                >
                  ELBICA Lab
                </Link>{" "}
                at Grinnell under{" "}
                <Link
                  href="https://eliott-fernanda.cs.grinnell.edu/home/"
                  target="_blank"
                  className="text-custom1"
                >
                  Dr. Fernanda Eliott.
                </Link>{" "}
                During my time at the lab, I explored distributed
                representations in AI and multi-modal data for causal inference.
                The summer before that (2023), I was an intern at{" "}
                <Link
                  href="https://10pearls.com"
                  target="_blank"
                  className="text-custom1"
                >
                  10Pearls, Pakistan
                </Link>{" "}
                where I worked as a full-stack engineering intern on a fitness
                tracking application. I have also been a Teaching Assistant for
                courses in Java & Racket. Currently I work as a student mentor
                at{" "}
                <Link
                  href="https://www.grinnell.edu/academics/centers-programs/data-analysis-and-social-inquiry-lab"
                  target="_blank"
                  className="text-custom1"
                >
                  DASIL (Data Analysis & Social Inquiry Lab)
                </Link>{" "}
                and the{" "}
                <Link
                  href="https://www.grinnell.edu/about/leadership/offices-services/its"
                  target="_blank"
                  className="text-custom1"
                >
                  ITS Services Desk
                </Link>{" "}
                at Grinnell.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`space-y-4  transform transition-opacity duration-1000 ease-in-out ${
            visibleAbouts[1] ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xl sm:text-2xl">Skills:</p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 sm:w-10 sm:h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
            <div className="relative w-full bg-emerald-800 rounded-lg p-4 sm:p-6 shadow-lg text-md max-w-full fade-border">
              <div className="flex flex-col space-y-6 sm:space-y-12">
                <div className="flex flex-wrap justify-around">
                  {[...images1].map(([item, label], idx) => (
                    <ImageComp
                      image={item}
                      alt={"skills about"}
                      width={60}
                      height={60}
                      label={label}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap justify-around">
                  {[...images2].map(([item, label], idx) => (
                    <ImageComp
                      image={item}
                      alt={"skills about"}
                      width={60}
                      height={60}
                      label={label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`space-y-4  transform transition-opacity duration-1000 ease-in-out ${
            visibleAbouts[2] ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xl sm:text-2xl">Academics & Extracurriculars:</p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-Width="1.5"
              stroke="currentColor"
              className="w-8 h-8 sm:w-10 sm:h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
            <div className="relative w-full bg-emerald-800 rounded-lg p-4 sm:p-6 shadow-lg text-md max-w-full fade-border">
              <p>
                I'm currently a rising senior at{" "}
                <Link
                  href="https://www.grinnell.edu"
                  target="_blank"
                  className="text-custom1"
                >
                  Grinnell College
                </Link>{" "}
                graduating in May 2026. I hope to major in Computer Science &
                minor in Statistics. I'm also the president of the Muslim
                Student Association (MSA) and the Pakistani Student Organization
                (PSO) at Grinnell. Through my work in these student
                organizations, I help allocate organizational resources, plan
                regular events, and advocate for students on campus.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`space-y-4  transform transition-opacity duration-1000 ease-in-out ${
            visibleAbouts[3] ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xl sm:text-2xl">Personal:</p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 sm:w-10 sm:h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <div className="relative w-full bg-emerald-800 rounded-lg p-4 sm:p-6 shadow-lg text-md max-w-full fade-border">
              <p>
                In my free time love going to the gym, watching movies/TV shows,
                and cycling. Ever since I moved off-campus, I've started cooking
                a whole lot which might turn into a new hobby :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
