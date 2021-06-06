import { configureStore } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from '../reducers/userSlice'
const middlewares = getDefaultMiddleware()
export default configureStore({
  reducer: {
      user:userReducer,
      middleware:middlewares,
  },
})