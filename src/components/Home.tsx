import AnimaisComp from "./AnimaisComp"
import HomeContent from "./HomeContent"
import WeatherComp from "./WeatherComp"

function Home ({choseApi}: {choseApi: number, setChoseApi: (p: number) => void}) {
  return(
    <>
      {choseApi === 0 && <HomeContent/>}
      {choseApi === 1 && <WeatherComp />}
      {choseApi === 2 && <AnimaisComp />}
    </>
  )
}

export default Home