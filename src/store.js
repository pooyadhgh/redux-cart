import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { products, cart } from './reducers';

// before react-logger / redux-thunk installed

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));

const reducer = combineReducers({
  products,
  cart,
});

const store = createStore(reducer, enhancer);

export default store;
