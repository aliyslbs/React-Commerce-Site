import React, { useState, useEffect } from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Menu,
  Table,
  Button,
} from 'semantic-ui-react'
import ProductService from '../services/productService'
import { Link, useNavigate  } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'
import { toast } from 'react-toastify'

export default function ProductList() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [products, setProducts] = useState([])

  useEffect(() => {
    let productService = new ProductService()
    productService.getProducts().then(result => setProducts(result.data.data))
  }, [])

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    toast.success(`${product.productName} added successfully`)
  }

  const deleteProduct = (product) => {
    const productService = new ProductService()
    productService.deleteProduct(product.id).then(response => {
      console.log('Resource deleted successfully:', response.data);
    }).catch(error => {
      console.error('Error deleting resource:', error);
    });
    toast.success(`${product.productName} deleted successfully`)
  }

  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>product name </TableHeaderCell>
            <TableHeaderCell>unit price</TableHeaderCell>
            <TableHeaderCell>units in stock</TableHeaderCell>
            <TableHeaderCell>quantity per unit</TableHeaderCell>
            <TableHeaderCell>categories</TableHeaderCell>
            <TableHeaderCell>add to cart</TableHeaderCell>
            <TableHeaderCell>delete product</TableHeaderCell>
            <TableHeaderCell>update product</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            products.map(product => (
              <TableRow key={product.id}>
                <TableCell><Link to={`/product/${product.productName}`}>{product.productName}</Link></TableCell>
                <TableCell>{product.unitPrice}</TableCell>
                <TableCell>{product.unitsInStock}</TableCell>
                <TableCell>{product.quantityPerUnit}</TableCell>
                <TableCell>{product.category?.categoryName}</TableCell>
                <TableCell><Button color='green' onClick={() => handleAddToCart(product)}>add to cart</Button></TableCell>
                <TableCell><Button color='red' onClick={() => deleteProduct(product)}>delete</Button></TableCell>
                <TableCell><Button color='blue' onClick={() => navigate(`/product/update/${product.productName}`)}>update</Button></TableCell>
              </TableRow>
            ))
          }
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableHeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <MenuItem as='a' icon>
                  <Icon name='chevron left' />
                </MenuItem>
                <MenuItem as='a'>1</MenuItem>
                <MenuItem as='a'>2</MenuItem>
                <MenuItem as='a'>3</MenuItem>
                <MenuItem as='a'>4</MenuItem>
                <MenuItem as='a' icon>
                  <Icon name='chevron right' />
                </MenuItem>
              </Menu>
            </TableHeaderCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
