import {createSlice} from "@reduxjs/toolkit";
//slice mein ham inital state ,name or initalstate ka pora kam
//slice ham user ky authetication keliye use kregy
//har bar ham store se yeh pochegy ky user authetic hai ya nhi

const initalState={
    status:false,
    userData:null
}
const authSlice=createSlice({
name: "auth",
//dosra ham isko inital state degy
initalState,
//third ham reducers degy
reducers:{
    login:(state,action)=>{
    state.status=true;
    state.userData=action.payload.userData;
    },
    logout:(state,action)=>{
        state.status=false;
        state.userData=null;
    }
 }
})


//ham do cheezy export kregy
//authSlice mein reducers ko
export default authSlice.reducer;
//reducers ky function ko bhi export kregy
export const {login,logout} = authSlice.action;