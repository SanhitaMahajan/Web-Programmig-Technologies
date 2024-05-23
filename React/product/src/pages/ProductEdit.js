import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ProductService from '../service/ProductService';

export default function ProductEdit() {
    // creating formDetails Object 
    const [formDetails, setFormDetails] = useState({pid:"",pname:"",qty:"",price:""})
    const navigate = useNavigate();

    //   to retrive data that is send to url from product table 
    const location = useLocation();
    console.log("location", location);
    const params = useParams();
    // console.log("params", params);

    // this will show the product data in the form for modiification
    useEffect(()=>{
        setFormDetails({...location.state.product})
    },[])

    const handelChange = (event) => {
        //  name is value of the textbox on which chnage event occur
        // values is the value typed in the text box 

        // var name = event.target.name;
        // var value = event.target.value;

        var { name, value } = event.target;
        setFormDetails({ ...formDetails, [name]: value })
        // console.log(formDetails)

    }

    // on button click update product 
    const updateProduct=(event)=>{
        event.preventDefault(); //stops the default refresh action of submit button
        if(formDetails.pid==="" || formDetails.pname==="" || formDetails.quantity===""|| formDetails.price===""){
            alert("Pls fill all the fields")
            return;
        }
        //create a product object
        var p={pid:parseInt(formDetails.pid),pname:formDetails.pname,quantity:parseInt(formDetails.quantity),price:parseInt(formDetails.price)}
        //update product in array
        
        ProductService.updateProduct(p)
            //to clear the form
            setFormDetails({pid:"",pname:"",quantity:"",price:""})
           //to navigate to table url through program
            navigate("/table");


    }
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Product ID</label>
                    <input type="text" className="form-control" name="pid" readOnly
                        id="pid" value={formDetails.pid} onChange={handelChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Product Name</label>
                    <input type="text" className="form-control" name="pname"
                        id="pname" value={formDetails.pname} onChange={handelChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Product Quantity</label>
                    <input type="text" className="form-control" name="quantity"
                        id="quantity" value={formDetails.quantity} onChange={handelChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Product Price</label>
                    <input type="text" className="form-control" name="price"
                        id="price" value={formDetails.price} onChange={handelChange} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={updateProduct}>Update Product</button>
            </form>
        </div>
    )
}
