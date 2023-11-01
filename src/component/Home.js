import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProduct } from '../action/index'
import { Link } from 'react-router-dom'
import image1 from './images/image1.jpg'
import image2 from  './images/image2.jpg'
import image3 from './images/image3.jpg'

const Home = () => {
  const products = useSelector((state) => state.productReducer.products)
  const [originalProducts, setOriginalProducts] = useState([]);

  const dispatch = useDispatch()
  const fetchProduct = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setOriginalProducts(data);
    dispatch(setProduct(data))
  }
  const filterProducts = (selectedCategory) => {
    const filteredProducts =
      selectedCategory === 'all'
        ? originalProducts 
        : originalProducts.filter((product) => product.category === selectedCategory);
    dispatch(setProduct(filteredProducts));
  };
  

  useEffect(() => {
    fetchProduct()
  }, [])



  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src= {image1} className="d-block w-100" alt="shopping photo"  height="500px"/>
      <div className="carousel-caption d-none d-md-block">
        <h2>E-commerce </h2>
        <p>Buy new new products and enjoy shopping </p>
      </div>
      
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={image2} className="d-block w-100" alt="electronics photo" height="500px"/>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="Add to cart photo" height="500px"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="button d-flex justify-content-center py-3">
  <button className='btn btn-outline-dark mx-1' onClick={() => filterProducts("all")}>All</button>
  <button  className='btn btn-outline-dark mx-1' onClick={() => filterProducts("men's clothing")}>Men's Clothing</button>
  <button className='btn btn-outline-dark mx-1' onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
  <button className='btn btn-outline-dark mx-1' onClick={() => filterProducts('jewelery')}>Jewelery</button>
  <button className='btn btn-outline-dark mx-1' onClick={() => filterProducts('electronics')}>electronics</button>
  
</div>

    <div className='home-container '>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 my-3" key={product.id}>
            <Link to={`/product/${product.id}`} style={{textDecoration:"none"}}>
            <div className="card h-100 ">
              <img src={product.image} className="card-img" alt={product.title} style={{ height: '300px', width: '100%' }} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">$ {product.price}</p>
                <p className="card-text">{product.category}...</p>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Home
