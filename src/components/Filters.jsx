import { useFilters } from "../hooks/useFilters";
import "./Filters.css";
import { useState, useId } from "react";

export function Filters() {
  const { filters, setFilters } = useFilters();

  const [minPrice, setMinPrice] = useState(0);

  const minPriceFilterId = useId();
  const CategoryFilterId = useId();

  // FILTRO PRECIO

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  // FILTRO CATEGORIA
  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
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
          value={filters.minPrice}
        />
        <span>{filters.minPrice} $</span>
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
