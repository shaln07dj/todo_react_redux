import { createSlice } from "@reduxjs/toolkit";

export const addProgressSlice=createSlice({
    name:'progress',
    initialState:{
        value: []

    }, 
    reducers:{
        addProgressed:(state,action)=>{
            state.value.push(action.payload)
            
        },
     
    }
})

export const {addProgressed}=addProgressSlice.actions;

const {reducer:progressReducer}=addProgressSlice

export default progressReducer