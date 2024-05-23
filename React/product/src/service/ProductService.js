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
        return this.prodArr;
    }

    addProduct(p){
        this.prodArr.push(p);
    }

    updateProduct(p){
        var pos = this.prodArr.findIndex(ob=>ob.pid==p.pid)
        this.prodArr.splice(pos,1,{...p})
    }

    deleteProduct(id){
        this.prodArr = this.prodArr.filter(p=>p.pid!==id)
    }
}

export default new ProductService();