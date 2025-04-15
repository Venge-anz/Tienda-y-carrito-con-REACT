import { FiltersContext } from "../context/filters.jsx";
import { useContext } from "react";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  // FILTRADO DE PRODUCTOS !!!!!

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { filters, filterProducts, setFilters };
}
