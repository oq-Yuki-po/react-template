import { TextField } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import PropTypes from 'prop-types'
import React from 'react'


function DatePickerField(props) {
    // props
    const { label, value, setter, width } = props

    return (
        <DesktopDatePicker
            label={label}
            inputFormat="yyyy/MM/dd"
            value={value}
            onChange={(newValue) => setter(newValue)}
            renderInput={(params) =>
                <TextField {...params} sx={{ width: width, margin: "2px" }} size="small" margin='normal' />}
        />
    )
}

DatePickerField.propTypes = {
    required: PropTypes.bool,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setter: PropTypes.func.isRequired,
    width: PropTypes.string.isRequired
}

export default DatePickerField
