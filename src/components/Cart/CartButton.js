import classes from './CartButton.module.css';
import { useDispatch , useSelector} from 'react-redux';
import { uiActions } from '../../Store/ui-slice';

const CartButton = (props) => {
  const cartquantity=useSelector(state => state.cart.totalQuantity)
  
  const dispatch=useDispatch()
  const toggleHandler = () => {
   const ans= dispatch(uiActions.toggle())
   console.log(ans)
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartquantity}</span>
    </button>
  );
};

export default CartButton;
