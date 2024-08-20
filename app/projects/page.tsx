'use client';

import Typewriter from "typewriter-effect";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from "react";

const ProjectsPage = () => {
    const [visibleProjects, setVisibleProjects] = useState([false, false, false]);

    useEffect(() => {
        const timeouts: NodeJS.Timeout[] = [];
        visibleProjects.forEach((_, index) => {
            timeouts.push(setTimeout(() => {
                setVisibleProjects(prev => prev.map((v, i) => i === index ? true : v));
            }, index * 700)); // Adjust the delay (500ms) as needed
        });

        return () => timeouts.forEach(timeout => clearTimeout(timeout));
    }, []);
    return (
        <main className="flex flex-col justify-center items-center min-h-screen font-mono p-6">
            <div className="text-6xl mt-16 pt-16 mb-16">
                <Typewriter 
                    onInit={(typewriter) => {
                        typewriter.typeString("Projects")
                        .start()
                    }}
                />
            </div>
            <div className="space-y-16 m-18">
                {/* <div className="space-y-16"> */}
                    <div className={`w-full max-w-4xl flex flex-col p-12 rounded-xl border border-2 border-gray-300 bg-navcover transform transition-opacity duration-1000 ease-in-out ${visibleProjects[0] ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex flex-col justify-center items-center">
                            <Link href="https://github.com/muhammadkhalid-03/djangocipher.git" className="text-3xl mb-4 hover:border-b-2 border-white" target="_blank" passHref>Cipher Cracker</Link>
                            <p className="text-sm mb-8 text-center">A full-stack project designed to crack substitution ciphers using the Metropolis-Hastings algorithm & a pre-trained GPT-2 model.</p>
                            <div className="flex flex-row justify-center items-center space-x-4">
                                <div className="border border-gray-500 bg-black p-2 rounded-lg">
                                    <Image
                                        src="/project photos/cipher/cc1.png"
                                        alt="Cipher Cracker Home Page"
                                        width={200}
                                        height={200}
                                        className="object-cover aspect-square rounded-xl"
                                    />
                                </div>
                                <div className="border border-gray-500 bg-black p-2 rounded-lg">
                                    <Image
                                        src="/project photos/cipher/cc2.png"
                                        alt="Cipher Cracker Home Page"
                                        width={200}
                                        height={200}
                                        className="object-cover aspect-square rounded-xl"
                                    />
                                </div>
                                <div className="border border-gray-500 bg-black p-2 rounded-lg">
                                    <Image
                                        src="/project photos/cipher/cc3.png"
                                        alt="Cipher Cracker Home Page"
                                        width={200}
                                        height={200}
                                        className="object-cover aspect-square rounded-xl"
                                    />
                                </div>
                                <div className="border border-gray-500 bg-black p-2 rounded-lg">
                                    <Image
                                        src="/project photos/cipher/cc4.png"
                                        alt="Cipher Cracker Home Page"
                                        width={200}
                                        height={200}
                                        className="object-cover aspect-square rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full max-w-4xl flex flex-col p-12 mb-16 rounded-xl border border-2 border-gray-300 bg-navcover transform transition-opacity duration-1000 ease-in-out ${visibleProjects[1] ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex flex-col justify-center items-center">
                            <Link href="https://github.com/muhammadkhalid-03/gradient-descent.git" className="text-3xl mb-4 hover:border-b-2 border-white" target="_blank" passHref>Gradient Descent in Multiple Dimensions</Link>
                            <p className="text-sm mb-8 text-center">A python implementation of Gradient Descent and Newton's method to find the max/min of functions in multiple dimensions.</p>
                            <div className="flex flex-row justify-center items-center space-x-4">
                                <div className="border border-gray-500 bg-black p-2 rounded-lg">
                                    <Image
                                        src="/project photos/grad-descent/gd-1.png"
                                        alt="Cipher Cracker Home Page"
                                        width={200}
                                        height={200}
                                        className="object-cover aspect-square rounded-xl"
                                    />
                                </div>
                                <div className="border border-gray-500 bg-black p-2 rounded-lg">
                                    <Image
                                        src="/project photos/grad-descent/gd-2.png"
                                        alt="Cipher Cracker Home Page"
                                        width={200}
                                        height={200}
                                        className="object-cover aspect-square rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full max-w-4xl flex flex-col p-12 mb-16 rounded-xl border border-2 border-gray-300 bg-navcover transform transition-opacity duration-1000 ease-in-out ${visibleProjects[2] ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex flex-col justify-center items-center">
                            <Link href="https://github.com/muhammadkhalid-03/genetic-data-fitting.git" className="text-3xl mb-4 hover:border-b-2 border-white" target="_blank" passHref>Genetic Data Fitting</Link>
                            <p className="text-sm mb-8 text-center">A python implementation of a genetic algorithm to fit polynomials to data.</p>
                            <div className="flex flex-row justify-center items-center space-x-4">
                                <div className="border border-gray-500 bg-black p-2 rounded-lg">
                                    <Image
                                        src="/project photos/gen-alg/fitA.png"
                                        alt="fitA"
                                        width={200}
                                        height={200}
                                        className="object-cover aspect-square rounded-xl"
                                    />
                                </div>
                                <div className="border border-gray-500 bg-black p-2 rounded-lg">
                                    <Image
                                        src="/project photos/gen-alg/fitB.png"
                                        alt="fitB"
                                        width={200}
                                        height={200}
                                        className="object-cover aspect-square rounded-xl"
                                    />
                                </div>
                                <div className="border border-gray-500 bg-black p-2 rounded-lg">
                                    <Image
                                        src="/project photos/gen-alg/fitC.png"
                                        alt="fitC"
                                        width={200}
                                        height={200}
                                        className="object-cover aspect-square rounded-xl"
                                    />
                                </div>
                                <div className="border border-gray-500 bg-black p-2 rounded-lg">
                                    <Image
                                        src="/project photos/gen-alg/fitD.png"
                                        alt="fitD"
                                        width={200}
                                        height={200}
                                        className="object-cover aspect-square rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </main>
    )
}


export default ProjectsPage;