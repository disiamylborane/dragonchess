export enum ApiPieces {
    empty = '.',
    goldenDragon = 'R',
    goldenGriffon = 'G',
    goldenSylph = 'S',
    goldenWarrior = 'W',
    goldenOliphant = 'O',
    goldenUnicorn = 'U',
    goldenHero = 'H',
    goldenThief = 'T',
    goldenCleric = 'C',
    goldenMage = 'M',
    goldenKing = 'K',
    goldenPaladin = 'P',
    goldenDwarf = 'D',
    goldenBasilisk = 'B',
    goldenElemental = 'E',

    scarletDragon = 'r',
    scarletGriffon = 'g',
    scarletSylph = 's',
    scarletWarrior = 'w',
    scarletOliphant = 'o',
    scarletUnicorn = 'u',
    scarletHero = 'h',
    scarletThief = 't',
    scarletCleric = 'c',
    scarletMage = 'm',
    scarletKing = 'k',
    scarletPaladin = 'p',
    scarletDwarf = 'd',
    scarletBasilisk = 'b',
    scarletElemental = 'e',
} 

export enum Pieces {
    empty = 'empty',
    goldenDragon = 'goldenDragon',
    goldenGriffon = 'goldenGriffon',
    goldenSylph = 'goldenSylph',
    goldenWarrior = 'goldenWarrior',
    goldenOliphant = 'goldenOliphant',
    goldenUnicorn = 'goldenUnicorn',
    goldenHero = 'goldenHero',
    goldenThief = 'goldenThief',
    goldenCleric = 'goldenCleric',
    goldenMage = 'goldenMage',
    goldenKing = 'goldenKing',
    goldenPaladin = 'goldenPaladin',
    goldenDwarf = 'goldenDwarf',
    goldenBasilisk = 'goldenBasilisk',
    goldenElemental = 'goldenElemental',

    scarletDragon = 'scarletDragon',
    scarletGriffon = 'scarletGriffon',
    scarletSylph = 'scarletSylph',
    scarletWarrior = 'scarletWarrior',
    scarletOliphant = 'scarletOliphant',
    scarletUnicorn = 'scarletUnicorn',
    scarletHero = 'scarletHero',
    scarletThief = 'scarletThief',
    scarletCleric = 'scarletCleric',
    scarletMage = 'scarletMage',
    scarletKing = 'scarletKing',
    scarletPaladin = 'scarletPaladin',
    scarletDwarf = 'scarletDwarf',
    scarletBasilisk = 'scarletBasilisk',
    scarletElemental = 'scarletElemental',
} 

export type CellState = 'default' | 'active' | 'underMove' | 'underAttack'
export enum CellParameters {
    desk = 'desk',
    column = 'column',
    row = 'row',
    piece = 'piece',
    isLightCell = 'isLightCell',
    state = 'state',
}

export type Cell = {
    [CellParameters.desk]: number,
    [CellParameters.column]: number,
    [CellParameters.row]: string
    [CellParameters.piece]: Pieces
    [CellParameters.isLightCell]: boolean
    [CellParameters.state]: CellState
}