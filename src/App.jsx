import { products as initialProducts } from "./mocks/products.json";
import { Footer } from "./components/Footer.jsx";
import { Products } from "./components/Products.jsx";
import { Header } from "./components/Header.jsx";
import { useState, useContext } from "react";
import { IS_DEVELOPMENT } from "./mocks/confi.js";
import { FiltersContext } from "./context/filters.jsx";

function useFilters() {
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

function App() {
  const [products] = useState(initialProducts);
  const { filters, filterProducts, setFilters } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters}></Footer>}
    </>
  );
}

export default App;
