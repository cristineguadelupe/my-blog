import React from 'react'

import * as S from './styled'

const PostItem = () => (
    <S.PostItemLink to="/slug/">
        <S.PostItemWrapper>
            <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
            <S.PostItemInfo>
                <S.PostItemDate>July 11 - 2020 • 4 min (reading time) </S.PostItemDate>
                <S.PostItemTitle>My journey to become an Elixir Alchemist</S.PostItemTitle>
                <S.PostItemDescription>
                    Why I chose Elixir and real time applications to completely change my career in two months
                </S.PostItemDescription>
            </S.PostItemInfo>
        </S.PostItemWrapper>
    </S.PostItemLink>
)

export default PostItem