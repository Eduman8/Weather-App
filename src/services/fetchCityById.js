const APIKEY = process.env.REACT_APP_APIKEY;

export default function fetchCityById(id, setData) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${APIKEY}&units=metric`
  )
    .then((r) => r.json())
    .then((recurso) => {
      if (recurso.main !== undefined) {
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon,
        };
        setData(ciudad);
      } else {
        setData(null);
      }
    });
}
