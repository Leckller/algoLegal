import { NavLink } from "react-router-dom"
import { OlApis } from "./styles"

function ApisRoute({setChoseApi}: {setChoseApi: (p: number) => void}) {
  function handleOnClick(N: number) {
    setChoseApi(N)
  }
  return (
    <OlApis>
      <h3>Escolha uma Api, e ela aparecera na rota "Home"!</h3>
      <li>
      <label htmlFor="apiDoTempo">
        Api do tempo
      </label>
        <button onClick={() => handleOnClick(1)} id="apiDoTempo">
          chose!
        </button>
        <button>
          <NavLink to={'/'}>Ir para Home</NavLink>
        </button>
      </li>
    </OlApis>
  )
}

export default ApisRoute
