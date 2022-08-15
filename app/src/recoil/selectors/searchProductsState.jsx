import {
    selector,
} from 'recoil';

import { searchEndDateState } from '../atoms/searchEndDateState';
import { searchStartDateState } from '../atoms/searchStartDateState';
import { userNameState } from '../atoms/userNameState';

export const searchProductsSelector = selector({
    key: 'searchProductsSelector',
    get: ({ get }) => {
        const userName = get(userNameState);
        const searchStartDate = get(searchStartDateState);
        const searchEndDate = get(searchEndDateState);

        return { userName, searchStartDate, searchEndDate };
    },
});