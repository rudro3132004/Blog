import React from 'react'
import { IoMdSearch } from "react-icons/io";


export default function SearchBox() {
  return (
    <div className='w-full flex justify-center items-center border-2 px-2 border-slate-400 bg-white/90 text-slate-900 rounded-lg'>
        <input type="text" placeholder='Search...' className='w-full p-2 border-0 outline-0 rounded'/>
        <IoMdSearch className='text-2xl mx-2 cursor-pointer'/>
    </div>
  )
}
