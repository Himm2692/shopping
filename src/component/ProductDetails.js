import React from 'react'
import {useSelector,  useDispatch } from 'react-redux'
import {useParams} from 'react-router-dom'
import { addProduct, selectedProduct } from '../action'
import { useEffect } from 'react'

const ProductDetails = () => {
   
    const productDetail = useSelector((state)=> state.product)
    const { title,rating,  description,image,  price , category}= productDetail;
    const {productId} = useParams()
    const dispatch = useDispatch();

    const FetchProduct = async ()=>{
        const response =await  fetch(`https://fakestoreapi.com/products/${productId}`)
        const data = await response.json()
        dispatch(selectedProduct(data))
    }
    useEffect(()=>{
        FetchProduct()
    }, [productId])

    const handleProduct = ()=>{
      dispatch(addProduct(productDetail))
    }
  return (
    <>
    <div className="container">
    <div className="row" >
   <div className="col-md-6">
    <img src={image} alt ={title} width="370px" height="370px"/>
   </div>
   <div className="col-md-6">
      <h4 className="text-uppercase text-black-50">{category}</h4>
      <h1 className='display-5'>{title}</h1>
      <p className='fw-bolder'> Rating {rating && rating.rate}</p>
      <h3 className='my-4'>$ {price}</h3>
      <h5 className='lead'>{description}</h5>
      <button className='btn btn-danger my-4' onClick={ handleProduct}>Add to Cart</button>
   </div>
   </div>
   </div>
   </>
    
  )
  
}

export default ProductDetails
