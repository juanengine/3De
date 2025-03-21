import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.example.com/orders"; // Reemplaza con tu API

// 🔹 Obtener pedidos
export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// 🔹 Crear un pedido
export const addOrder = createAsyncThunk("orders/addOrder", async (order) => {
  const response = await axios.post(API_URL, order);
  return response.data;
});

const orderSlice = createSlice({
  name: "orders",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default orderSlice.reducer;