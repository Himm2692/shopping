
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './component/ProductDetails';
import AddCart from './component/AddCart';
import Login from './component/Login';
import Signup from './component/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename = "/shopping">
      <Navbar/>
      <Routes>
      <Route exact path = "/" element = {<Home/>}/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/signup' element ={<Signup/>}/>
      <Route path = "/product/:productId" element = {<ProductDetails/>}/>
      <Route path = "/addCart" element = {<AddCart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
