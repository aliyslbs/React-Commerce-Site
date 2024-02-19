import React from 'react'
import {  Menu } from 'semantic-ui-react'
import CategoryList from '../pages/CategoryList'

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <CategoryList></CategoryList>
      </Menu>
    </div>
  )
}