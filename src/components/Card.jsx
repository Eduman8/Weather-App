import React from "react";
import styles from "./Card.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { max, min, name, img, primary, onClose, cityId } = props;
  // acá va tu código

  return (
    <div className={`${styles.card} ${primary ? styles.primary : ""}`}>
      <Link to={`/city/${cityId}`} className={styles.name}>
        {name}
        {!primary && (
          <button className={styles.button} onClick={onClose}>
            <IoCloseCircleOutline />
          </button>
        )}
      </Link>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      <div className={styles.temps}>
        <Temp label="Min" temp={min} />
        <Temp label="Max" temp={max} />
      </div>
    </div>
  );
}

function Temp({ label, temp }) {
  return (
    <div className={styles.temp}>
      <span>{label}</span>
      <span>{temp}°</span>
    </div>
  );
}
