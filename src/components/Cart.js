import { useDispatch, useSelector } from 'react-redux';
import { checkout } from '../actions';

const Cart = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const getCartProducts = state => {
    return state.cart.addedIds.map(id => {
      return {
        ...state.products[id],
        quantity: state.cart.quantityByIds[id] || 0,
      };
    });
  };

  const nodes = getCartProducts(state).map(item => (
    <li key={item.id}>
      {item.title} : {item.quantity} - $ {item.price}
    </li>
  ));

  const getTotal =
    state.cart.addedIds.length === 0
      ? 0
      : getCartProducts(state)
          .map(item => item.price * item.quantity)
          .reduce((acc, curr) => acc + curr);

  return (
    <div>
      <h2>Cart</h2>
      <h4>Total: $ {getTotal}</h4>
      <ul>{nodes.length === 0 ? 'The Cart Is Empty' : nodes}</ul>

      <button
        onClick={() => dispatch(checkout())}
        disabled={state.cart.addedIds.length === 0 ? 'disabled' : ''}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
