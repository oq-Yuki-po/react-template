import React from 'react'
import { Outlet } from 'react-router-dom'

import { Box, Typography } from '@mui/material'

import FormProducts from 'components/Products/FormProducts'
import ProductList from 'components/Products/ProductList'

export default function Products() {

    return (
        <Box sx={{ display: 'flex' }}>
            <Box m={2} border="solid 1px" width={"50%"} height={"80vh"}>
                <Typography variant='h4'>
                    Products Form
                </Typography>
                <FormProducts />
                <Outlet />
            </Box>
            <Box m={2} border="solid 1px" width={"50%"} height={"80vh"}>
                <Typography variant='h4'>
                    Products
                </Typography>
                <ProductList />
            </Box>
        </Box>
    )
}
