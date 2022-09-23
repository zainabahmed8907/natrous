

import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./features/cart/CartSlice"
// import userSlice from "./features/users/UserSLice"
export const store = configureStore({
    reducer: {
        cart: CartSlice
    }

})