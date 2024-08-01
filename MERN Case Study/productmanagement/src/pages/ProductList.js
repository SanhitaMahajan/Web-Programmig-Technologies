import React,{useState,useEffect} from 'react'
import ProductService from '../service/ProductService'
import ProductDetails from './ProductDetails'
export default function ProductList() {
    const [prodArr, setprodarr] = useState([]);

    //initialize productarr
    useEffect(() => {
      ProductService.getAllProduct()
      .then((result)=>{
        setprodarr(result.data);
      })
      .catch(()=>{
        
      })
     
    }, [])

  return (
    <div>
        {prodArr.map(ob=><ProductDetails key={ob.pid} prod={ob}></ProductDetails>)}
    </div>
  )
}
