import clear from "../assets/weather/clear.png";
import clouds from "../assets/weather/cloudy.png";
import rain from "../assets/weather/rain.png";
import snow from "../assets/weather/snow.png";
import thunderstorm from "../assets/weather/thunderstorm.png";
import mist from "../assets/weather/mist.png";
import night from "../assets/weather/night.png";
import sunny from "../assets/weather/sunny.png";

export const weatherBackgrounds = {
    Clear: clear, // Clear sky
    Clouds: clouds, // Cloudy sky
    Rain: rain, // Rainy scene
    Snow: snow, // Snowy scene
    Thunderstorm: thunderstorm, // Thunderstorm
    Mist: mist, // Misty scene
    Night: night, // Night sky
    Sunny: sunny, // Sunny sky
  };


export const weatherThemes = {
  Clear: {
    theme_text: "Clear",
    gradient: 'from-blue-500 to-sky-300',
    accent: 'text-blue-500',
    bgTint: 'bg-blue-50',
    iconColor: 'text-yellow-500',
  },
  Clouds: {
    theme_text: "Clouds",
    gradient: 'from-gray-500 to-slate-400',
    accent: 'text-slate-500',
    bgTint: 'bg-slate-50',
    iconColor: 'text-slate-500',
  },
  Rain: {
    theme_text: "Rain",
    gradient: 'from-blue-700 to-blue-500',
    accent: 'text-blue-600',
    bgTint: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  Snow: {
    theme_text: "Snow",
    gradient: 'from-blue-200 to-blue-100',
    accent: 'text-blue-400',
    bgTint: 'bg-blue-50',
    iconColor: 'text-blue-400',
  },
  Thunderstorm: {
    theme_text: "Thunderstorm",
    gradient: 'from-gray-700 to-gray-600',
    accent: 'text-gray-600',
    bgTint: 'bg-gray-50',
    iconColor: 'text-gray-500',
  },
  Mist: {
    theme_text: "Mist",
    gradient: 'from-gray-400 to-gray-300',
    accent: 'text-gray-500',
    bgTint: 'bg-gray-50',
    iconColor: 'text-gray-400',
  },
  Night: {
    theme_text: "Night",
    gradient: 'from-indigo-900 to-purple-900',
    accent: 'text-indigo-400',
    bgTint: 'bg-indigo-50',
    iconColor: 'text-indigo-400',
  },
  Sunny: {
    theme_text: "Sunny",
    gradient: 'from-amber-400 to-orange-300',
    accent: 'text-amber-500',
    bgTint: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
};
