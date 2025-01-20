import React from 'react'

export const DayCard = ({date,icon,weather_condition,highTemp,LowTemp}) => {
  return (
    <div className='flex item-center justify-between bg-white/10 rounded-2xl p-4 border border-white/10 transition-all hover:bg-white/20'> 
        <div className='flex items-center space-x-4'>
            <span className='text-white font-medium w-36'>{date}</span>
            <div className='text-white font-bold'>{icon}</div>
            <span className='hidden sm:inline text-white/80 font-medium'>{weather_condition}</span>
        </div>
        <div className='flex items-center space-x-4'>
            <span className='text-white font-bold'>{highTemp}&deg;</span>
            <span className='text-white/60 font-medium'>{LowTemp}&deg;</span>
        </div>

    </div>
  )
}
