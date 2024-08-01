import axios from 'axios';
const baseUrl='http://localhost:3001'

class ProductService {
    constructor() {
        this.prodArr = [
            { pid: 12, pname: "chair", quantity: 34, price: 3400 },
            { pid: 13, pname: "table", quantity: 50, price: 5000 },
            { pid: 14, pname: "shelf", quantity: 60, price: 2000 },
            { pid: 15, pname: "sofa", quantity: 10, price: 50000 }
        ]
    }

    getAllProduct(){
        // console.log(this.prodArr)
        return axios.get(baseUrl+`/products`)
    }

    addProduct(p){
        const header = {'content-type':'application/json'}
        return axios.post(baseUrl+`/products/${p.pid}`,p,{header:header})
    }

    updateProduct(p){
        return axios.put(baseUrl+`/products/${p.pid}`,p)
    }

    deleteProduct(id){
        return axios.delete(baseUrl+`/products/${id}`)
    }
}

export default new ProductService();