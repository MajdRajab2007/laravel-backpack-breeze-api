import { configureStore } from '@reduxjs/toolkit'
import  usersSlice from './features/users/users'

export const store = configureStore({
  reducer: {
    users: usersSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
