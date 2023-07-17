import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect } from 'react';

function App() {
  const cart=useSelector(state=> state.cart)
  const showCart= useSelector(state=> state.ui.cartIsVisible)

  useEffect(() => {
    fetch("https://redux-cart-a21e2-default-rtdb.firebaseio.com/cart.json",{
      method:"PUT",
      body:JSON.stringify(cart),
    })
  }, [cart])
  
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
