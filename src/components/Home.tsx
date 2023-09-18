import { useEffect } from "react"
import { coffeApi } from "../services/coffeApi"

function Home () {
  useEffect(() => {
    const uEffect = async () => {
      const api = await coffeApi()
      console.log(api)
    }
    uEffect()
  }, [])
  return(
    <>
      teste async
    </>
  )
}

export default Home