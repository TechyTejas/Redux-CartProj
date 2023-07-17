import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../Store/ui-slice';

const CartButton = (props) => {
  const dispatch=useDispatch()
  const toggleHandler = () => {
   const ans= dispatch(uiActions.toggle())
   console.log(ans)
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
