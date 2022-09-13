import './App.css';
import { CurrentWeather } from './components/CurrentWeather';
import { ForecastWeatherHome } from './pages/ForecastWeatherHome';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="d-flex">
        <div>
          <CurrentWeather />
        </div>
        <div className='forecast-home'>
          <ForecastWeatherHome />
        </div>
      </div>
    </div>
  );
}

export default App;
