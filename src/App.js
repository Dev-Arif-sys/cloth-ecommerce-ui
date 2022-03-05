import './App.css';
import Cart from './Components/Products/Cart/Cart';
import ProductsDetails from './Components/Products/ProductsDetails/ProductsDetails';
import Review from './Components/Products/Reviews/Review/Review';


function App() {
  return (
    <div className="App">
      <Cart></Cart>
      <Review></Review>
      <ProductsDetails></ProductsDetails>
    </div>
  );
}

export default App;
