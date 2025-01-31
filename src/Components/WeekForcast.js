import { DayCard } from './Cards';

export const WeekForcast = ({weatherdata,theme}) => {
  
  const weeksData = weatherdata.forecast.forecastday;

  return (
    <section className='bg-white rounded-3xl shadow-lg p-6'>
        <h1 className={`text-xl ${theme.accent} font-bold mb-6`}>7-Day Forecast</h1>
        <div className='grid grid-rows-7 gap-4'>
          {
            weeksData.map((dayData, index) => (
              <DayCard 
                key={index}
                bg={theme.bgTint}
                date={new Date(dayData.date).toLocaleDateString('en-us', {weekday: 'short', month: 'short', day: 'numeric'})}
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
