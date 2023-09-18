export type apiWeathertype = {
  "request": {
      "type": string,
      "query": string,
      "language": string,
      "unit": string
  },
  "location": {
      "name": string,
      "country": string,
      "region": string,
      "lat": string,
      "lon": string,
      "timezone_id": string,
      "localtime": string,
      "localtime_epoch": number,
      "utc_offset": string
  },
  "current": {
      "observation_time": string,
      "temperature": string,
      "weather_code": string,
      "weather_icons": [
        string
      ],
      "weather_descriptions": [
        string
      ],
      "wind_speed": number,
      "wind_degree": number,
      "wind_dir": string,
      "pressure": number,
      "precip": number,
      "humidity": number,
      "cloudcover": number,
      "feelslike": number,
      "uv_index": number,
      "visibility": number
  }
}