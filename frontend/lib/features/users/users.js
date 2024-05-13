import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an async thunk action to fetch data from the API
export const fetchUserData = createAsyncThunk(
  'usersSlice/fetchUserData',
  async (email) => {
    const response = await fetch(`https://api.yg.youth-guide.com/api/users/${email}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const data = await response.json();
    return data;
  }
);

// Define an async thunk action to add data to the API
export const addUserData = createAsyncThunk(
  'usersSlice/addUserData',
  async ({ email, newData }) => {
    const response = await fetch(`https://api.yg.youth-guide.com/api/users/read/${email}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    });
    if (!response.ok) {
      throw new Error('Failed to add user data');
    }
    fetchUserData(email)
    const data = await response.json();
    return data;

  }
);

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState: {
    userData: null,
    status: 'idle',
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
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('userData', JSON.stringify(action.payload));
        }
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Handle the response if needed
      })
      .addCase(addUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Load user data from browser storage if available when the application initializes
if (typeof window !== 'undefined') {
  const storedUserData = sessionStorage.getItem('userData');
  if (storedUserData) {
    usersSlice.initialState = {
      ...usersSlice.initialState,
      userData: JSON.parse(storedUserData)
    };
  }
}

export default usersSlice.reducer;
