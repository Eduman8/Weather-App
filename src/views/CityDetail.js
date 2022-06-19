import React from "react";
import fetchCityById from "../services/fetchCityById";
import styles from "./CityDetail.module.css";

function CityDetail({ id }) {
  const [city, setCity] = React.useState();
  React.useEffect(() => {
    fetchCityById(id, setCity);
  }, [id, setCity]);

  return (
    <div className={styles.city}>
      {city === undefined && <h2>Cargando...</h2>}
      {city === null && <h2>Ciudad no encontrada</h2>}
      {city && (
        <div className={styles.detail}>
          <div className={styles.prop}>
            <label>Ciudad</label>
            <span>{city.name}</span>
          </div>
          <div className={styles.prop}>
            <label>Temperatura maxima:</label>
            <span>{city.max}</span>
          </div>
          <div className={styles.prop}>
            <label>Temperatura minima:</label>
            <span>{city.min}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CityDetail;
