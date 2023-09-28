import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProduct } from '../action/index'
import { Link } from 'react-router-dom'

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
    <div className='container '>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 my-3" key={product.id}>
            <Link to={`/product/${product.id}`} style={{textDecoration:"none"}}>
            <div className="card h-100 ">
              <img src={product.image} className="card-img" alt={product.title} style={{ height: '300px', width: '100%' }} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">$ {product.price}...</p>
                <p className="card-text">{product.category}...</p>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
