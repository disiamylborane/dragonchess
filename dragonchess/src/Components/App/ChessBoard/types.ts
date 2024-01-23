import { CellState } from "../../ChessCell.tsx/types";
import { Piece } from "../../ChessPiece/types";

export type BoardLevel = 1 | 2 | 3
export type Row = {piece?: Piece, state: CellState}[]

export type ChessBoardProps = {
    level: BoardLevel;
    rowsArr: Row[]
}