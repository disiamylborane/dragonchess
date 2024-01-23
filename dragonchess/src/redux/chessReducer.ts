import { createAction, createReducer } from '@reduxjs/toolkit';
import { ChessStateType } from './types';
import { Row } from '../Components/App/ChessBoard/types';


const initialState: ChessStateType = {
  desk: [],
  board: '',
}

export const setDesk = createAction<Row[][]>('SET_DESK')
export const setBoard = createAction<string>('SET_BOARD')

const chessReducer = createReducer<ChessStateType>(initialState,
  (builder) => {
    builder
    .addCase(setDesk, (state, action) => {
      state.desk = action.payload
    })
    .addCase(setBoard, (state, action) => {
      state.board = action.payload
    })
    
      .addDefaultCase((state, action) => {
      })
  }
  )

  export default chessReducer