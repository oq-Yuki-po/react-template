import React from 'react'

import { TextField } from '@mui/material'
import PropTypes from 'prop-types'

function TextFieldSmall(props) {
    // props
    const { label, value, setter, width, required } = props

    return (
        <TextField
            required={required}
            label={label}
            value={value}
            size="small"
            margin='normal'
            sx={{ "width": width }}
            onChange={(e) => setter(e.target.value)} />

    )
}

TextFieldSmall.propTypes = {
    required: PropTypes.bool,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    setter: PropTypes.func.isRequired
}

export default TextFieldSmall
