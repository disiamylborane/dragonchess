import { symbolToPiece } from "../ChessPiece/_handlers"
import { ApiPieces } from "../ChessPiece/types"

export type SimplifyInd = (ind: number) => number

const simplifyInd:SimplifyInd = (ind: number) => {
    const newInd = ind <= 7 ? ind : ind - 8
    return newInd > 7 ? simplifyInd(newInd) : newInd
}

export const convertBoards = (board: string) => {
    return Array(3).fill([]).map((item, index) => convertOneBoard(board, index))
}

export const convertOneBoard = (board: string, deskNum: number) => {
    const desk = Array(8).fill([])
    const range = [[192,288],[96,192],[0,96]]
    board.slice(range[deskNum][0], range[deskNum][1]).split('').forEach((item, index) => {
        const simplidiedInd = simplifyInd(index)
        desk[simplidiedInd] = [...desk[simplidiedInd], {
            level: deskNum + 1,
            piece: symbolToPiece[item as ApiPieces],
            state: 'default',
        }]
    })
    return desk
}
