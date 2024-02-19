import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductService from '../services/productService'
import { Button } from 'semantic-ui-react'

export default function ProductUpdate() {

    let { name } = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        let productService = new ProductService()
        productService.getByProductName(name).then(result => setProduct(result.data.data))
    }, [])

    const handleChange = (e) => {
        const value = e.target.value
        setProduct({
            ...product,
            [e.target.name]: value
        })
    }

    const handleSubmit = () => {
        const updateProduct = {
            id: product.id,
            productName: product.productName,
            unitPrice: product.unitPrice,
            unitsInStock: product.unitsInStock,
            quantityPerUnit: product.quantityPerUnit,
            category: {
                categoryId: product.category?.categoryId,
                categoryName: product.category?.categoryName
            }
        }
        console.log(updateProduct)
        const productService = new ProductService()
        productService.updateProduct(updateProduct.id, updateProduct).then(result => setProduct(result.data.data))
    }


    return (
        <div>
            <form class="ui form">
                <div class="field">
                    <label>ürün ismi</label>
                    <input type="text" name="productName" value={product?.productName} onChange={handleChange} />
                </div>
                <div class="field">
                    <label>Ürünün fiyatı</label>
                    <input type="text" name="unitPrice" value={product?.unitPrice} onChange={handleChange} />
                </div>
                <div class="field">
                    <label>Stoktaki adedi</label>
                    <input type="text" name="unitsInStock" value={product?.unitsInStock} onChange={handleChange} />
                </div>
                <div class="field">
                    <label>Stok Açıklaması</label>
                    <input type="text" name="quantityPerUnit" value={product?.quantityPerUnit} onChange={handleChange} />
                </div>
                <Button color='green' type="submit" placeholder="kaydet" onClick={handleSubmit}>update</Button>
            </form>
        </div>
    )
}
