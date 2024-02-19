import { Formik, Form } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react'
import * as Yup from "yup"
import ProductService from '../services/productService'
import CategoryService from '../services/categoryService'

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }
    const schema = Yup.object({
        productName: Yup.string().required("ürün adı zorunludur"),
        unitPrice: Yup.number().required("ürün fiyatı girmek zorunludur")

    })

    const [data, setData] = useState({
        productName: "",
        unitPrice: 0,
        unitsInStock: 0,
        quantityPerUnit: "",
        category: {
            categoryId:1,
            categoryName:"Beverages"
        }
    })
   
    const handleChange = (e) => {
        const value = e.target.value
        setData({
            ...data,
            [e.target.name]: value
        })        
    }


    const handleSubmit = () => {
        const product = {
            productName: data.productName,
            unitPrice: data.unitPrice,
            unitsInStock: data.unitsInStock,
            quantityPerUnit: data.quantityPerUnit,
            category: {
                categoryId: data.category?.categoryId,
                categoryName: data.category?.categoryName
            }
        }
        console.log(product)
        const productService = new ProductService()
        productService.addProduct(product).then(result => setData(result.data.data))
    }

    const [categorys, setCategorys] = useState([])

    useEffect(() => {
        let categoryService = new CategoryService()
        categoryService.getCategorys().then(result => setCategorys(result.data.data))
    })

    return (
        <div>
            <Formik initialValues={initialValues}
                validationSchema={schema}
            >
                <Form className='ui form' onSubmit={handleSubmit}>
                    <input value={data.productName} onChange={handleChange} name="productName" placeholder="product name"></input>
                    <input value={data.unitPrice} onChange={handleChange} name="unitPrice" placeholder="unit price"></input>
                    <input value={data.unitsInStock} onChange={handleChange} name="unitsInStock" placeholder="units in stock"></input>
                    <input value={data.quantityPerUnit} onChange={handleChange} name="quantityPerUnit" placeholder="quantity per unit"></input>
                    <select name="categories" multiple="" class="ui fluid dropdown" id="selectedCategory" onChange={handleChange}>
                        {categorys.map(category =>
                            <option value={data.category.categoryName}   >
                                {category.categoryName}
                            </option>)
                        }
                    </select>
                    <Button color='green' type="submit" placeholder="kaydet">kaydet</Button>
                </Form>

            </Formik>
        </div>
    )
}
