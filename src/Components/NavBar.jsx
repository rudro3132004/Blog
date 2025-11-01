import React from 'react'
import { motion } from 'motion/react';
import Navigateor from './Navigateor'
import { FiGrid } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import SideNav from './SideNav';
import SearchBox from './SearchBox';
import { NavLink } from 'react-router-dom';


export default function NavBar() {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className='w-full p-2 bg-black/60 text-white flex justify-between items-center relative z-50 lg:px-[5%] shadow-md shadow-white/30'>
        
        {/* Logo */}
        <div className="flex items-center gap-14">
            <h2 className='text-xl flex justify-center items-center gap-1 md:text-2xl font-semibold'> <MdTravelExplore className='text-[#04BB86]'/> <NavLink to={'/Blog'}>  bloger.BD</NavLink></h2> 
        </div>
        {/* Navigator */}
        <div className="w-fit hidden xl:block">
          <Navigateor/>
        </div>        
        {/* Search Box */}
        <div className="max-w-2xl hidden xl:block">
          <SearchBox/>
        </div>
        {/* Login Button */}
        <div className="hidden xl:flex justify-start items-center gap-4 mt-8 xl:mt-0">
            <button className='p-2 px-4 border-2 border-slate-300 rounded-xl  cursor-pointer'> Log In </button>
            <button className='p-2 px-4 border-2 border-slate-300 rounded-xl cursor-pointer bg-white text-slate-800'> Sign Up </button>
        </div>

        {/* Mobail Menu */}
        <div className="xl:hidden">
        { !isOpen ?
          <FiGrid onClick={()=>{ setIsOpen(!isOpen) }} className='text-2xl cursor-pointer'/>
          :
          <IoCloseSharp onClick={()=>{ setIsOpen(!isOpen) }} className={`text-2xl cursor-pointer`}/>
        }
        </div>

        { isOpen &&
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`absolute top-[100%] right-0 xl:hidden`}>
            <SideNav/>
          </motion.div>
        }
    
    </div>
  )
}
