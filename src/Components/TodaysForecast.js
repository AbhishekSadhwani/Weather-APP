import { Clock, Droplets, MapPin, Sun, ThermometerSun, Wind } from 'lucide-react'
import {WeatherDetailCard} from './Cards';
import { weatherBackgrounds } from '../constants/weatherConditions';
import { useState } from 'react';


export const TodaysForecast = ({weatherdata, theme}) => {
    const date = new Date();
    const todaysday = date.toLocaleDateString("en-US", {timeZone: weatherdata.location.tz_id,weekday: 'long'});
    const currenttime = date.toLocaleTimeString("en-US", {timeZone: weatherdata.location.tz_id,hour: '2-digit', minute: '2-digit'});
    
    return (
        <div className='md:col-span-2 '>
            <div 
                className='rounded-3xl p-8 shadow-lg relative overflow-hidden'
                style={
                    {
                        backgroundImage: `url(${weatherBackgrounds[theme.theme_text]})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center'
                        }
                    }
                >
                    <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} ${weatherdata.current.is_day === 0 ? "opacity-10" : "opacity-75"}`}></div>
                    <div className='relative'>
                        <div className='flex flex-col'>
                            <div className='flex justify-between md:items-center mb-8'>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center'>
                                        <MapPin className='h-6 w-6 mr-2 text-white/90' /> 
                                        <span className='text-3xl md:text-4xl font-bold text-white/90'>{weatherdata.location.name}</span>
                                    </div>
                                    <div className='flex items-center text-white/80'>
                                        <Clock className='h-4 w-4 mr-2' /> 
                                        <span className='text-sm md:text-base font-medium'>{todaysday} {currenttime}</span>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <span className='text-white font-bold text-5xl md:text-6xl tracking-tighter'>{weatherdata.current.temp_c}&deg;</span>
                                    <div className='flex items-center justify-center'>
                                        <img src={weatherdata.current.condition.icon} alt={weatherdata.current.condition.text} />
                                        <p className='font-medium text-white'>{weatherdata.current.condition.text}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                                <WeatherDetailCard icon={<ThermometerSun className='h-6 w-6'/>} label="Feels like" value={`${weatherdata.current.feelslike_c}°`}/>
                                <WeatherDetailCard icon={<Droplets className='h-6 w-6'/>} label="Humidity" value={`${weatherdata.current.humidity}%`} />
                                <WeatherDetailCard icon={<Wind className='h-6 w-6'/>} label="Wind" value={`${weatherdata.current.wind_kph}km/h`} />
                                <WeatherDetailCard icon={<Sun className='h-6 w-6'/>} label="UV Index" value={weatherdata.current.uv} />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
};
