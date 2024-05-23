import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductService from '../service/ProductService';

export default function FormComponent() {
  // creating formDetails Object 
  const [formDetails,setFormDetails] = useState({pid:"",pname:"",quantity:"",price:""})

  const navigate = useNavigate();

  const handelChange=(event)=>{
    //  name is value of the textbox on which chnage event occur
    // values is the value typed in the text box 


    // var name = event.target.name;
    // var value = event.target.value;

    var {name,value} = event.target;
    setFormDetails({...formDetails,[name]:value})
    // console.log(formDetails)

  }

  // on button click add new product 
  const addProduct=(event)=>{
    event.preventDefault();

    if(formDetails.pid==="" || formDetails.pname==="" || formDetails.price==="" || formDetails.quantity===""){
      alert("Please fill all the details")
      return;
    }

    var p = {pid:parseInt(formDetails.pid), pname:formDetails.pname,quantity:parseInt(formDetails.quantity), price:parseInt(formDetails.price)}

   ProductService.addProduct(p);

    // to clear form 
    setFormDetails({pid:"",pname:"",quantity:"",price:""})


    // to navigate to tbale url through program 
    navigate("/table");

  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Product ID</label>
          <input type="text" className="form-control"  name="pid"
          id="pid"  value={formDetails.pid} onChange={handelChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Product Name</label>
          <input type="text" className="form-control" name="pname"
           id="pname" value={formDetails.pname} onChange={handelChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Product Quantity</label>
          <input type="text" className="form-control" name="quantity"
          id="quantity"  value={formDetails.quantity} onChange={handelChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Product Price</label>
          <input type="text" className="form-control" name="price"
          id="price" value={formDetails.price} onChange={handelChange}/>
        </div>
      
        <button type="submit" className="btn btn-primary" onClick={addProduct}>Add New Product</button>
      </form>
    </div>
  )
}
