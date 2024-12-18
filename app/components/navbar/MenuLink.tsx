'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface MenuLinkProps {
    type: string;
    onOpen?: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({ type, onOpen }) => {
    const pathname = usePathname();

    return (
        <div className={`flex ${type} justify-center items-center md:space-x-6 lg:space-x-8 justify-end`}>
            {[
                { name: 'Home', href: '/' },
                { name: 'Projects', href: '/projects' },
                { name: 'About', href: '/about' },
                { name: 'Resume', href: '/Resume.pdf', external: true },
                { name: 'Contact', href: '/contact' },
            ].map((item) => (
                item.external ? (
                    <div
                        key={item.name}
                        className='relative group pb-2 flex flex-col items-center'
                    >
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-white'
                            onClick={onOpen}
                        >
                            {item.name}
                        </a>
                        <div
                            className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                                pathname === item.href ? 'scale-x-100' : 'scale-x-0'
                            }`}
                        />
                    </div>
                ) : (
                    <Link key={item.name} href={item.href} onClick={onOpen} passHref>
                        <div className='relative group pb-2 flex flex-col items-center'>
                            <p className='text-white'>{item.name}</p>
                            <div
                                className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                                    pathname === item.href ? 'scale-x-100' : 'scale-x-0'
                                }`}
                            />
                        </div>
                    </Link>
                )
            ))}
        </div>
    );
};

export default MenuLink;
