import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setBoard, setDesk, } from '../../redux/chessReducer';
import ChessBoard from '../App/ChessBoard/ChessBoard';
import { useEffect, useLayoutEffect, useState } from 'react';
import init, { start_board, get_possible_moves, get_possible_moves_from, fen_with_move, think } from '../../pkg/dragonchess_engine';
import { convertBoards } from './_handlers';
import { BoardLevel } from '../App/ChessBoard/types';

const ChessScreen: React.FC = () => {
    const dispatch = useAppDispatch()
    const [gameStarted, setGameStarted] = useState(false)
    const gameBoard = useAppSelector(state => state.chessReducer.desk)

    useLayoutEffect(() => {
        const initGame = async () => {
            await init()
        }

        async function startGame() {
            await initGame();
            setGameStarted(true);
          }

        startGame()  
    }, [])

    useEffect(() => {
        if(!gameStarted) return
        const board = start_board()
        dispatch(setBoard(board))
        dispatch(setDesk(convertBoards(board)))
          }, [ gameStarted ])
    
    return( 
        <StyledDeskWrapper>
            {gameBoard && gameBoard.map((row, index) => 
            <ChessBoard 
                key={index} 
                level={index + 1 as BoardLevel} 
                rowsArr={row} 
            />
            )}
        </StyledDeskWrapper>
    
        )}

export default ChessScreen

const StyledDeskWrapper = styled.div(() => ({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    'flex-direction': 'column',
    // 'flex-wrap': 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
}))


