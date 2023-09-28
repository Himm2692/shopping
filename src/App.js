
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './component/ProductDetails';
import AddCart from './component/AddCart';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route path = "/shopping" element = {<Home/>}/>
      <Route path = "/product/:productId" element = {<ProductDetails/>}/>
      <Route path = "/addCart" element = {<AddCart/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
