import { useEffect, useState } from "react"
import { HomeDiv } from "./styles"
import { WeatherApi } from "../services/WeatherApi"

function Home () {
  const [localizacao, setLocalizacao] = useState<string>('Rio de Janeiro')
  const [apiResponse, setApiResponse] = useState()
  useEffect(() => {
    const uEffect = async () => {
      const api = await WeatherApi('current', localizacao)
      const data = await api.json()
      setApiResponse(data)
      console.log(apiResponse)
    }
    uEffect()
  }, [setApiResponse])
  return(
    <>
      <HomeDiv>
        <h2>{`Tempo do ${localizacao}`}</h2>
        <img src={apiResponse?.current.weather_icons[0]} alt="" />
      </HomeDiv>
    </>
  )
}

export default Home