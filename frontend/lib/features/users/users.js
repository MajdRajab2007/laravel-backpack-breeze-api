import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an async thunk action to fetch data from the API
export const fetchUserData = createAsyncThunk(
  'usersSlice/fetchUserData',
  async (email) => {
    const response = await fetch(`http://localhost:8000/api/users/${email}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const data = await response.json();
    return data;
  }
);

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState: {
    userData: null,
    status: 'idle', // 'loading', 'succeeded', 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userData = action.payload;
        // Save fetched data to browser storage
        localStorage.setItem('userData', JSON.stringify(action.payload));
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Load user data from browser storage if available when the application initializes
const storedUserData = localStorage.getItem('userData');
if (storedUserData) {
  usersSlice.initialState = JSON.parse(storedUserData);
}

export default usersSlice.reducer;
