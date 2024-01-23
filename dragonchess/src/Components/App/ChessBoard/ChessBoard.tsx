import styled from "styled-components";
import { isEven, isOdd } from "../../../services/common";
import { ChessBoardProps } from "./types";
import ChessCell from "../../ChessCell.tsx/ChessCell";


const ChessBoard: React.FC<ChessBoardProps> = ({level, rowsArr}) => {
    const rows = rowsArr.map((row, rowIndex) => {
        return row.map((cell, cellIndex) => {
            return {
                level, 
                isWhite: (isOdd(rowIndex + 1) && isEven(cellIndex + 1)) || (isEven(rowIndex + 1) && isOdd(cellIndex + 1)), 
                piece: cell.piece, 
                state: cell.state
            }
        })
    })

    return <>
    {rows.reverse().map((row, rowIndex) => <StyledRow key={Math.random()}>
        {row.map((cell, index) => <ChessCell 
            key={Math.random()}
            level={cell.level} 
            isWhite={cell.isWhite} 
            piece={cell.piece} 
            state={cell.state} />)}
    </StyledRow>)}
    </>
};

export default ChessBoard;

const StyledRow = styled.div(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    'flex-direction': 'row',
}))