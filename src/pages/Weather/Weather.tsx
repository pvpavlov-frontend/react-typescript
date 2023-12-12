import React, { useState } from 'react';
import axios from 'axios';
import {
    CityInput,
    ErrorDesc,
    ErrorTitle,
    Header,
    InfoCity,
    InfoFlex,
    InfoItem,
    InfoTemp,
    Load,
    Main,
    MainWrapper,
    SearchButton,
    SearchWrapper,
    WeatherErrorContainer,
    WeatherInfoContainer
} from './styles';

const API_KEY = 'eea75aae6dbe00233ac1efadf2d99a2a';

function Weather() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGetWeather = async () => {
        if (!city) {
            alert('Введите название города');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            setWeatherData(response.data);
        } catch (err) {
            setError('Ошибка при получении данных о погоде');
        } finally {
            setLoading(false);
        }
    };

    return (
        <MainWrapper>
            <Header>
                <h1>Weather App</h1>
            </Header>
            <Main>
                <SearchWrapper>
                    <CityInput type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                    <SearchButton onClick={handleGetWeather}>Получить погоду</SearchButton>
                </SearchWrapper>

                {loading && (
                    <>
                        <Load>
                            <img src={`https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif`} alt="Погодная иконка" />
                        </Load>
                    </>
                )}
                {weatherData && (
                    <WeatherInfoContainer>
                        <InfoFlex>
                            <InfoItem>
                                <InfoTemp>{(weatherData.main.temp - 273.15).toFixed() + "º"} </InfoTemp>
                                <InfoCity>{weatherData.name}</InfoCity>
                            </InfoItem>
                            <InfoItem>
                                <InfoTemp>
                                    <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Погодная иконка" />
                                </InfoTemp>
                                <InfoCity>
                                    {weatherData.weather[0].description}
                                </InfoCity>
                            </InfoItem>
                        </InfoFlex>
                    </WeatherInfoContainer>
                )}
                {error &&
                    <WeatherErrorContainer>
                        <ErrorTitle>
                            API Error
                        </ErrorTitle>
                        <ErrorDesc>
                            {error}
                        </ErrorDesc>
                    </WeatherErrorContainer>
                }

            </Main>

        </MainWrapper>
    );
};

export default Weather;
