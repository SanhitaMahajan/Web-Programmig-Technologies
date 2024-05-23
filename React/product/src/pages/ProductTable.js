import React, { useState, useEffect } from 'react'
import ProductService from '../service/ProductService';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

export default function ProductTable() {
  const [prodArr, setprodarr] = useState([]);
  const navigate = useNavigate();

  //initialize productarr
  useEffect(() => {
   loadData()
  }, [])

  const loadData=()=>{
    var arr = ProductService.getAllProduct();
    setprodarr(arr);
  }

  // const goAddProductForm=()=>{
  //   navigate("/form")
  // }

  const deleteProduct=(id,event)=>{
    event.preventDefault();
    ProductService.deleteProduct(id);
    loadData();
    //  update state after deletion 
    // setprodarr(prevProdArr => prevProdArr.filter(product => product.pid !== id));
  }

  return (
    <div>
      <br></br>
      <Link to='/form'>
      <button type="submit" className="btn btn-primary">Add New Product</button>
      </Link>
             
<br></br>
<br></br>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Product Id</th>
            <th scope="col">Product name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {prodArr.map(p => <tr>
            <th scope="row">{p.pid}</th>
            <td>{p.pname}</td>
            <td>{p.quantity}</td>
            <td>{p.price}</td>
            <td>
              <Link to={'/view/${p.pid}'} state={{product:p}}>
              <button type="button" className="btn btn-success">View</button>&nbsp;&nbsp;&nbsp;
              </Link>
           
            <button type="submit" className="btn btn-danger"  onClick={(event) => deleteProduct(p.pid, event)}>Delete</button>&nbsp;&nbsp;&nbsp;
            <Link to={'/editProduct/${p.pid}'} state={{product :p}}>
              <button type="button" className="btn btn-warning">Edit</button>
            </Link>
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
