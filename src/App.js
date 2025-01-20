import {TodaysForecast, SearchComp, WeekForcast, DaysForcast, Loading} from './Components';
import {SunCard} from './Components/Cards';
import { useEffect, useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem("location") || 'London');

  // fetching weather data
  useEffect(() => {
    const fetchWeatherData = async () => {
      try{
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_WEATHER_BASE_URL}/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${searchQuery}&days=7&aqi=no&alerts=no`);
        if(!response.ok){
          throw new Error(response.statusText);
        }
        
        const data = await response.json();
        setWeatherData(data);
        localStorage.setItem("location", searchQuery);
      }
      catch(error){
        console.error('Error fetching weather data: ', error);
      }
      finally{
        setLoading(false);
      }
    
    };

    fetchWeatherData();
  
  },[searchQuery]);

  // form to hanlde search query change
  const handleQueryChange = (query) => {
    setSearchQuery(query);
  };

  console.log(weatherData);


  if(loading){
    return (
      <Loading />
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4 md:p-8">
      <div className='max-w-5xl mx-auto space-y-8'> 
        <SearchComp handleQueryChange={handleQueryChange}/>
        <section className='grid md:grid-cols-3 gap-8'>
          <TodaysForecast weatherdata={weatherData}/>
          <SunCard weatherdata={weatherData} />
        </section>
        <DaysForcast weatherdata={weatherData} />
        <WeekForcast weatherdata={weatherData} />

      </div>
    </main>
  );
}

export default App;
