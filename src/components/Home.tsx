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
      <h5>Insano</h5>
    </>
  )
}

export default Home