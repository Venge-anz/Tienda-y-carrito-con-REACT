import "./Filters.css";
import { useState } from "react";

export function Filters({ updateFilters }) {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value);

    //Algo HUELE mal, hay dos fuentes de la verdad
    updateFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    updateFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  //RENDERIZAR

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio a partir de:</label>
        <input
          type="range"
          id="price"
          min="0"
          max="500"
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice} $</span>
      </div>
      <div>
        <label htmlFor="category">Categoría</label>
        <select id="category" onChange={handleChangeCategory}>
          <option value="all">Todos</option>
          <option value="beauty">Belleza</option>
          <option value="fragrances">Perfumes</option>
          <option value="furniture">Muebles</option>
          <option value="groceries">Comestibles</option>
        </select>
      </div>
    </section>
  );
}
