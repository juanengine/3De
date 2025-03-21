import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/customerSlice";
import orderReducer from "./slices/orderSlice";


const store = configureStore({
    reducer: {
      customers: customerReducer,
      orders: orderReducer,
    },
  });
  
  export default store;