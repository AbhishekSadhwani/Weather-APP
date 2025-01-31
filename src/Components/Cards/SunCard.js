import { Sunrise, Sunset} from 'lucide-react'
import React from 'react'

export const SunCard = ({weatherdata,theme}) => {
    const sunCardData = weatherdata.forecast.forecastday[0].astro;

    return (
        <div className='bg-white/80 rounded-3xl shadow-lg p-6'>
            <h2 className={`text-xl font-bold ${theme.accent} mb-6`}>Sun Position</h2>
            <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                <Sunrise className="w-8 h-8 text-yellow-500 mr-3" />
                <div>
                    <div className="text-slate-500 text-sm">Sunrise</div>
                    <div className="text-slate-800 font-bold text-lg">{sunCardData.sunrise}</div>
                </div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                <Sunset className="w-8 h-8 text-orange-500 mr-3" />
                <div>
                    <div className="text-slate-500 text-sm">Sunset</div>
                    <div className="text-slate-800 font-bold text-lg">{sunCardData.sunset}</div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
};
