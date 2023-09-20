import WeatherComp from "./WeatherComp"

function Home ({choseApi}: {choseApi: number, setChoseApi: (p: number) => void}) {
  return(
    <>
      {choseApi === 1 && <WeatherComp />}
    </>
  )
}

export default Home