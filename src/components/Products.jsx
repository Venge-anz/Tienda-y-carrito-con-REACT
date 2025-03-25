import "./Products.css";
import { AddToCartIcon } from "./Icons.jsx";

export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => {
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title}></img>
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <button>
                <AddToCartIcon></AddToCartIcon>
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
