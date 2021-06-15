import * as types from './actionTypes';

export const receiveProducts = products => {
  return {
    type: types.RECEIVE_PRODUCT,
    products,
  };
};

export const addToCart = productId => {
  return {
    type: types.ADD_PRODUCT,
    productId,
  };
};

export const checkout = () => ({
  type: types.CHECKOUT_CART,
});
