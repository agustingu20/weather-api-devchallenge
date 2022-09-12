import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import './currentWeather.css';
// import { weatherTypes } from '../../assets/forecastTypes';

const CurrentWeather = () => {
  const cityName = useSelector((state) => state.location);

  const { data, loading } = useFetch(
    `http://api.weatherapi.com/v1/current.json?key=6be8c28794924ed8a2a184922222905&q=${cityName.location}`,
  );
  console.log(data);

  return (
    <div className="current-weather-wrapper text-light">
      <div className="pt-5 w-50">
        <Button variant="secondary" size="sm">
          Search for places
        </Button>
      </div>
      <section className='mt-5'>
        <div>
          {data?.current.is_day === 1 && <img alt="forecast_icon_day" />}
          {data?.current.is_day === 0 && <img alt="forecast_icon_night" />}
        </div>
        <div className="weather-icon-wrapper"></div>
        <div>
          {loading && <div>loading...</div>}
          {data && (
            <>
              <p className='mt-5'>{data.current.temp_c} °C</p>
              <p className='mt-5'>{data.current.condition?.text}</p>
              <p className='mt-5'>{data.location.localtime}</p>
              <p className='mt-5'>{data.location.name}</p>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default CurrentWeather;
