import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';

const CurrentWeather = () => {
  const cityName = useSelector((state) => state.location);

  const { data, loading } = useFetch(
    `http://api.weatherapi.com/v1/current.json?key=6be8c28794924ed8a2a184922222905&q=${cityName.location}`,
  );
  console.log(data);

  return (
    <div>
      <div>
        <Button variant="secondary" size="sm">
          Search for places
        </Button>
      </div>
      <div>
        <img alt="forecast_icon" />
      </div>
      <div>
        {loading && <div>loading...</div>}
        {data && (
          <>
            <p>{data.current.temp_c} °C</p>
            <p>{data.current.condition?.text}</p>
            <p>{data.location.localtime}</p>
            <p>{data.location.name}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CurrentWeather;
