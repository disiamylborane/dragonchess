import { Piece } from "./types";
import GoldBasiliskPic from '../../assets/pieces/basilisk.svg.gold.png'
import GoldDragonPic from '../../assets/pieces/dragon.svg.gold.png'
import GoldGriffonPic from '../../assets/pieces/griffon.svg.gold.png'
import GoldUnicornPic from '../../assets/pieces/unicorn.svg.gold.png'
import GoldClericPic from '../../assets/pieces/cleric.svg.gold.png'
import GoldDwarfPic from '../../assets/pieces/dwarf.svg.gold.png'
import GoldElementalPic from '../../assets/pieces/elemental.svg.gold.png'
import GolgHeroPic from '../../assets/pieces/hero.svg.gold.png'
import GoldKingPic from '../../assets/pieces/king.svg.gold.png'
import GolgMagePic from '../../assets/pieces/mage.svg.gold.png'
import GolgOliphantPic from '../../assets/pieces/oliphant.svg.gold.png'
import GoldPaladinPic from '../../assets/pieces/paladin.svg.gold.png'
import GoldSylphPic from '../../assets/pieces/sylph.svg.gold.png'
import GoldThiefPic from '../../assets/pieces/thief.svg.gold.png'
import GoldWarriorPic from '../../assets/pieces/warrior.svg.gold.png'
import ScarletBasiliskPic from '../../assets/pieces/basilisk.svg.scarlet.png'
import ScarletDragonPic from '../../assets/pieces/dragon.svg.scarlet.png'
import ScarletGriffonPic from '../../assets/pieces/griffon.svg.scarlet.png'
import ScarletUnicornPic from '../../assets/pieces/unicorn.svg.scarlet.png'
import ScarletClericPic from '../../assets/pieces/cleric.svg.scarlet.png'
import ScarletDwarfPic from '../../assets/pieces/dwarf.svg.scarlet.png'
import ScarletElementalPic from '../../assets/pieces/elemental.svg.scarlet.png'
import ScarletHeroPic from '../../assets/pieces/hero.svg.scarlet.png'
import ScarletKingPic from '../../assets/pieces/king.svg.scarlet.png'
import ScarletMagePic from '../../assets/pieces/mage.svg.scarlet.png'
import ScarletOliphantPic from '../../assets/pieces/oliphant.svg.scarlet.png'
import ScarletPaladinPic from '../../assets/pieces/paladin.svg.scarlet.png'
import ScarletSylphPic from '../../assets/pieces/sylph.svg.scarlet.png'
import ScarletThiefPic from '../../assets/pieces/thief.svg.scarlet.png'
import ScarletWarriorPic from '../../assets/pieces/warrior.svg.scarlet.png'
import styled from "styled-components";
import { useMemo } from "react";

const ChessPiece: React.FC<{ piece:Piece }> = ({ piece }) => {
    const picSetting = useMemo<{[key in Piece]: string}>(() => ({
        [Piece.goldenBasilisk]: GoldBasiliskPic,
        [Piece.goldenDragon]: GoldDragonPic,
        [Piece.goldenGriffon]: GoldGriffonPic,
        [Piece.goldenUnicorn]: GoldUnicornPic,
        [Piece.goldenCleric]: GoldClericPic,
        [Piece.goldenDwarf]: GoldDwarfPic,
        [Piece.goldenElemental]: GoldElementalPic,
        [Piece.goldenHero]: GolgHeroPic,
        [Piece.goldenKing]: GoldKingPic,
        [Piece.goldenMage]: GolgMagePic,
        [Piece.goldenOliphant]: GolgOliphantPic,
        [Piece.goldenPaladin]: GoldPaladinPic,
        [Piece.goldenSylph]: GoldSylphPic,
        [Piece.goldenThief]: GoldThiefPic,
        [Piece.goldenWarrior]: GoldWarriorPic,
        [Piece.scarletBasilisk]: ScarletBasiliskPic,
        [Piece.scarletDragon]: ScarletDragonPic,
        [Piece.scarletGriffon]: ScarletGriffonPic,
        [Piece.scarletUnicorn]: ScarletUnicornPic,
        [Piece.scarletCleric]: ScarletClericPic,
        [Piece.scarletDwarf]: ScarletDwarfPic,
        [Piece.scarletElemental]: ScarletElementalPic,
        [Piece.scarletHero]: ScarletHeroPic,
        [Piece.scarletKing]: ScarletKingPic,
        [Piece.scarletMage]: ScarletMagePic,
        [Piece.scarletOliphant]: ScarletOliphantPic,
        [Piece.scarletPaladin]: ScarletPaladinPic,
        [Piece.scarletSylph]: ScarletSylphPic,
        [Piece.scarletThief]: ScarletThiefPic,
        [Piece.scarletWarrior]: ScarletWarriorPic,
        [Piece.empty]: '',
    }), [])
    const piecePic = picSetting[piece]

    return piecePic ? <StyledPic src={piecePic}></StyledPic> : null
}

const StyledPic = styled.img(() => ({
    width: '7vh',
    height: '7vh',
}))

export default ChessPiece