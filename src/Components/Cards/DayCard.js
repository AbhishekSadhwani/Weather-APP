import React from 'react'

export const DayCard = ({bg,date,icon,weather_condition,highTemp,LowTemp}) => {
  return (
    <div className={`flex item-center justify-between ${bg} rounded-2xl p-4 border border-white/10`}> 
        <div className='flex items-center space-x-4'>
            <span className='text-slate-800 font-medium w-24'>{date}</span>
            <div className='font-bold'>{icon}</div>
            <span className='hidden sm:block text-slate-600 font-medium'>{weather_condition}</span>
        </div>
        <div className='flex items-center space-x-4'>
            <span className='text-slate-600 font-bold'>{highTemp}&deg;</span>
            <span className='text-slate-600 font-medium'>{LowTemp}&deg;</span>
        </div>

    </div>
  )
}
