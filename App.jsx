import { CartProvider } from "./Context/CartContext";
import ProductList from "./ProductList";
import CartDisplay from "./CartDisplay";

function App() {
  return (
    <CartProvider>
      <h1>Shopping Cart</h1>

      <ProductList />

      <CartDisplay />
    </CartProvider>
  );
}

export default App;