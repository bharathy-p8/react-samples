import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import employeeReducer from '../features/employee/employeeSlice'



const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

export default configureStore({
  reducer: {
    employee: employeeReducer,
  },
  middleware: customizedMiddleware, 
})
