import React from 'react'
import {HourlyForecastCard} from './Cards';
import { Cloud } from 'lucide-react'

export const DaysForcast = ({weatherdata}) => {
    
    return (
        <section className='bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/10 rounded-3xl p-6 shadow-lg transition-all'>
            <h1 className='text-xl text-white font-bold mb-6'>Today's Forecast</h1>
            <div className='flex space-x-8 overflow-x-auto scrollbar-hide pb-6'>
                <HourlyForecastCard time="15:00" icon={<Cloud className='h-10 w-10'/>} value="26°" />
                <HourlyForecastCard time="15:00" icon={<Cloud className='h-10 w-10'/>} value="26°" />
                <HourlyForecastCard time="15:00" icon={<Cloud className='h-10 w-10'/>} value="26°" />
                <HourlyForecastCard time="15:00" icon={<Cloud className='h-10 w-10'/>} value="26°" />
                <HourlyForecastCard time="15:00" icon={<Cloud className='h-10 w-10'/>} value="26°" />
                
            </div>
        </section>
    )
};

