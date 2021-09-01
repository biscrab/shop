import React,{useState} from 'react'
import * as S from '../styled/App'

const Star = ({star}) => {

    return(
        <S.StarDiv>
            <S.StarRating width={`${star*20+1.5}%`}>
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </S.StarRating>
            <S.StarBase>
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </S.StarBase>
        </S.StarDiv>
    );
}

export default Star