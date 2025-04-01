import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Definir tipos
interface Customer {
  _id: string;
  email: string;
  nombre: string;
  apellidos: string;
  telefono: string;
}

export interface CustomerState {
  customers: Customer[];
  loading: boolean;
  error:string | null;
  
}

const initialState: CustomerState ={
  customers:[],
  loading:false,
  error:null
}

const API_URL = "http://localhost:3000"; // Reemplaza con tu URL real

// 🔹 Obtener todos los clientes
export const fetchCustomers = createAsyncThunk("customers/fetchCustomers", async () => {
  const response = await axios.get(`${API_URL}/customer`);
  console.log("Customers: ", response.data);
  
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
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        console.log("customers payload : ", action.payload);
        
        state.customers = action.payload;
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.customers.push(action.payload);
      })
      .addCase(deleteCustomer.fulfilled, (state, action:any) => {
        state.customers = state.customers.filter((customer) => customer._id !== action.payload);
      });
  },
});



export default customerSlice.reducer;