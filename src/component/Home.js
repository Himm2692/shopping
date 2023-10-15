import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProduct } from '../action/index'
import { Link } from 'react-router-dom'
import image1 from './images/image1.jpg'
import image2 from  './images/image2.jpg'
import image3 from './images/image3.jpg'

const Home = () => {
  const products = useSelector((state) => state.productReducer.products)

  const dispatch = useDispatch()
  const fetchProduct = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    dispatch(setProduct(data))
  }


  useEffect(() => {
    fetchProduct()
  }, [])


  return (
    <>
    <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src= {image1} class="d-block w-100" alt="shopping photo"  height="500px"/>
      <div class="carousel-caption d-none d-md-block">
        <h2>Shopping </h2>
        <p>Buy new new products and enjoy </p>
      </div>
      
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={image2} class="d-block w-100" alt="electronics photo" height="500px"/>
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block w-100" alt="Add to cart photo" height="500px"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    <div className='container '>
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
