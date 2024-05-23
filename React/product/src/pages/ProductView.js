import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function ProductView() {

    const location = useLocation();
    const product = location.state.product;

  return (
        <div className='container' style={{padding:90, width:'45%'}}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title" style={{textAlign:'center'}}>{product.pname}</h5>
                        <p className="card-text">
                        Product Id : {product.pname}
                        </p>
                        <p className="card-text">Product Quantity : {product.quantity}</p>
                        
                        <p className="card-text">Product Price : {product.price} </p> 
                        <Link to='/table'>
                        <button type="button" className='btn btn-outline-primary' style={{float:'right'}}>Back To Table</button>
                        </Link>
                </div>
        </div>
    </div>
  )
}
