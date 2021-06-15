import { RECEIVE_PRODUCT, ADD_PRODUCT, CHECKOUT_CART } from './actionTypes';

export const products = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {}),
      };

    case ADD_PRODUCT:
      let product = state[action.productId];
      return {
        ...state,
        [action.productId]: {
          ...product,
          inventory: product.inventory - 1,
        },
      };

    default:
      return state;
  }
};

const initialState = {
  addedIds: [],
  quantityByIds: {},
};

const addedIds = (state = initialState.addedIds, action) => {
  if (state.indexOf(action.productId) !== -1) {
    return state;
  }
  return [...state, action.productId];
};

const quantityById = (state = initialState.quantityByIds, action) => {
  const { productId } = action;
  return {
    ...state,
    [productId]: (state[productId] || 0) + 1,
  };
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_CART:
      return initialState;
    case ADD_PRODUCT:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityByIds: quantityById(state.quantityByIds, action),
      };
    default:
      return state;
  }
};
