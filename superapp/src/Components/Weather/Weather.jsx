import React, { useState, useEffect } from 'react';
import pressure from '../../assets/images/pressure.png';
import humidity from '../../assets/images/humidity.png';
import wind from '../../assets/images/wind.png';
import styles from './Weather.module.css';

const Weather = () => {
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState(false);

  const optionsTime = {
    hour: 'numeric',
    minute: 'numeric',
  };
  useEffect(() => {
    const fetchWeather = async () => {
      await fetch(
        'https://api.weatherapi.com/v1/current.json?key=3bd63865a9774012b0092605230910&q=Varanasi&aqi=no'
      )
        .then(async (data) => await data.json())
        .then((data) => setWeather(data));
    };
    fetchWeather();
  }, []);

  useEffect(() => {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const format = date + '-' + month + '-' + year;
    setDate(format);
  }, []);
  return (
    <div className={styles.weatherContainer}>
      <div className={styles.weatherHeader}>
        <span>{date}</span>
        {new Date().toLocaleTimeString('en-us', optionsTime)}
      </div>
      {weather ? (
        <div className={styles.weatherFooter}>
          <div className={styles.weatherIcon}>
            <img src={weather.current.condition.icon} alt="weathericon"></img>
            <p>{weather.current.condition.text}</p>
          </div>
          <p className={styles.weatherSection}>|</p>
          <div className={styles.weatherTemp}>
            <p className={styles.weathertemperature}>
              {weather.current.temp_c}
              <span> °C</span>
            </p>
            <p className={styles.weatherpressure}>
              <img src={pressure} alt="pressureicon" />
              {weather.current.pressure_mb} mbar <br />
              pressure
            </p>
          </div>
          <p className={styles.weatherSection}>|</p>
          <div className={styles.weatherWindDiv}>
            <img src={wind} className={styles.WeatherWindIcon} alt="windicon" />
            <p className={styles.WeatherWind}>
              {weather.current.wind_kph} Km/h
              <br />
              wind
            </p>
            <img
              src={humidity}
              className={styles.WeatherHumidityIcon}
              alt="humidityicon"
            />
            <p className={styles.WeatherHumidity}>
              {weather.current.humidity}% <br />
              humidity
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
