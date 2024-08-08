import { createSlice } from "@reduxjs/toolkit";
export const cartslice = createSlice({
    initialState: [],
    name: "cartslice",
    reducers: {
        addtocart: (state, action) => {
            const findproduct = state.find(pro => pro.id === action.payload.id)
            if (findproduct) {
                findproduct.quantity += 1
            } else {
                const cloneproduct = { ...action.payload, quantity: 1 }
                state.push(cloneproduct)
            }
        },
        deletefromcart: (state, action) => {
            return state.filter(pro => pro.id !== action.payload.id)
        }
        ,
        increquantity: (state, action) => {
            const product = state.find(pro => pro.id === action.payload.id);
            if (product) {
                product.quantity += 1;
            }
        },
        decrequantity: (state, action) => {
            /*in redux toolkit we cant modify the value and return it in the same time so i use if else to either modify 
            product.quantity or return new array */
            const product = state.find(pro => pro.id === action.payload.id);
            if (product) {
                if (product.quantity > 1) {
                    product.quantity -= 1;
                } else {
                    return state.filter(pro => pro.id !== action.payload.id);
                }
            }
        }
        ,
        clear: (state, action) => {
            return [];
        }
    }
})
export const { addtocart, deletefromcart, increquantity, decrequantity, clear } = cartslice.actions
export default cartslice.reducer