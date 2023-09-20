import { useNavigate } from "react-router-dom"
import { ButtonReset, OlApis } from "./styles"

function ApisRoute({setChoseApi}: {setChoseApi: (p: number) => void}) {
  const navigate = useNavigate();
  function handleOnClick(N: number) {
    setChoseApi(N)
  }
  // É possivel melhorar esse sistema colocando com as 'li' com map
  // criando um vetor q armazene as informações para cada Api e
  // armazenando em um documento separado
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
        <button onClick={() => navigate('/')}>
          Ir para Home
        </button>
      </li>
      <ButtonReset onClick={() => handleOnClick(0)}>Reset</ButtonReset>
    </OlApis>
  )
}

export default ApisRoute
