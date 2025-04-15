import { useCart } from "../hooks/useCart";
import { useFilters } from "../hooks/useFilters";
import "./Footer.css";

export function Footer() {
  // const { filters } = useFilters();

  return (
    <footer className="footer">
      <h4>Prueba tecnica React 🧩</h4>
      <h5>Shopping Cart con useContext y useReducer</h5>
    </footer>
  );
}
