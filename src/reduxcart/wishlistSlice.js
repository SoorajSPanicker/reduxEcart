import { createSlice } from "@reduxjs/toolkit";

const wishListSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addTowishList:(state,action)=>{
            state.push(action.payload)

        },
        removewishList:(state,action)=>{
            return state.filter(item=>item.id!==action.payload)
        }
    }
})
export const {addTowishList,removewishList}=wishListSlice.actions
export default wishListSlice.reducer