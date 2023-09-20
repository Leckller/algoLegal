import AnimaisComp from "./AnimaisComp"
import WeatherComp from "./WeatherComp"

function Home ({choseApi}: {choseApi: number, setChoseApi: (p: number) => void}) {
  return(
    <>
      {choseApi === 1 && <WeatherComp />}
      {choseApi === 2 && <AnimaisComp />}
    </>
  )
}

export default Home