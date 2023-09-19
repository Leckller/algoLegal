import { useEffect, useState } from "react";
import { WeatherApi } from "../services/WeatherApi";
import { apiWeathertype } from "../services/types";
import { InfoWeather, DivInfoWeather } from "./styles";

function WeatherComp () {
  const [apiResp, setApiResp] = useState<apiWeathertype>()
  const [locate, setLocate] = useState('rio de janeiro')
  const [searchInput, setSearchInput] = useState('')
  useEffect(() => {
    const funcEffect = async () => {
      const req = await WeatherApi(locate, 'current');
      const resp = await req.json();
      setApiResp(resp)
    }
    const funcEffect2 = async () => {
      const req = await WeatherApi(locate, 'forecast');
      const resp = await req.json();
      console.log(resp)
    }
    funcEffect()
    funcEffect2()
  }, [locate])
  function handleClickEnviar () {
    setLocate(searchInput)
  }
  return(
    <DivInfoWeather>
      <label htmlFor="searchLocate">
        Digite uma cidade: 
        <input 
         type="text"
         onChange={(e) => setSearchInput(e.target.value)}
         id="searchLocate"
         value={searchInput}
         placeholder="Ex: rio de janeiro" />
        <button onClick={() => handleClickEnviar()}>Enviar</button>
      </label>
    <h2>{`Informações do tempo do ${apiResp?.location.name} - ${apiResp?.location.region}`}</h2>
    <InfoWeather textTemp={apiResp?.current.condition.text === 'Sol' ? 
    'animation: rodando 1.5s linear infinite' : ''}>
    <img src={apiResp?.current.condition.icon} alt="imagem do clima" />
    <h3>{`${apiResp?.current.temp_c}°C`}</h3>
    </InfoWeather>
    <h4>{apiResp?.current.condition.text}</h4>
    <h4>{`Sensação térmica de ${apiResp?.current.feelslike_c}°C`}</h4>
    <h4>{`Quantidade de nuvens: ${apiResp?.current.cloud}`}</h4>
    </DivInfoWeather>
  )
}

export default WeatherComp;