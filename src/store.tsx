import { configureStore } from '@reduxjs/toolkit'
import coctailSlice from './feautures/coctailSlice'

const store = configureStore({
  reducer: {
    coctails: coctailSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
