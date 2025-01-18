import { Sunrise, Sunset } from 'lucide-react'
import React from 'react'

export const SunCard = () => {

    return (
        <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg p-6 hover:bg-white/30 transition-all'>
            <h2 className="text-xl font-bold text-white mb-6">Sun Position</h2>
            <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                <Sunrise className="w-8 h-8 text-yellow-300 mr-3" />
                <div>
                    <div className="text-white/60 text-sm">Sunrise</div>
                    <div className="text-white font-bold text-lg">06:24 AM</div>
                </div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                <Sunset className="w-8 h-8 text-orange-400 mr-3" />
                <div>
                    <div className="text-white/60 text-sm">Sunset</div>
                    <div className="text-white font-bold text-lg">07:38 PM</div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
};
