import { useEffect, useState } from "react"
import { HomeDiv, InfoWeather } from "./styles"
import { WeatherApi } from "../services/WeatherApi"
import { apiWeathertype } from "../services/types"

function Home () {
  const [localizacao, setLocalizacao] = useState('Niterói')
  const [apiResponse, setApiResponse] = useState<apiWeathertype>()
  useEffect(() => {
    const uEffect = async () => {
      const api = await WeatherApi('current', localizacao)
      console.log(api)
      const data = await api.json()
      setApiResponse(data)
    }
    uEffect()
  }, [localizacao])
  return(
    <>
      <HomeDiv>
        <h2>{`Tempo do ${localizacao}`}</h2>
        <InfoWeather>
        {apiResponse && <img src={apiResponse?.current.weather_icons[0]} alt="" />}
        <h3>{apiResponse?.current.temperature}°C</h3>
        </InfoWeather>
      </HomeDiv>
    </>
  )
}

export default Home