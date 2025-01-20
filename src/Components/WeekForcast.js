import { DayCard } from './Cards';

export const WeekForcast = ({weatherdata}) => {
  
  const weeksData = weatherdata.forecast.forecastday;

  return (
    <section className='bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-lg p-6 transition-all hover:bg-white/20'>
        <h1 className='text-xl text-white font-bold mb-6'>7-Day Forecast</h1>
        <div className='grid grid-rows-7 gap-4'>
          {
            weeksData.map((dayData, index) => (
              <DayCard 
                key={index}
                date={new Date(dayData.date).toLocaleDateString('en-us', {weekday: 'long', month: 'short', day: 'numeric'})}
                icon={<img src={dayData.day.condition.icon} alt={dayData.day.condition.text} />}
                weather_condition={dayData.day.condition.text}
                highTemp={dayData.day.maxtemp_c} 
                LowTemp={dayData.day.mintemp_c}
              />
            ))}
        </div>
    </section>
  )
};
