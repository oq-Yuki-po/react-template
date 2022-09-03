import React from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';
import { Stack } from '@mui/system';

import NavItem from 'components/Header/NavItem';
import NavItemList from 'components/Header/NavItemList';


export default function Header() {

    const products = ["New", "Featured"];
    const productsTo = ["/products/new", "/products/feature"];

    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>App Name</Typography>
                    <Stack direction="row" spacing={2}>
                        <NavItem to="/" name="Home" />
                        <NavItem to="/about" name="About" />
                        <NavItemList to="/products" name="Products" nameList={products} toList={productsTo} />
                        <NavItem to="/users" name="Users" />
                    </Stack>
                </Toolbar>
            </AppBar>
        </header>
    )
}
