import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
import { jsx } from 'react/jsx-runtime';
const initialState = {
  pastes:localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")) : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state,action) => {
         const paste = action.payload;
         state.pastes.push(paste)
         localStorage.setItem("pastes",JSON.stringify(state.pastes))
         toast("Paste created Successfully")
     },
    updateToPaste: (state,action) => {
      const paste = action.payload
      const index = state.pastes.findIndex((item)=> item._id === paste._id)

      if(index>=0)
      {
        state.pastes[index] = paste
      }
      localStorage.setItem("pastes",JSON.stringify(state.pastes))
      toast.success("Paste Updated")
    },
    ResetAllPaste: (state, ) => {
      state.pastes = [];
      localStorage.removeItem("pastes")
    },
    removeFromPaste:(state,action)=>
    {
     const pasteId = action.payload
     console.log(pasteId);
     
     const index = state.pastes.findIndex((item)=>
    item._id === pasteId)

     if(index >=0)
     {
        state.pastes.splice(index,1)

        localStorage.setItem("paste",JSON.stringify(state.pastes))

        toast.success("Paste Deleted")
     }

    }
  },
})


export const { addToPaste,updateToPaste,ResetAllPaste,removeFromPaste } = pasteSlice.actions

export default pasteSlice.reducer