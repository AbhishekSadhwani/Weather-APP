import React from 'react'
import {HourlyForecastCard} from './Cards';

export const DaysForcast = ({weatherdata,theme}) => {
    const currentTime = weatherdata.location.localtime.split(' ')[1];
    const daysData = weatherdata.forecast.forecastday[0].hour.filter((hourData) => {
        return parseInt(hourData.time.split(' ')[1]) >= parseInt(currentTime);
    })

    return (
        <section className='bg-white rounded-3xl p-6 shadow-lg'>
            <h1 className={`text-xl ${theme.accent} font-bold mb-6`}>Hourly Forecast</h1>
            <div className='flex space-x-8 overflow-x-auto scrollbar-hide pb-6'>
                {
                    daysData.map((hourData, index) => (
                        <HourlyForecastCard 
                            key={index}
                            bg={theme.bgTint}
                            time={ parseInt(currentTime) === parseInt(hourData.time.split(' ')[1]) ? 'Now' : hourData.time.split(' ')[1]}
                            icon={<img src={hourData.condition.icon} alt={hourData.condition.text} />}
                            value={hourData.temp_c}
                        />
                    ))
                }
                
            </div>
        </section>
    )
};

