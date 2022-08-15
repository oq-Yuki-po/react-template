import React from 'react'
import { useRecoilValue } from 'recoil'

import { productListState } from '../../recoil/atoms/productListState'


export default function ProductList() {
    const setUserNameState = useRecoilValue(productListState);
    return (
        <React.Fragment>
            {setUserNameState}
        </React.Fragment>
    )
}
