import React from 'react';
import FutureWeather from '../../components/FutureWeather';
import WeatherHighlights from '../../components/WeatherHighlights';

const ForecastWeatherHome = () => {
  return (
    <div>
        <FutureWeather />
        <WeatherHighlights />
    </div>
  );
};

export default ForecastWeatherHome;
