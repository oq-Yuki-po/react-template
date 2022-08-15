import { AppBar, Toolbar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

import NavItem from './NavItem';
import NavItemList from './NavItemList';


export default function Header() {

    const products = ["New", "Featured"];
    const productsTo = ["/products/new", "/products/featured"];

    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>App Name</Typography>
                    <Stack direction="row" spacing={2}>
                        <NavItem to="/" name="Home" />
                        <NavItem to="/about" name="About" />
                        <NavItemList to="/products" name="Products" nameList={products} toList={productsTo} />
                    </Stack>
                </Toolbar>
            </AppBar>
        </header>
    )
}
