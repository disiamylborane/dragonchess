import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import chessReducer from './chessReducer';

const rootReducer = combineReducers({
  chessReducer: chessReducer
})

const store = configureStore({
  reducer: rootReducer,
  devTools: true
})


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store