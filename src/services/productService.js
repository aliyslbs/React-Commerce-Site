import axios from "axios";

export default class ProductService {
    getProducts() {
        return axios.get("http://localhost:8080/api/products/getall")
    }

    getByProductName(productName) {
        return axios.get("http://localhost:8080/api/products/getByProductName?productName=" + productName)

    }

    addProduct(product) {
        return axios.post("http://localhost:8080/api/products/add", product)        
    }

    deleteProduct(id){
        return axios.delete("http://localhost:8080/api/products/delete/" + id)
    }

    updateProduct(id, product){
        return axios.put(`http://localhost:8080/api/products/update/${id}`, product)
    }

}