import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom';


function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='w-full bg-black sticky top-0 z-50'>
            <nav className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white"> {/* sticky top-0 z-50 bg-[#000300] */}
                <h1 className='w-full text-3xl font-bold text-[#64ffda]'></h1>
                <ul className='hidden md:flex'>
                    <li className='p-4'>
                        <NavLink to="/home" className={({ isActive }) => isActive ? 'text-[#64ffda]' : 'text-white'}>
                            Home
                        </NavLink>
                    </li>
                    <li className='p-4'>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#64ffda]' : 'text-white'}>
                            About
                        </NavLink>
                    </li>
                    <li className='p-4'>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-[#64ffda]' : 'text-white'}>
                            Project
                        </NavLink>
                    </li>
                    <li className='p-4'>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-[#64ffda]' : 'text-white'}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold text-[#64ffda] m-4'>JTA.</h1>
                    <ul className='p-4 uppercase'>
                        <li className='p-4 border-b border-gray-600'><a href="#">Home</a></li>
                        <li className='p-4 border-b border-gray-600'><a href="#">About</a></li>
                        <li className='p-4 border-b border-gray-600'><a href="#">Project</a></li>
                        <li className='p-4 border-b border-gray-600'><a href="#">About</a></li>
                        <li className='p-4'>Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
