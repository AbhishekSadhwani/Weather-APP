import React from 'react'
import {HourlyForecastCard} from './Cards';

export const DaysForcast = ({weatherdata}) => {
    const currentTime = weatherdata.location.localtime.split(' ')[1];
    const daysData = weatherdata.forecast.forecastday[0].hour.filter((hourData) => {
        return parseInt(hourData.time.split(' ')[1]) >= parseInt(currentTime);
    })

    return (
        <section className='bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/10 rounded-3xl p-6 shadow-lg transition-all'>
            <h1 className='text-xl text-white font-bold mb-6'>Today's Forecast</h1>
            <div className='flex space-x-8 overflow-x-auto scrollbar-hide pb-6'>
                {
                    daysData.map((hourData, index) => (
                        <HourlyForecastCard 
                            key={index}
                            time={hourData.time.split(' ')[1]}
                            icon={<img src={hourData.condition.icon} alt={hourData.condition.text} />}
                            value={hourData.temp_c}
                        />
                    ))
                }
                
            </div>
        </section>
    )
};

