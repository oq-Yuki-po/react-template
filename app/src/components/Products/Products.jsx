import { Button } from '@mui/material'
import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

export default function Products() {
    const navigate = useNavigate()
    return (
        <div>Products
            <Button onClick={() => navigate("new")}>New Products</Button>
            <Outlet />
        </div>
    )
}
