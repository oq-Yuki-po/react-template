import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export default function Header() {
    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>App Name</Typography>
                </Toolbar>
            </AppBar>
        </header>
    )
}
