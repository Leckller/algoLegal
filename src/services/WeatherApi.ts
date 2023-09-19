export const WeatherApi = async (cityURL: string, endP: string) => {
  try{
    const key = 'b1b78a3d2bf549a682c21507231909'
    const req = fetch(`https://api.weatherapi.com/v1/${endP}.json?lang=pt&key=${key}&q=${cityURL}`)
    const response = await req;
    return response
  } catch(error) {
    alert('error')
  }
}