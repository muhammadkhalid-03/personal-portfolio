'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import Card from "./components/card/Card";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";



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

  const images = [
    "/python-svgrepo-com.svg",
    "/java-icon.svg",
    "/nextjs-svgrepo-com.svg",
    "/typescript-svgrepo-com.svg",
    "/r-project-official.svg",
    "/django-svgrepo-com.svg",
    "/postgresql-vertical.svg",
    "/pandas.svg",
    "/c-1.svg",
    "icons8-flask.svg",
    "/github-icon-1-logo-svgrepo-com.svg"
  ]

  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(true);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0, 
    });
  }
    return controls?.stop;
  }, [xTranslation, width, duration, rerender])

  return (
    <main className="flex flex-row justify-evenly w-full min-h-screen mt-16 pt-16 font-mono">
      <div className="flex flex-col">
        <div className={`space-y-4 transform transition-opacity shadow-2xl bg-navcover rounded-xl p-6 duration-1000 ease-in-out ${visibleIntro[0] ? 'opacity-100': 'opacity-0'}`}>
          <div className="flex flex-row space-x-8">
            <p className="text-4xl md:text-6xl">Hi</p>
            <Image src="/waving-hand-svgrepo-com.svg" alt="waving hand" width={50} height={50} className="" />
          </div>
          <p className="text-4xl md:text-6xl max-w-[200px] md:max-w-[450px]">I'm Muhammad</p>
          <div className="space-y-2 max-w-[500px]">
            <p className="text-base md:text-md mt-8">I'm A full-stack engineer & Computer Science major, currently a junior at Grinnell College. I love building new things - using my technical skills to bring innovative ideas to life.</p>
          </div>
        </div>
        <div className="flex flex-col">
            <motion.div 
              className="absolute left-0 flex transition ease-in-out gap-2 mt-16" 
              ref={ref} 
              style={{x:xTranslation}} 
              onHoverStart={(() => {
                setMustFinish(true);
                setDuration(SLOW_DURATION);
              })}
              onHoverEnd={(() => {
                setMustFinish(true);
                setDuration(FAST_DURATION);
              })}
            >
              {[...images, ...images].map((item, idx) => (
                <Card image={item} key={idx}/>
              ))}
            </motion.div>
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


