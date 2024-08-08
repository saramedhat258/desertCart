import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Cart-slice";
import ProductSlice from "./Product-slice";
export const store=configureStore({
    reducer:{
        cart:CartSlice,
        product:ProductSlice
    }
})