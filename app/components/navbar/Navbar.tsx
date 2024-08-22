'use client';
import Link from 'next/link';
import Image from 'next/image';
import MenuLink from './MenuLink';
import { useEffect, useRef, useState } from 'react';


const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null); //reference to the menu element

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);
    return (
        <nav className="flex w-full items-center justify-between font-mono border-b p-2 md:p-4 full-screen-nav z-10 sm:w-full">
                <div className="flex items-center">
                    <Link href="/" className='flex flex-row items-center ml-2 hover:cursor'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 md:size-14 lg:size-14">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                    </Link>
                </div>
                <div className="flex items-center space-x-4 hidden md:flex">
                    <MenuLink type="flex-row"/>
                </div>
            <button
                className="md:hidden p-2"
                onClick={(toggleDropdown)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            {isDropdownOpen && (
                <div ref={menuRef} className="absolute p-2 top-16 right-0 space-y-4 w-[30vw] bg-gray-800 z-30 hover:cursor rounded-xl shadow-lg md:hidden">
                    <MenuLink type="flex-col" onOpen={toggleDropdown}/>
                </div>
            )}
        </nav>
    )
}

export default Navbar;