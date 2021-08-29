import { createSlice } from "@reduxjs/toolkit";

export const addTodoSlice=createSlice({
    name:'todo',
    initialState:{
        value: []
    }, 
    reducers:{
        addTodos:(state,action)=>{
            state.value.push(action.payload)
            
        },
        editTodos:(state)=>{
            
        }
    }
})

export const {addTodos,editTodos}=addTodoSlice.actions;

const {reducer:addReducer}=addTodoSlice

export default addReducer