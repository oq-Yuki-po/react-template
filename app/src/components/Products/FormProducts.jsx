import React from 'react'

import { Box } from '@mui/material'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import DatePickerField from 'components/Util/DatePickerField';
import TextFieldSmall from 'components/Util/TextFieldSmall'

import { searchEndDateState } from 'recoil/atoms/searchEndDateState'
import { searchStartDateState } from 'recoil/atoms/searchStartDateState'
import { userNameState } from 'recoil/atoms/userNameState'
import { searchProductsSelector } from 'recoil/selectors/searchProductsState'

export default function FormProducts() {
    const { userName, searchStartDate, searchEndDate } = useRecoilValue(searchProductsSelector)
    const setUserNameState = useSetRecoilState(userNameState);
    const setSearchStartDateState = useSetRecoilState(searchStartDateState);
    const setSearchEndDateState = useSetRecoilState(searchEndDateState);

    return (
        <Box sx={{ "display": "flex", "flexDirection": "column" }}>
            <TextFieldSmall
                required={true}
                label="User Name"
                value={userName}
                width="40%"
                setter={setUserNameState} />
            <Box sx={{ "display": "flex" }}>
                <DatePickerField
                    label='start date'
                    value={searchStartDate}
                    setter={setSearchStartDateState}
                    width="40%" />
                <Box m={1}> ～ </Box>
                <DatePickerField
                    label='end date'
                    value={searchEndDate}
                    setter={setSearchEndDateState}
                    width="40%" />
            </Box>

        </Box>
    )
}
