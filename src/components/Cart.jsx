import { CartIcon, ClearCartIcon } from "./Icons";
import { useId } from "react";
import "./Cart.css";
import { useCart } from "../hooks/useCart";

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <>
      <li>
        <img src={thumbnail} alt={title}></img>
        <div>
          <strong>{title}</strong> ${price}
        </div>
        <footer>
          <small>Qrt: {quantity}</small>
          <button onClick={addToCart}>+</button>
        </footer>
      </li>
    </>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon></CartIcon>
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden></input>
      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            ></CartItem>
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon></ClearCartIcon>
        </button>
      </aside>
    </>
  );
}
