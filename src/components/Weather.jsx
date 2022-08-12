import React, { useEffect, useState } from 'react'

const Weather = () => {
    const [city, setCity] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [temp, setTemp] = useState('');
    const [wind, setWind] = useState('');
    const key = `d366ec59e54fe676c9793869d26d37ae`;

    const getWeatherData = async (city) => {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lat={lat}&lon={lon}&units=metric&appid=${key}`);
        let data = await response.json();
        setName(data.name);
        setDesc(data.weather[0].description);
        setWind(data.wind.speed);
        setTemp(data.main.temp);
    }

    useEffect(() => { getWeatherData(city) }, [city]);

    const changeCity = (e) => {
        setCity(e.currentTarget.value);
    }

    return (
        <>
            <div className='weather-container'>
                <h1 className='weather'>WEATHER <span className='forecast'>FORECAST</span> </h1>
                <select className='select' onChange={changeCity}>
                    <option value="" selected disabled hidden>Choose a city</option>
                    <option value="Baku">Baku</option>
                    <option value="Istanbul">Istanbul</option>
                    <option value="New York">New York</option>
                    <option value="Moscow">Moscow</option>
                    <option value="Stockholm">Stockholm</option>
                    <option value="Oslo">Oslo</option>
                </select>
                <div className='weather-info'>
                    <h1><span className='city'>City</span> : {name}</h1>
                    <p>Description : <span className='desc'>{desc}</span> </p>
                    <p>Temperature : <span className='celsius'>{temp} °C</span></p>
                    <p>Wind Speed : <span className='wind'>{wind} km/h</span></p>
                </div>
            </div>
        </>
    )
}

export default Weather;