import { ApiPieces, Pieces } from "./types";
import GoldenDragonPic from '../assets/pieces/dragon.svg.gold.png'
import GoldenGriffonPic from '../assets/pieces/griffon.svg.gold.png'
import GoldenSylphPic from '../assets/pieces/sylph.svg.gold.png'
import GoldenWarriorPic from '../assets/pieces/warrior.svg.gold.png'
import GoldenOliphantPic from '../assets/pieces/oliphant.svg.gold.png'
import GoldenUnicornPic from '../assets/pieces/unicorn.svg.gold.png'
import GoldenHeroPic from '../assets/pieces/hero.svg.gold.png'
import GoldenThiefPic from '../assets/pieces/thief.svg.gold.png'
import GoldenClericPic from '../assets/pieces/cleric.svg.gold.png'
import GoldenMagePic from '../assets/pieces/mage.svg.gold.png'
import GoldenKingPic from '../assets/pieces/king.svg.gold.png'
import GoldenPaladinPic from '../assets/pieces/paladin.svg.gold.png'
import GoldenDwarfPic from '../assets/pieces/dwarf.svg.gold.png'
import GoldenBasiliskPic from '../assets/pieces/basilisk.svg.gold.png'
import GoldenElementalPic from '../assets/pieces/elemental.svg.gold.png'

import ScarletDragonPic from '../assets/pieces/dragon.svg.scarlet.png'
import ScarletGriffonPic from '../assets/pieces/griffon.svg.scarlet.png'
import ScarletSylphPic from '../assets/pieces/sylph.svg.scarlet.png'
import ScarletWarriorPic from '../assets/pieces/warrior.svg.scarlet.png'
import ScarletOliphantPic from '../assets/pieces/oliphant.svg.scarlet.png'
import ScarletUnicornPic from '../assets/pieces/unicorn.svg.scarlet.png'
import ScarletHeroPic from '../assets/pieces/hero.svg.scarlet.png'
import ScarletThiefPic from '../assets/pieces/thief.svg.scarlet.png'
import ScarletClericPic from '../assets/pieces/cleric.svg.scarlet.png'
import ScarletMagePic from '../assets/pieces/mage.svg.scarlet.png'
import ScarletKingPic from '../assets/pieces/king.svg.scarlet.png'
import ScarletPaladinPic from '../assets/pieces/paladin.svg.scarlet.png'
import ScarletDwarfPic from '../assets/pieces/dwarf.svg.scarlet.png'
import ScarletBasiliskPic from '../assets/pieces/basilisk.svg.scarlet.png'
import ScarletElementalPic from '../assets/pieces/elemental.svg.scarlet.png'

export const pieces: {[key in ApiPieces]: Pieces} = {
    [ApiPieces.empty]: Pieces.empty,
    [ApiPieces.goldenDragon]: Pieces.goldenDragon,
    [ApiPieces.goldenGriffon]: Pieces.goldenGriffon,
    [ApiPieces.goldenSylph]: Pieces.goldenSylph,
    [ApiPieces.goldenWarrior]: Pieces.goldenWarrior,
    [ApiPieces.goldenOliphant]: Pieces.goldenOliphant,
    [ApiPieces.goldenUnicorn]: Pieces.goldenUnicorn,
    [ApiPieces.goldenHero]: Pieces.goldenHero,
    [ApiPieces.goldenThief]: Pieces.goldenThief,
    [ApiPieces.goldenCleric]: Pieces.goldenCleric,
    [ApiPieces.goldenMage]: Pieces.goldenMage,
    [ApiPieces.goldenKing]: Pieces.goldenKing,
    [ApiPieces.goldenPaladin]: Pieces.goldenPaladin,
    [ApiPieces.goldenDwarf]: Pieces.goldenDwarf,
    [ApiPieces.goldenBasilisk]: Pieces.goldenBasilisk,
    [ApiPieces.goldenElemental]: Pieces.goldenElemental,

    [ApiPieces.scarletDragon]: Pieces.scarletDragon,
    [ApiPieces.scarletGriffon]: Pieces.scarletGriffon,
    [ApiPieces.scarletSylph]: Pieces.scarletSylph,
    [ApiPieces.scarletWarrior]: Pieces.scarletWarrior,
    [ApiPieces.scarletOliphant]: Pieces.scarletOliphant,
    [ApiPieces.scarletUnicorn]: Pieces.scarletUnicorn,
    [ApiPieces.scarletHero]: Pieces.scarletHero,
    [ApiPieces.scarletThief]: Pieces.scarletThief,
    [ApiPieces.scarletCleric]: Pieces.scarletCleric,
    [ApiPieces.scarletMage]: Pieces.scarletMage,
    [ApiPieces.scarletKing]: Pieces.scarletKing,
    [ApiPieces.scarletPaladin]: Pieces.scarletPaladin,
    [ApiPieces.scarletDwarf]: Pieces.scarletDwarf,
    [ApiPieces.scarletBasilisk]: Pieces.scarletBasilisk,
    [ApiPieces.scarletElemental]: Pieces.scarletElemental,
}

export const piecePics = {
    [Pieces.empty]: Pieces.empty,
    [Pieces.goldenDragon]: GoldenDragonPic,
    [Pieces.goldenGriffon]: GoldenGriffonPic,
    [Pieces.goldenSylph]: GoldenSylphPic,
    [Pieces.goldenWarrior]: GoldenWarriorPic,
    [Pieces.goldenOliphant]: GoldenOliphantPic,
    [Pieces.goldenUnicorn]: GoldenUnicornPic,
    [Pieces.goldenHero]: GoldenHeroPic,
    [Pieces.goldenThief]: GoldenThiefPic,
    [Pieces.goldenCleric]: GoldenClericPic,
    [Pieces.goldenMage]: GoldenMagePic,
    [Pieces.goldenKing]: GoldenKingPic,
    [Pieces.goldenPaladin]: GoldenPaladinPic,
    [Pieces.goldenDwarf]: GoldenDwarfPic,
    [Pieces.goldenBasilisk]: GoldenBasiliskPic,
    [Pieces.goldenElemental]: GoldenElementalPic,

    [Pieces.scarletDragon]: ScarletDragonPic,
    [Pieces.scarletGriffon]: ScarletGriffonPic,
    [Pieces.scarletSylph]: ScarletSylphPic,
    [Pieces.scarletWarrior]: ScarletWarriorPic,
    [Pieces.scarletOliphant]: ScarletOliphantPic,
    [Pieces.scarletUnicorn]: ScarletUnicornPic,
    [Pieces.scarletHero]: ScarletHeroPic,
    [Pieces.scarletThief]: ScarletThiefPic,
    [Pieces.scarletCleric]: ScarletClericPic,
    [Pieces.scarletMage]: ScarletMagePic,
    [Pieces.scarletKing]: ScarletKingPic,
    [Pieces.scarletPaladin]: ScarletPaladinPic,
    [Pieces.scarletDwarf]: ScarletDwarfPic,
    [Pieces.scarletBasilisk]: ScarletBasiliskPic,
    [Pieces.scarletElemental]: ScarletElementalPic,
}

export const columnsCount = [1,2,3,4,5,6,7,8,9,10,11,12]
export const rowsCount = ['h','g','f','e','d','c','b','a']