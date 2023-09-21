import { useEffect, useState } from "react"
import { ApiDog, ApiFox } from "../services/AnimaisApi"
import { AnimaisDiv, AnimaisSection } from "./styles";

type allAnimals = {
  dog: string;
  // duck: string;
  fox: string;
}

function AnimaisComp() {
  const [returnApis, setReturnApis] = useState<allAnimals>()
  useEffect(() => {
    const aF =async () => {
      const dog = await ApiDog();
      // const duck = await ApiDuck();
      const fox = await ApiFox();
      const all = {dog, fox}
      setReturnApis(all)
    }
    aF()
  }, [])
  return (
    <AnimaisDiv>
      <AnimaisSection>
      <h2>Random dog</h2>
      <img src={returnApis?.dog} />
      </AnimaisSection>
      <AnimaisSection>
      <h2>Random Fox</h2>
      <img src={returnApis?.fox} />
      </AnimaisSection>
    </AnimaisDiv>
  )
}

export default AnimaisComp;
