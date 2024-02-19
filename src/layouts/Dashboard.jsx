import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'
import ProductAdd from '../pages/ProductAdd'
import Register from './Register'
import ProductUpdate from '../pages/ProductUpdate'

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position='top-right' />
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <Categories></Categories>
                    </GridColumn>
                    <GridColumn width={12}>
                        <Routes>
                            <Route path="/register" Component={Register}/>
                            <Route exact path='/' Component={ProductList} />
                            <Route exact path='/product' Component={ProductList} />
                            <Route path='/product/:name' Component={ProductDetail} />
                            <Route path='/cart' Component={CartDetail} />
                            <Route path='/product/add' Component={ProductAdd} />
                            <Route path='product/update/:name' Component={ProductUpdate} />
                        </Routes>
                    </GridColumn>
                </GridRow>
            </Grid>

        </div>
    )
}
