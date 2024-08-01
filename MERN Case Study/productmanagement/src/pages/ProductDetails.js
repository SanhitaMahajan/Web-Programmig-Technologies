import React from 'react'

export default function ProductDetails(props) {
    return (
        <div className='container'>
        <div className='row'>
            <div className='col-sm-12 col-md-3'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.prod.pname}</h5>
                        <span className="card-text">Product Id : {props.prod.pid}</span>
                        <span className="card-text">Product Quantity : {props.prod.quantity} </span>
                        <span className="card-text">Product Price : {props.prod.price}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
