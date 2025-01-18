import { Search } from 'lucide-react'
import React from 'react'

export const SearchComp = () => {
  return (
    <section className='bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-2xl p-3 shadow-lg transition-all'>
        <div className='text-white flex items-center'>
            <Search className='h-5 w-5 text-white/80 ml-3'/>
            <input className='flex-1 bg-transparent outline-none border-none placeholder:font-medium placeholder:text-white/60 px-4 py-1 ' placeholder='Search location...' type="text" />
        </div>
    </section>
  )
};