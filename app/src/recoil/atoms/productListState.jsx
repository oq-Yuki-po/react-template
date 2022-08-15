import {
    atom,
} from 'recoil';

export const productListState = atom({
    key: 'productListState',
    default: ["sample1", "sample2"],
});