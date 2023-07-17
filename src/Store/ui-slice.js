import { createSlice } from "@reduxjs/toolkit";

const uislice=createSlice({
    name:"ui",
    initialState:{cartIsVisible : false ,
                  notification : null},
    reducers: {
        toggle(state){
            state.cartIsVisible= !state.cartIsVisible
        },

        showNotification(state,action){
         state.notification =
          { status : action.payload.status, //status can be like pending succes and loading
           title : action.payload.title,
           message : action.payload.messsage}

        }
    }
})

export const uiActions=uislice.actions;
export default uislice;