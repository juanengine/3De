import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.example.com/customers"; // Reemplaza con tu URL real

// 🔹 Obtener todos los clientes
export const fetchCustomers = createAsyncThunk("customers/fetchCustomers", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// 🔹 Agregar un cliente
export const addCustomer = createAsyncThunk("customers/addCustomer", async (customer) => {
  const response = await axios.post(API_URL, customer);
  return response.data;
});

// 🔹 Eliminar un cliente
export const deleteCustomer = createAsyncThunk("customers/deleteCustomer", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const customerSlice = createSlice({
  name: "customers",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.list = state.list.filter((customer) => customer.id !== action.payload);
      });
  },
});

export default customerSlice.reducer;