import {TodaysForecast, SearchComp, WeekForcast, DaysForcast} from './Components';
import {SunCard} from './Components/Cards';
import { useEffect, useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const base_url = "http://api.weatherapi.com/v1";


  useEffect(() =>{
    const fetchWeatherData = async () => {
      const res = await fetch(`${base_url}/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=Jaipur&days=7&aqi=no&alerts=no`);
      const data = await res.json();
      setWeatherData(data);
    };

    fetchWeatherData();
  },[])

  console.log(weatherData);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4 md:p-8">
      <div className='max-w-5xl mx-auto space-y-8'> 
        <SearchComp />
        <section className='grid md:grid-cols-3 gap-8'>
          <TodaysForecast />
          <SunCard />
        </section>
        <DaysForcast />
        <WeekForcast />

      </div>
    </main>
  );
}

export default App;
