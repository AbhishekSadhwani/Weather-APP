import { Clock, Droplets, MapPin, Sun, ThermometerSun, Wind } from 'lucide-react'
import React from 'react'
import {WeatherDetailCard} from './Cards';

export const TodaysForecast = ({weatherdata}) => {
    
    return (
        <div className='md:col-span-2 '>
            <div className='group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-lg p-8 hover:bg-white/30 transition-all'>
                <div className='absolute -top-20 -right-20 w-64 h-64 bg-yellow-500/20 blur-3xl rounded-full group-hover:bg-yellow-500/30 transition-all'></div>
                <div className='relative'>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center mb-8'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center'>
                                    <MapPin className='h-6 w-6 mr-2 text-white/90' /> 
                                    <span className='text-3xl font-bold text-white'>New York</span>
                                </div>
                                <div className='flex items-center text-white/80'>
                                    <Clock className='h-4 w-4 mr-2' /> 
                                    <span className='font-medium'>Monday, 14:30</span>
                                </div>
                            </div>
                            <div className='text-right'>
                                <span className='text-white font-bold text-7xl tracking-tighter'>24°</span>
                                <p className='font-medium text-white'>Partly Cloudy</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                            <WeatherDetailCard icon={<ThermometerSun className='h-6 w-6'/>} label="Feels like" value="26°"/>
                            <WeatherDetailCard icon={<Droplets className='h-6 w-6'/>} label="Humidity" value="65%" />
                            <WeatherDetailCard icon={<Wind className='h-6 w-6'/>} label="Wind" value="12 km/h" />
                            <WeatherDetailCard icon={<Sun className='h-6 w-6'/>} label="UV Index" value="6/10" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
