import { BoardLevel } from "../App/ChessBoard/types";
import { Piece } from "../ChessPiece/types";

export type CellState = 'default' | 'active' | 'underMove' | 'underAttack'

export type ChessCellProps = {
    level: BoardLevel;
    isWhite: boolean;
    piece?: Piece;
    state: CellState;
}