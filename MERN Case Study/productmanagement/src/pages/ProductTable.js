import React, { useState, useEffect } from 'react'
import ProductService from '../service/ProductService';
import { Link } from 'react-router-dom'

export default function ProductTable() {
  const [prodArr, setprodarr] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  //initialize productarr
  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    ProductService.getAllProduct()
      .then((result) => {
        setprodarr(result.data);
      })
      .catch(() => {

      })
  }

  const deleteProduct = (id, event) => {
    event.preventDefault();
    ProductService.deleteProduct(id)
      .then((result) => {
        loadData();
      })
      .catch(() => {

      })

    //  update state after deletion 
    // setprodarr(prevProdArr => prevProdArr.filter(product => product.pid !== id));
  }

  const handleSearchChange=(event)=>{
    console.log(event.target.value)
    setSearchQuery(event.target.value)
  }

  return (
    <div style={{marginLeft:20, marginRight:20}}>
      <br></br>
      <Link to='/form'>
        <button type="submit" className="btn btn-primary" >Add New Product</button>
      </Link> 
      <br></br>
      <br></br>

      <input
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        onChange={handleSearchChange}
        style={{ width: '50%' }}
        placeholder="Search..."
      />


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
              <Link to={'/view/${p.pid}'} state={{ product: p }}>
                <button type="button" className="btn btn-success">View</button>&nbsp;&nbsp;&nbsp;
              </Link>

              <button type="submit" className="btn btn-danger" onClick={(event) => deleteProduct(p.pid, event)}>Delete</button>&nbsp;&nbsp;&nbsp;
              <Link to={'/editProduct/${p.pid}'} state={{ product: p }}>
                <button type="button" className="btn btn-warning">Edit</button>
              </Link>
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
