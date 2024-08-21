'use client';

import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import Link from 'next/link';
import Typewriter from "typewriter-effect";
import Image from 'next/image';

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();
  
  const [visibleAbouts, setVisibleAbouts] = useState([false, false, false]);


    useEffect(() => {
        const timeouts: NodeJS.Timeout[] = [];
        visibleAbouts.forEach((_: any, index: number) => {
            timeouts.push(setTimeout(() => {
                setVisibleAbouts(prev => prev.map((v, i) => i === index ? true : v));
            }, index * 300)); // Adjust the delay (500ms) as needed
        });

        return () => timeouts.forEach(timeout => clearTimeout(timeout));
    }, []);

  function onSubmit(data: ContactFormData) {
    sendEmail(data);
    reset();
  }
  return (
    <div className='flex flex-col justify-center items-center mt-16 w-full font-mono'>
      <div className="text-6xl mt-16 pt-16 mb-16">
          <Typewriter 
              onInit={(typewriter) => {
                  typewriter.typeString("Contact")
                  .start()
              }}
          />
      </div>
      <div className={`flex flex-row justify-center items-center space-x-20 pb-16 transform transition-opacity duration-1000 ease-in-out ${visibleAbouts[0] ? 'opacity-100' : 'opacity-0'}`}>
        <div className='flex flex-row space-x-4 items-center'>
          <Image
            src="/github-svgrepo-com.svg"
            alt="Github"
            width={40}
            height={40}
          />
          <Link className=""  href="https://github.com/muhammadkhalid-03" target="_blank" passHref>
            <div className="border border-gray-300 rounded-full py-3 px-4 hover:bg-gray-800">
                    GitHub
            </div>
          </Link>
        </div>
        <div className='flex flex-row space-x-4 items-center'>
          <Image
            src="icons8-linkedin.svg"
            alt="LinkedIn"
            width={40}
            height={40}
          />
          <Link className="flex flex-row space-x-2 items-center" href="https://linkedin.com/in/muhammadkhalid003" target="_blank" passHref>
            <div className="border border-gray-300 rounded-full py-3 px-4 hover:bg-gray-800">
                Linkedin
            </div>
          </Link>
        </div>
      </div>
      <div className={`flex flex-col w-full max-w-2xl pt-4 transform transition-opacity duration-1000 ease-in-out ${visibleAbouts[1] ? 'opacity-100' : 'opacity-0'}`}>
      <div className='text-3xl pb-5'>
        Let's get in touch!
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col justify-start p-6 mb-16 rounded-xl border border-2 border-gray-300 bg-navcover font-mono'>
        <div className='mb-5 w-full'>
          <label
            htmlFor='name'
            className='mb-3 block text-base font-medium font-mono  text-white'
          >
            Name
          </label>
          <input
            type='text'
            placeholder='Full Name'
            className='w-full rounded-md border border-gray-300 font-mono bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('name', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='mb-3 block text-base font-medium font-mono text-white'
          >
            Email Address
          </label>
          <input
            type='email'
            placeholder='example@gmail.com'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('email', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='message'
            className='mb-3 block text-base font-medium text-white font-mono'
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder='Type your message'
            className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('message', { required: true })}
            ></textarea>
            </div>
            <div>
              <button className=' hover:bg-gray-700 rounded-md border border-gray-300 py-3 px-8 text-base font-semibold text-white outline-none'>
                Submit
              </button>
            </div>
          </form>
          </div>
        </div>
      );
    };
    
    export default Contact;
    