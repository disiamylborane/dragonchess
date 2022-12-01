import { useCallback, useEffect, useState } from 'react';
import { ApiPieces, Cell, CellParameters, CellState, Pieces } from '../App/types';
import { columnsCount, piecePics, pieces, rowsCount } from '../App/_handlers';
import styled from 'styled-components';
import init, { start_board, get_possible_moves, get_possible_moves_from, fen_with_move, think } from '../pkg/dragonchess_engine';

const convertBoard = (board: any) => {
    const boardArray: ApiPieces[] = board.split('')
    return boardArray.map((cell: ApiPieces, index): Cell => ({
        desk: Math.ceil((index + 0.01) / 96),
        column: Math.ceil((index + 0.01) / 8 - 12 * (Math.ceil((index + 0.01) / 96) - 1)),
        row: rowsCount[index % 8],
        piece: pieces[cell],
        isLightCell: (Math.floor(index / 8) + index % 8) % 2 !== 0,
        state: 'default'
    }))
}

const ChessScreen: React.FC =() => {
    const [board, setBoard] = useState('')
    const [specStateCells, setSpecStateCells] = useState<{
        active: string[],
        underMove: string[],
        underAttack: string[]
    }>({
        active: [],
        underMove: [],
        underAttack: []
    })
    const [possibleMoves, setPossibleMoves] = useState([])
    const [desk, setDesk] = useState<Cell[]>([])
    const firstDesk = desk.slice(0, 96)
    const secondDesk = desk.slice(96,192)
    const thirdDesk = desk.slice(192,288)
    const [activeScreen, setActiveScreen ]= useState(0)

    let initiate = async() => {
        await init()
        const startBoard = convertBoard(start_board())
        setDesk(startBoard)
        setBoard(start_board())
    }
    useEffect(() => {initiate()}, [])

    const findCell = (cellData: string) => {
        const foundCell = [...desk].find((cell: Cell) => {
            return (cell.desk === +cellData[0] 
            && cell.column === +cellData.slice(2)
            && cell.row === cellData[1])
        })
        return foundCell
    }

    const changeCell = (
        cell: string, 
        parameter: CellParameters, 
        value: string | number | boolean | CellState | Pieces) => {
        const newCell = findCell(cell)
        const newDesk = [...desk]
        if(newCell){
            const indexOfNewCell = newDesk.indexOf(newCell)
            newDesk.splice(indexOfNewCell, 1, {...newCell, [parameter]: value})
        }
        setDesk(() => (newDesk))
        console.log('state changed')
    }

    const activateCell = (cell: string) => {
        declineActivation()
        changeCell(cell, CellParameters.state, 'active')
        setSpecStateCells((prev) => ({...prev, active: [...prev.active, cell]}))
    }

    const declineActivation = () => {
        const cells = [...specStateCells.active, ...specStateCells.underAttack, ...specStateCells.underMove]
        cells.forEach((c: string) => {
            changeCell(c, CellParameters.state, 'default')
            console.log(c)
            
        })
        
        // setSpecStateCells(() => ({
        //     active: [],
        //     underMove: [],
        //     underAttack: []
        // }))
    }

    useEffect(() => {
        console.log(desk)
    }, [desk])
    
    return( 
    <StyledDeskWrapper>
       {desk.length > 0 && <StyledDesk>
                {columnsCount.map((column, colIndex) => (
                <StyledColumn key={`${column}_column`}>
                    {rowsCount.map((row, rowIndex) => {
                        const cell = colIndex * 8 + rowIndex
                        return (
                            <StyledCell 
                                key={`${row}_row`} 
                                isLight={firstDesk[cell]?.isLightCell} 
                                cellState={firstDesk[cell]?.state}
                                level={0}
                                onClick={() => {activateCell(`${1}${row}${column}`)}}>

                                {thirdDesk[cell]?.piece !== 'empty' && 
                                <StyledPic 
                                src={piecePics[thirdDesk[cell]?.piece]} 
                                alt={piecePics[thirdDesk[cell]?.piece]}/>}
                                {secondDesk[cell]?.piece !== 'empty' && <LevelsMarkWrapper level={2} >
                                    <LevelsMarkInner markerLevel={1}/>
                                </LevelsMarkWrapper>}
                                {secondDesk[cell].piece !== 'empty' && <LevelsMarkWrapper level={3} >
                                    <LevelsMarkInner markerLevel={2}/>
                                </LevelsMarkWrapper>}
                            </StyledCell>)})}
                </StyledColumn>))}
            </StyledDesk>}

            {desk.length > 0 && <StyledDesk>
                {columnsCount.map((column, colIndex) => 
                <StyledColumn key={`${column}_column`}>
                    {rowsCount.map((row, rowIndex)=> {
                        const cell = colIndex * 8 + rowIndex
                    return (
                    <StyledCell 
                    key={`${row}_row`} 
                    isLight={secondDesk[colIndex * 8 + rowIndex]?.isLightCell} 
                    cellState={secondDesk[cell]?.state}
                    level={1}
                    onClick={() => {activateCell(`${2}${row}${column}`)}}>
                        {firstDesk[cell]?.piece !== 'empty' && <LevelsMarkWrapper level={0} >
                            <LevelsMarkInner markerLevel={0}/>
                        </LevelsMarkWrapper>}
                        {secondDesk[cell]?.piece !== 'empty' && 
                        <StyledPic 
                        src={piecePics[secondDesk[cell]?.piece]} 
                        alt={piecePics[secondDesk[cell]?.piece]}/>}
                        {thirdDesk[cell]?.piece !== 'empty' && <LevelsMarkWrapper level={3} >
                            <LevelsMarkInner markerLevel={2}/>
                        </LevelsMarkWrapper>}
                    </StyledCell>)})}
                </StyledColumn>)}
            </StyledDesk>
            }
            {desk.length > 0 && <StyledDesk>
                {columnsCount.map((column, colIndex) => (
                <StyledColumn key={`${column}_column`}>
                    {rowsCount.map((row, rowIndex)=> {
                        const cell = colIndex * 8 + rowIndex
                        return (
                    <StyledCell 
                    key={`${row}_row`} 
                    isLight={thirdDesk[cell]?.isLightCell} 
                    cellState={thirdDesk[cell]?.state}
                    level={2}
                    onClick={() => {activateCell(`${3}${row}${column}`)}}>
                         {thirdDesk[cell]?.piece !== 'empty' && <LevelsMarkWrapper level={0}>
                            <LevelsMarkInner markerLevel={0}/>
                        </LevelsMarkWrapper>}
                        {secondDesk[cell]?.piece !== 'empty' && <LevelsMarkWrapper level={1} >
                            <LevelsMarkInner markerLevel={1}/>
                        </LevelsMarkWrapper>}
                        {firstDesk[cell]?.piece !== 'empty' && 
                        <StyledPic 
                        src={piecePics[firstDesk[cell]?.piece]} 
                        alt={piecePics[firstDesk[cell]?.piece]}/>}
                    </StyledCell>)})}
                </StyledColumn>))}
            </StyledDesk>
}
            
    </StyledDeskWrapper>
    
        )}

export default ChessScreen

const StyledDeskWrapper =  styled.div(() => ({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    'flex-wrap': 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
}))

const StyledDesk = styled.div(() => ({
    display: 'flex',
    margin: '5px',
}))
const StyledColumn = styled.div(() => ({
}))

const cellColors = ['darkblue', 'darkgreen', 'darkred']
const states: CellState[] = ['default', 'active', 'underMove', 'underAttack']
const cellBorders = ['none', '0 0 5px 5px orange inset', '0 0 5px 5px yellow inset', '0 0 5px 5px red inset']

const StyledCell = styled.div<{isLight: boolean, level: number, cellState: CellState}>(({isLight, level, cellState}) => ({
    width: '9vh',
    height: '9vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: !isLight ? 'lightgray' : cellColors[level],
    position: 'relative',
    'box-shadow': cellBorders[states.indexOf(cellState)]
}))

const StyledPic = styled.img(() => ({
    width: '7vh',
    height: '7vh',
}))

const markerPositions = [0, 1.5, 6, 7.5]
const LevelsMarkWrapper = styled.div<{level: number}>(({level}) => ({
    width: '100%',
    height: '1vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: '2px',
    position: 'absolute' as 'absolute',   
    top: `${markerPositions[level]}vh`,
    right: '5px'
}))

const markerColors = ['blue', 'green', 'red']

const LevelsMarkInner = styled.div<{markerLevel:number}>(({markerLevel}) => ({
    width: '1vh',
    height: '1vh',
    border: '1px solid white',
    backgroundColor: markerColors[markerLevel],
    borderRadius: '50%',
    margin: '1px',
}))