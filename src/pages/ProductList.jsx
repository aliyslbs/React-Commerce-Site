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
    toast.success(`${product.productName} başarıyla eklendi`)
  }

  const deleteProduct = (product) => {
    const productService = new ProductService()
    productService.deleteProduct(product.id).then(response => {
      console.log('Resource deleted successfully:', response.data);
    }).catch(error => {
      console.error('Error deleting resource:', error);
    });
    toast.success(`${product.productName} başarıyla silindi`)
  }

  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>ürün adı </TableHeaderCell>
            <TableHeaderCell>birim fiyatı</TableHeaderCell>
            <TableHeaderCell>stok adedi</TableHeaderCell>
            <TableHeaderCell>açıklama</TableHeaderCell>
            <TableHeaderCell>kategori</TableHeaderCell>
            <TableHeaderCell>Sepete Ekle</TableHeaderCell>
            <TableHeaderCell>Ürünü Sil</TableHeaderCell>
            <TableHeaderCell>Ürünü Güncelle</TableHeaderCell>
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
                <TableCell><Button color='green' onClick={() => handleAddToCart(product)}>Sepete Ekle</Button></TableCell>
                <TableCell><Button color='red' onClick={() => deleteProduct(product)}>Sil</Button></TableCell>
                <TableCell><Button color='blue' onClick={() => navigate(`/product/update/${product.productName}`)}>Güncelle</Button></TableCell>
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
