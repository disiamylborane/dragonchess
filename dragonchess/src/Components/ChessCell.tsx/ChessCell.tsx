import styled from "styled-components"
import { CellState, ChessCellProps } from "./types"
import { colors } from "../../style/colors"
import ChessPiece from "../ChessPiece/ChessPiece"
import { BoardLevel } from "../App/ChessBoard/types"

const ChessCell: React.FC<ChessCellProps> = ({level, isWhite, piece, state}) => (
    <StyledCell isWhite={isWhite} level={level} state={state}>
        {piece && <ChessPiece piece={piece} />}
    </StyledCell>
)

export default ChessCell

const StyledCell = styled.div<{
    isWhite: boolean, 
    level: BoardLevel, 
    state: CellState
}>(({isWhite, level, state}) => ({
    width: '9vh',
    height: '9vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: cellColors[isWhite ? 'light' : 'dark'][level - 1],
    position: 'relative',
    'box-shadow': cellBorders[state]
}))

const cellColors = {
    dark: [colors.airDark, colors.landDark, colors.subterraneanDark],
    light: [colors.airLight, colors.landLight, colors.subterraneanLight]
}
const cellBorders = {
    default: 'none', 
    active: '0 0 5px 5px orange inset', 
    underMove: '0 0 5px 5px yellow inset', 
    underAttack: '0 0 5px 5px red inset'
}