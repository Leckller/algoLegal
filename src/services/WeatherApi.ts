export const WeatherApi = async (endP: string, loc: string) => {
  const key = '40939d16a6d6f645fcbfb6f2aecf4b40'
  const req = fetch(`https://api.weatherstack.com/${endP}?access_key=${key}& query=${loc}`)
  const response = await req;
  return response
}