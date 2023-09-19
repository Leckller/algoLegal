import { forecastWeather } from "../services/types";

function Previsao ({ apiFore }: { apiFore: forecastWeather}) {
  return(
    <>
     { apiFore.forecast.forecastday.map((e) => (
      <div>
        {e.hour.map((e2) => (
          <div key={e2.time}>{`${e2.temp_c} ${e2.time}`}</div>
        ))}
      </div>
     ))}
    </>
  )
}

export default Previsao;