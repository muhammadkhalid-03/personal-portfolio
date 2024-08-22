import Link from 'next/link';
import Image from 'next/image';
import MenuLink from './MenuLink';


const Navbar = () => {
    
    return (
        // <nav className="flex w-full items-center justify-between font-mono border-b p-2 md:p-4 full-screen-nav z-10 sm:w-full">
        <nav className="flex w-full items-center justify-between font-mono border-b p-2 md:p-4 bg-navcover z-10" style={{ backgroundColor: '#042f2e', width: '100vw', left: 0, top: 0, height: '10vh', background: '#042f2e !important' }}>
                <div className="flex items-center">
                    <Link href="/" className='flex flex-row items-center ml-5 md:ml-10 hover:cursor'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-14">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                    </Link>
                </div>
                <div className="flex items-center justify-end">
                    <div className='flex space-x-6'>
                        <MenuLink />
                    </div>
                </div>
        </nav>
    )
}

export default Navbar;