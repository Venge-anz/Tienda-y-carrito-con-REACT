import { Filters } from "./Filters.jsx";

export function Header(updateFilters) {
  return (
    <>
      <h1>The React Shop</h1>
      <Filters updateFilters={updateFilters} />
    </>
  );
}
