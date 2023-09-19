import { useEffect, useState } from "react";
import { WeatherApi } from "../services/WeatherApi";
import { apiWeathertype } from "../services/types";
import { InfoWeather } from "./styles";

function WeatherComp () {
  const [apiResp, setApiResp] = useState<apiWeathertype>()
  useEffect(() => {
    const funcEffect = async () => {
      const req = await WeatherApi('rio de janeiro', 'current');
      const resp = await req.json();
      console.log(resp)
      setApiResp(resp)
    }
    funcEffect()
  }, [])
  return(
    <InfoWeather>
    <img src={apiResp?.current.condition.icon} alt="imagem do clima" />
    <h3>{apiResp?.current.temp_c}°C</h3>
    </InfoWeather>
  )
}

export default WeatherComp;