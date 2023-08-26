import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
 items: Array<any>,
 totalAmount: number,
 totalQuantity: number
}

const initialState: CounterState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,actions: PayloadAction<any>) => {
    console.log(actions);
    state.totalQuantity += actions.payload.quantity
    },
    removeFromCart: (state,actions: PayloadAction<any>) => {
      console.log(actions)
      state.totalQuantity -= actions.payload.quantity
    },
    clearCart: (state) => {
      state= initialState
    },
  },
})

export const cartActions = cartSlice.actions

export default cartSlice