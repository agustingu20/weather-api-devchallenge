import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import clear from '../../assets/day/113.png';
import './futureWeather.css';

const FutureWeather = () => {
  const cityName = useSelector((state) => state.location);

  const { data, loading } = useFetch(
    `http://api.weatherapi.com/v1/forecast.json?key=6be8c28794924ed8a2a184922222905&q=${cityName.location}&days=3&hour=12`,
  );

  console.log(data?.forecast.forecastday);
  return (
    <>
      <div>{loading && <div>loading...</div>}</div>
      <div className='d-flex justify-content-center'>
        {data?.forecast.forecastday.map((forecast) => (
          <Card className='future-weather-card' key={forecast.date} style={{ width: '10rem' }}>
            <Card.Body>
              <Card.Title>
                {new Date(forecast.date.split('-')).toLocaleDateString(
                  'es-ES',
                  {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                  },
                ).toUpperCase()}
              </Card.Title>
              <Card.Img variant="top" src={clear} />
              <div className="d-flex justify-content-center">
                <Card.Text className="pe-2">{forecast.day.maxtemp_c} °C</Card.Text>
                <Card.Text className="ps-2">{forecast.day.mintemp_c} °C</Card.Text>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default FutureWeather;
