import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchproduct=createAsyncThunk('productslice/fetchpro',
    async()=>{
        const res=await fetch("http://localhost:9000/deserts");
        const data=await res.json();
        return data
    }
)
export const productslice=createSlice({
    initialState:[],
    name:'productslice',
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchproduct.fulfilled,(state,action)=>{
            return action.payload
        })
    }
})

export default productslice.reducer