import React from 'react'
import SearchBox from './SearchBox'
import Navigateor from './Navigateor'

export default function SideNav() {
  return (
    <div className='w-72 h-96 p-3 bg-slate-900/90'>
        <SearchBox/>
        <Navigateor/>

        <div className="flex justify-start items-center gap-4 mt-18 lg:mt-0">
            <button className='p-2 px-4 border-2 border-slate-300 rounded-xl '> Log In </button>
            <button className='p-2 px-4 border-2 border-slate-300 rounded-xl bg-white text-slate-800'> Sign Up </button>
        </div>
    </div>
  )
}
