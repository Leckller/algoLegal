import { useEffect, useState } from "react"
import { ApiDog, ApiDuck, Apifox } from "../services/AnimaisApi"

type allAnimals = {
  dog: string;
  duck: string;
  fox: string;
}

function AnimaisComp() {
  const [returnApis, setReturnApis] = useState<allAnimals>()
  useEffect(() => {
    const aF =async () => {
      const dog = await ApiDog();
      const duck = await ApiDuck();
      const fox = await Apifox();
      const all = {dog, duck, fox}
      setReturnApis(all)
      console.log(returnApis)
    }
    aF()
  }, [])
  return (
    <div>
      <img src={returnApis?.dog} alt="dog" />
      <img src={returnApis?.duck} alt="duck" />
      <img src={returnApis?.fox} alt="fox" />
    </div>
  )
}

export default AnimaisComp;
