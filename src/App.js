import React from "react";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import fetchCity from "./services/fetchCity.js";
import styles from "./App.module.css";

function App() {
  const [data, setData] = React.useState([]);

  function onSearch(ciudad) {
    if (data.length > 3) {
      alert("No puedes agregar más de 4 ciudades");
    } else {
      fetchCity(ciudad, setData);
    }
  }
  function handleOnClose(id) {
    setData((prevData) => {
      return prevData.filter((city) => city.id !== id);
    });
  }

  return (
    <div className={styles.app}>
      <div className={styles.fondo} />
      <div className={styles.container}>
        <div>
          <SearchBar onSearch={onSearch} />
        </div>
        <div className={styles.citiesContainer}>
          {data.length > 0 && (
            <Card
              primary
              max={data[data.length - 1].max}
              min={data[data.length - 1].min}
              name={data[data.length - 1].name}
              img={data[data.length - 1].img}
            />
          )}
          <Cards cities={data} onClose={handleOnClose} />
        </div>
      </div>
    </div>
  );
}

export default App;