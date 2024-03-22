import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCeo } from "../../api/ceoApi";
import { AxiosResponse } from "axios";

// Define interfaces for response data
interface CEO {
  companyName: string;
  ceoName: string;
  name: string;
  description: string;
}

interface CEOState {
  ceo: CEO[];
  status: string | null;
}

export const fetchCeo = createAsyncThunk<CEO[]>("ceo/fetchCeo", async () => {
  const response: AxiosResponse<CEO[]> = await getAllCeo();
  return response.data;
});

const initialState: CEOState = {
  ceo: [],
  status: null,
};

const ceoSlice = createSlice({
  name: "ceo",
  initialState,
  reducers: {}, // You can add reducers if needed
  extraReducers: (builder) => {
    builder.addCase(fetchCeo.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCeo.fulfilled, (state, action) => {
      state.ceo = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchCeo.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default ceoSlice.reducer;
