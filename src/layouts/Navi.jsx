import React, { useState } from 'react'
import {
    MenuMenu,
    MenuItem,
    Menu,
    Container,
} from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SingOut from './SingOut'
import SingIn from './SingIn'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navi() {
    const { cartItems } = useSelector(state => state.cart)
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const navigate = useNavigate()

    function handleSignOut(params) {
        setIsAuthenticated(false)
        navigate("/")
    }
    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <MenuItem as={NavLink} to="/"
                        name='home'
                    />
                    <MenuItem
                        name='messages'
                    />

                    <MenuMenu position='right'>
                        {cartItems.length > 0 && <CartSummary/>}
                        {isAuthenticated ? <SingIn signOut={handleSignOut} /> : <SingOut signIn={handleSignIn} />}


                    </MenuMenu>
                </Container>
            </Menu>
        </div>
    )
}
