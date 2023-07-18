import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect,Fragment } from 'react';
import { useDispatch } from 'react-redux';
import Notification from './components/Layout/Notification'
import { sendCartData,fetchCartData } from './Store/cart-actions';
 
let isInitial=true;
function App() {
  const dispatch=useDispatch();
  const cart=useSelector(state=> state.cart)
  const showCart= useSelector(state=> state.ui.cartIsVisible)
  const notification= useSelector(state=> state.ui.notification)

  
  useEffect(() => { 
    dispatch(fetchCartData(cart))
    },[dispatch])

    useEffect(() => {
      if(isInitial){
        isInitial=false;
        return
      }
      
      dispatch(sendCartData(cart))
      },[cart,dispatch])
  
  return (
    <Fragment>
    {notification && <Notification
    status={notification.status}
    title={notification.title}
    message={notification.message}
    />}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
