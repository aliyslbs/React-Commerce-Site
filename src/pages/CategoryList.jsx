import React, { useEffect, useState } from 'react'
import CategoryService from '../services/categoryService'
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react'

export default function CategoryList() {

  const [categorys, setCategorys] = useState([])

  useEffect(() => {
    let categoryService = new CategoryService()
    categoryService.getCategorys().then(result => setCategorys(result.data.data))
  })

  return (
    <div>
      <Table>
        <TableHeader>
          <TableHeaderCell>Kategoriler</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {
            categorys.map(category => (
              <TableRow >
                <TableCell>{category.categoryName}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}
