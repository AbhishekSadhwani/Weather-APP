import React from 'react'
import { DayCard } from './Cards';
import { Sun } from 'lucide-react'

export const WeekForcast = () => {
  return (
    <section className='bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-lg p-6 transition-all hover:bg-white/20'>
        <h1 className='text-xl text-white font-bold mb-6'>7-Day Forecast</h1>
        <div className='grid grid-rows-7 gap-4'>
            <DayCard dayOfWeek="Today" icon={<Sun className='h-8 w-8' />} highTemp="24°" LowTemp="18°" />
            <DayCard dayOfWeek="Today" icon={<Sun className='h-8 w-8' />} highTemp="24°" LowTemp="18°" />
            <DayCard dayOfWeek="Today" icon={<Sun className='h-8 w-8' />} highTemp="24°" LowTemp="18°" />
            <DayCard dayOfWeek="Today" icon={<Sun className='h-8 w-8' />} highTemp="24°" LowTemp="18°" />
            <DayCard dayOfWeek="Today" icon={<Sun className='h-8 w-8' />} highTemp="24°" LowTemp="18°" />
            <DayCard dayOfWeek="Today" icon={<Sun className='h-8 w-8' />} highTemp="24°" LowTemp="18°" />
            <DayCard dayOfWeek="Today" icon={<Sun className='h-8 w-8' />} highTemp="24°" LowTemp="18°" />
        </div>
    </section>
  )
};
