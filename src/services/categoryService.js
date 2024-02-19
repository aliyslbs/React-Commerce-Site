import axios from "axios"


export default class CategoryService {
  
    getCategorys(){
        return axios.get("http://localhost:8080/api/categorys/getAll")
    }

}
