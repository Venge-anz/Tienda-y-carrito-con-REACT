import "./Filters.css";
import { useState, useId, use } from "react";

export function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const CategoryFilterId = useId();

  // FILTRO PRECIO

  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value);

    //Algo HUELE mal, hay dos fuentes de la verdad

    onChange((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  // FILTRO CATEGORIA
  const handleChangeCategory = (e) => {
    onChange((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  //RENDERIZAR

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="2400"
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice} $</span>
      </div>
      <div>
        <label htmlFor={CategoryFilterId}>Categoría</label>
        <select id={CategoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todos</option>
          <option value="fragrances">Perfumes</option>
          <option value="furniture">Muebles</option>
        </select>
      </div>
    </section>
  );
}
