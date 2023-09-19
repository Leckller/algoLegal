import WeatherComp from "./WeatherComp"
import { HomeDiv, InfoWeather } from "./styles"

function Home () {
  return(
    <>
      <HomeDiv>
        <InfoWeather>
          <WeatherComp />
        </InfoWeather>
      </HomeDiv>
    </>
  )
}

export default Home