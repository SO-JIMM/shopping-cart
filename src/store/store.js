import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./slices/cart-slice/cartSlice"
import productsSlice from "./slices/products-slice/productsSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsSlice,
  },
})
