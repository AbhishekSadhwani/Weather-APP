import React from 'react'

export const HourlyForecastCard = ({time,bg,icon,value}) => {
    return (
        <div className={`flex flex-col items-center space-y-3 ${bg} border border-white/10 rounded-2xl p-4 min-w-[100px]`}>
            <span className='text-slate-700 font-medium'>{time}</span>
            <div className=''>{icon}</div>
            <span className='text-lg font-bold text-slate-600'>{value}</span>
        </div>
    )
}
