import { Typography } from '@mui/material'
import React from 'react'

export default function NoMatch() {
    return (
        <Typography variant='h4' sx={{
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "transform": "translate(-50%, -50%)"
        }}>Page not found</Typography>
    )
}
