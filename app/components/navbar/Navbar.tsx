import Link from 'next/link';
import Image from 'next/image';
import MenuLink from './MenuLink';


const Navbar = () => {

    return (
        <nav className="font-mono w-full fixed top-0 left-0 border-b p-4 bg-navcover z-10">
                <div className="flex justify-between items-center">
                    <Link href="/" className='flex flex-row items-center p-2'>
                        <p className='text-white text-2xl'>Portfolio</p>
                    </Link>
                    <div className='flex items-center space-x-6'>
                        <MenuLink />
                    </div>
                </div>
        </nav>
    )
}

export default Navbar;