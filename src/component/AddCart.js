import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { removeProduct } from '../action/index'

const AddCart = () => {
    const dispatch = useDispatch()
   const cartDetail = useSelector((state)=> state.cart)
   const handleRemoveProduct = (productId)=>{
    dispatch(removeProduct(productId))
   }
   const cartItems = () => {
    return(
        <div className="container">
        {cartDetail.map((product)=>
        <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
            <div className="container py-4">
                <button  className="btn-close float-end" aria-label="Close"onClick={() => handleRemoveProduct(product)}></button>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img src={product.image} alt={product.title} height="200px" width="180px" />
                    </div>
                    <div className="col-md-4">
                        <h3>{product.title}</h3>
                        <p className="lead fw-bold">${product.price}</p>
                    </div>
                </div>
            </div>
        </div>
        )}
        </div>
    );
}
   const emptyCart = () => {
    return (
        <div className="px-4 my-5 bg-light rounded-3 py-5">
            <div className="container py-4">
                <div className="row">
                    <h3>Your Cart is Empty</h3>
                </div>
                </div>
            </div>
    );
}

  return (
    <div>
         {cartDetail.length === 0 && emptyCart()}
{cartDetail.length !== 0 && cartItems()}
      

    </div>
  )
}

export default AddCart
