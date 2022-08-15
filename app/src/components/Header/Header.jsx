import { AppBar, Toolbar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

import NavItem from './NavItem';

export default function Header() {

    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>App Name</Typography>
                    <Stack direction="row" spacing={2}>
                        <NavItem to="/" name="Home" />
                        <NavItem to="/about" name="About" />
                        <NavItem to="/products" name="Products" />
                    </Stack>
                </Toolbar>
            </AppBar>
        </header>
    )
}
