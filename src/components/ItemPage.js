import React,{useState, useEffect} from 'react'
import * as S from '../styled/App'
import A from '../images/c.jpg'
import B from '../images/b.jpg'
import C from '../images/c.jpg'
import D from '../images/d.jpg'
import E from '../images/e.jpg'
import Relate from '../contents/Relate'
import Comment from '../contents/Comment'
import Profile from '../images/profile.png'

const ItemPge = () => {

    const list = [{id: 1, img: A, price: 100, name: 1 ,catagory: 1},
    {id: 2, img: B, price: 100, name: 1, catagory: 1},
    {id: 3, img: C, price: 100, name: 1, catagory: 1},
    {id: 4, img: D, price: 100, name: 1, catagory: 1},
    {id: 5, img: E, price: 100, name: 1,catagory: 1},
    {id: 5, img: E, price: 100, name: 1,catagory: 1},
    {id: 5, img: E, price: 100, name: 1,catagory: 1},
];

    const [more, setMore] = useState(false);
    const img = [A, B, C, D, E];
    const [imgN, setImgN] = useState(0);
    const comment = [{comment: "1", star: 2, name: 1}];



    return(
        <S.Item> 
            <S.IBorder>
                <S.Image src={img[imgN]}></S.Image>
                <S.Info>
                    <S.ATop>
                    <S.ADiv>
                        <img src={Profile}></img>
                        <p>제품</p>
                        <span classADiv="star-rating"></span>
                        <S.PText>10,000원</S.PText>
                    </S.ADiv>
                    <S.ADiv>
                        <S.DileveryTime>8/30일</S.DileveryTime>
                    </S.ADiv>
                    </S.ATop>                
                    <S.ButtonDiv>
                        <S.Bucket>장바구니</S.Bucket>                     
                        <S.Buy>구매하기</S.Buy>
                    </S.ButtonDiv>
                </S.Info>
            </S.IBorder>
            <S.Related>
                <S.RelatedH>관련 상품</S.RelatedH>
                <S.RelatedDiv>
                    <Relate lists={list}/>
                </S.RelatedDiv>
            </S.Related>
            <S.IDiv>
                <div>
                <S.EDiv>
                    <S.EI>
                    <img src={A}></img>
                    <img src={A}></img>
                    <img src={A}></img>
                    <img src={A}></img>
                    </S.EI>  
                {more ?
                <></> :
                <S.MDiv>
                    <S.MoreDiv></S.MoreDiv>
                    <S.MoreButtonDiv>
                    <S.MoreButton onClick={() => setMore(true)}>상품정보 더보기</S.MoreButton>
                    </S.MoreButtonDiv>
                </S.MDiv>}
                </S.EDiv>
                <S.CommentH>상품평</S.CommentH>
                {comment.length >= 10 ?
                <S.CommentUl height="500px">
                    <Comment lists={comment}/>
                </S.CommentUl>
                :
                <S.CommentUl height="auto">
                <Comment lists={comment}/>
                </S.CommentUl>
                }
                </div>
                <S.BuyDiv>
                    <S.BuyImgDiv>
                        <S.BuyImg></S.BuyImg>
                        <p>아이템</p>
                    </S.BuyImgDiv>
                    <S.BBillDiv>
                    <S.BBill></S.BBill>
                    </S.BBillDiv>
                    <S.BBDiv>
                        <h3>총 상품금액</h3>
                        <h2 style={{marginTop:"15px"}}>10000원</h2>
                    </S.BBDiv>
                    <S.BB color="black" bkcolor="white" border="1px">장바구니</S.BB>                     
                    <S.BB color="white" bkcolor="royalblue" border="0px">구매하기</S.BB>
                </S.BuyDiv>
            </S.IDiv>                
        </S.Item>
    );

    /*<S.PointDiv><S.Pspan>🟡100포인트</S.Pspan></S.PointDiv>*/
}

export default ItemPge;