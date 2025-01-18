import React from 'react'

export const WeatherDetailCard = ({icon,label,value}) => {
  return (
    <div className='flex items-center bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl hover:bg-white/10 p-4'>
        <div className='text-white/90 mr-3'>{icon}</div>
        <div className='flex flex-col'>
            <div className='text-sm text-white/60 font-medium'>{label}</div>
            <div className='text-white font-bold'>{value}</div>
        </div>
    </div>
  )
};

