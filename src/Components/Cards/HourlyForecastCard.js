import React from 'react'

export const HourlyForecastCard = ({time,icon,value}) => {
    return (
        <div className='flex flex-col items-center space-y-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 transition-all hover:bg-white/10 min-w-[100px]'>
            <span className='text-white/80 font-medium'>{time}</span>
            <div className='text-white'>{icon}</div>
            <span className='text-lg font-bold text-white'>{value}</span>
        </div>
    )
}
