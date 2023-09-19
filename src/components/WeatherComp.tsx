import { useEffect, useState } from "react";
import { WeatherApi } from "../services/WeatherApi";
import { apiWeathertype, forecastWeather } from "../services/types";
import { FormWeather , InfoWeather, DivInfoWeather, UlForecast } from "./styles";
// import Previsao from "./Previsao";

function WeatherComp () {
  const [apiResp, setApiResp] = useState<apiWeathertype>()
  const [locate, setLocate] = useState('rio de janeiro')
  const [searchInput, setSearchInput] = useState('')
  const [forecastApi, setForecastApi] = useState<forecastWeather>()
  useEffect(() => {
    const funcEffect = async () => {
      const req = await WeatherApi(locate, 'current');
      const resp = await req?.json()
      if (resp.error) return alert('vish tem esse lugar não, doidao')
      setApiResp(resp)
    }
    const funcEffect2 = async () => {
      const req = await WeatherApi(locate, 'forecast');
      const resp = await req?.json();
      if (resp.error) return '';
      console.log(resp.forecast)
      setForecastApi(resp)
    }
    funcEffect()
    funcEffect2()
  }, [locate])
  function handleClickEnviar (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    setLocate(searchInput)
  }
  return(
    <DivInfoWeather>
      <FormWeather>
      <label htmlFor="searchLocate">
        Digite uma cidade: 
      </label>
        <input 
         type="text"
         onChange={(e) => setSearchInput(e.target.value)}
         id="searchLocate"
         value={searchInput}
         placeholder="Ex: rio de janeiro" />
        <button onClick={(e) => handleClickEnviar(e)}>Enviar</button>
      </FormWeather>
    <h2>{`Informações do tempo do ${apiResp?.location.name} - ${apiResp?.location.region}`}</h2>
    <InfoWeather textTemp={apiResp?.current.condition.text === 'Sol' ? 
    'animation: rodando 1.5s linear infinite' : ''}>
    <img src={apiResp?.current.condition.icon} alt="imagem do clima" />
    <h3>{`${apiResp?.current.temp_c}°C`}</h3>
    </InfoWeather>
    <h4>{apiResp?.current.condition.text}</h4>
    <h4>{`Sensação térmica de ${apiResp?.current.feelslike_c}°C`}</h4>
    <h4>{`Quantidade de nuvens: ${apiResp?.current.cloud}`}</h4>
    {/* <Previsao forecast={forecastApi}/> */}
    { forecastApi?.forecast.forecastday.map((e) => (
      <UlForecast key={e.date[0]}>
        {e.hour.map((e2) => (
          
            <li>{`${e2.time.slice(10)} - ${e2.temp_c}°C`}</li>
        ))}
      </UlForecast>
     ))}
    </DivInfoWeather>
  )
}

export default WeatherComp;