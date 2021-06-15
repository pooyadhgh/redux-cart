import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { receiveProducts, addToCart } from '../actions';

const ProductList = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => dispatch(receiveProducts(data)));
  }, [dispatch]);

  const getProducts = products => Object.keys(products).map(id => products[id]);

  const products = getProducts(state.products);
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.title}: ${product.price} - {product.inventory}
            <button
              onClick={() => dispatch(addToCart(product.id))}
              disabled={product.inventory > 0 ? '' : 'disabled'}
            >
              {product.inventory > 0 ? 'Add' : 'Sold Out'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
