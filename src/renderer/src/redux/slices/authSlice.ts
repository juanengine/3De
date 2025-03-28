import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Definir tipos
interface User {
  id: string;
  email: string;
}

export interface AuthState {
  
  token: string | null;
  loading: boolean;
  msg: string;
  error: string | null;
  success:boolean;
}

// Estado inicial
const initialState: AuthState = {
  msg:"",
  token: null,
  loading: false,
  error: null,
  success: false
};

const URL = "http://localhost:3000"

// Acción asíncrona para iniciar sesión
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${URL}/users/login`, { email, password });
      console.log("Response: ", response);
      
      return response.data; // Debe contener { user, token }
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Error de autenticación");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.msg = "";
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ msg: string; token: string; success: boolean }>) => {
        state.loading = false;
        state.msg = action.payload.msg;
        state.token = action.payload.token;
        state.success = action.payload.success;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.success = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;