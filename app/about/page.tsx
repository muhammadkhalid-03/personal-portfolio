'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";


const AboutPage = () => {
    const [visibleAbouts, setVisibleAbouts] = useState([false, false, false]);


    useEffect(() => {
        const timeouts: NodeJS.Timeout[] = [];
        visibleAbouts.forEach((_: any, index: number) => {
            timeouts.push(setTimeout(() => {
                setVisibleAbouts(prev => prev.map((v, i) => i === index ? true : v));
            }, index * 500)); // Adjust the delay (500ms) as needed
        });

        return () => timeouts.forEach(timeout => clearTimeout(timeout));
    }, []);
    
    return (
        <main className="flex flex-col justify-center items-center font-mono min-h-screen p-6">
            <div className="text-6xl mt-16 pt-16 mb-16">
                <Typewriter 
                    onInit={(typewriter) => {
                        typewriter.typeString("About Me")
                        .start()
                    }}
                />
            </div>
            <div className="space-y-12 m-18">
                <div className={`space-y-4  transform transition-opacity duration-1000 ease-in-out ${visibleAbouts[0] ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-2xl">Personal:</p>
                    <div className="flex flex-row items-center space-x-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <div className="relative w-full bg-emerald-800 rounded-lg p-6 shadow-lg text-md max-w-4xl mx-auto fade-border">
                            <p>
                                My free time usually revolves around going to the gym, watching movies/TV shows, and cycling. Ever since I moved off-campus, I’ve started cooking a whole lot which might turn into a new hobby :) I listen to a LOT of South Asian music as well as a good amount of English EDM and would love some recommendations!
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`space-y-4  transform transition-opacity duration-1000 ease-in-out ${visibleAbouts[1] ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-2xl">Professional:</p>
                    <div className="flex flex-row items-center space-x-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                        </svg>
                        <div className="relative w-full bg-emerald-800 rounded-lg p-6 shadow-lg text-md max-w-4xl mx-auto fade-border">
                            <p>
                                Since the beginning of the summer of 2024, I’ve been a Research Assistant at the <Link href="https://elbica.cs.grinnell.edu/start-here/" target="_blank"
                                className="text-custom1">ELBICA Lab</Link> where I collaborate with <Link href="https://eliott-fernanda.cs.grinnell.edu/home/" target="_blank"
                                className="text-custom1">Professor Fernanda Eliott</Link> and her team to explore Distributed Representations in AI. Currenly, I'm looking into using multi-modal data for causal inference. Last summer (2023), I was an intern at <Link href="https://10pearls.com" target="_blank"
                                className="text-custom1">10Pearls, Pakistan</Link> where I worked on a full-stack fitness tracking application. Since September of 2023 I’ve also been a Teaching Assistant for courses in Java & Racket. I love exploring new opportunities that allow me to grow as an engineer!
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`space-y-4  transform transition-opacity duration-1000 ease-in-out ${visibleAbouts[2] ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-2xl">Academic:</p>
                    <div className="flex flex-row items-center space-x-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-Width="1.5" stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>
                        <div className="relative w-full bg-emerald-800 rounded-lg p-6 shadow-lg text-md max-w-4xl mx-auto fade-border mb-16">
                            <p>
                            I’m currently a Junior at <Link href="https://www.grinnell.edu" target="_blank"
                                className="text-custom1">Grinnell College</Link> graduating in May 2026. I’m majoring in Computer Science with a concentration in Statistics. I’m part of the cabinets for the South Asian Student Organization (SASO) & Pakistani Student Organization (PSO) where I regularly arrange community activities and advocate for students on campus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default AboutPage;