import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/customerSlice";
import orderReducer from "./slices/orderSlice";
import authReducer from "./slices/authSlice";


const store = configureStore({
    reducer: {
      customers: customerReducer,
      orders: orderReducer,
      auth:authReducer
    },
  });
  
  export default store;