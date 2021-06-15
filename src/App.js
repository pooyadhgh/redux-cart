import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>React Redux Cart</h1>
        <hr />
        <ProductList />
        <hr />
        <Cart />
      </div>
    </div>
  );
}

export default App;
