import React from 'react'

import * as S from './styled'

const MenuBar = () => (
    <S.MenuBarWrapper>
        <S.MenuBarGroup>
            <S.MenuBarLink to="/" title="Home">
                <S.MenuBarItem></S.MenuBarItem>
            </S.MenuBarLink>
            <S.MenuBarLink to="/search" title="Search">
                <S.MenuBarItem></S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>
        <S.MenuBarGroup>
            <S.MenuBarItem title="Change theme"></S.MenuBarItem>
            <S.MenuBarItem title="Change view"></S.MenuBarItem>
            <S.MenuBarItem title="Top"></S.MenuBarItem>
        </S.MenuBarGroup>
    </S.MenuBarWrapper>
)

export default MenuBar