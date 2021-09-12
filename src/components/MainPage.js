import React,{useState, useEffect, useRef} from 'react'
import * as S from '../styled/App'
import A from '../images/a.jpg'
import B from '../images/b.jpg'
import C from '../images/c.jpg'
import D from '../images/d.jpg'
import Border from '../contents/Border'
import { useHistory } from 'react-router-dom'
import MyItem from '../contents/MyItem'

const MainPage = () => {
    var arr=[A, B, C, D];
    const [i, setI] = useState(0);
    const n = useRef(0);

    function showImage() {
        if(i < 3){
            setI((n.current += 1));
        }
        else{
            setI((n.current = 0));
        }
    }

    useEffect(()=>{
    },[]);

    let history = useHistory();

    const [hover, setHover] = useState(true);
    const [value, setValue] = useState(1);

    const Sale = [{id: 1, img: A, name: "1"},{id: 1, img: A, name: "1"},{id: 1, img: A, name: "1"},{id: 1, img: A, name: "1"},{id: 1, img: A, name: "1"}];
    const Best = [{id: 1, img: B, name: "1"},{id: 1, img: B, name: "1"},{id: 1, img: B, name: "1"},{id: 1, img: B, name: "1"}];
    const New = [{id: 1, img: C, name: "1"},{id: 1, img: C, name: "1"},{id: 1, img: C, name: "1"},{id: 1, img: C, name: "1"},{id: 1, img: C, name: "1"}];

    const [list, setList] = useState([
        {id: 1, name: "1", price: 100, star: 1, img: A, brand: "samsung", sell: 50, catagory: 1, review: 100},
        {id: 1, name: "1", price: 10, star: 2, img: B, brand: "a", sell: 100 ,catagory: 1, review: 100},
        {id: 1, name: "1", price: 5, star: 3, img: C, brand: "a", sell: 200, catagory: 2, review: 100},
        {id: 1, name: "1", price: 6, star: 4, img: D, brand: "a", sell: 300, catagory: 3, review: 100},
        {id: 1, name: "1", price: 190, star: 5, img: B, brand: "a", sell: 400, catagory: 1, review: 100},
        {id: 1, name: "1", price: 190, star: 5, img: B, brand: "a", sell: 400, catagory: 1, review: 100},
    ]);

    return(
        <>
            <S.MainBanner>
                <S.BannerImage src={arr[i]}></S.BannerImage>
                <S.CTDiv onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                <S.CDiv>
                    <S.TotalCategory onClick={() => history.push('/catagory')}>전체 카테고리</S.TotalCategory>
                    <S.Category onMouseEnter={()=>setValue(0)} onClick={() => history.push('/catagory/1')}><S.CSpan>패션</S.CSpan></S.Category>
                    <S.Category onMouseEnter={()=>setValue(1)} onClick={() => history.push('/catagory/6')}><S.CSpan>뷰티</S.CSpan></S.Category>
                    <S.Category onMouseEnter={()=>setValue(2)} onClick={() => history.push('/catagory/20')}><S.CSpan>식품</S.CSpan></S.Category>
                    <S.Category onMouseEnter={()=>setValue(3)} onClick={() => history.push('/catagory/34')}><S.CSpan>주방용품</S.CSpan></S.Category>
                    <S.Category onMouseEnter={()=>setValue(4)} onClick={() => history.push('/catagory/48')}><S.CSpan>생활용품</S.CSpan></S.Category>
                    <S.Category onMouseEnter={()=>setValue(5)} onClick={() => history.push('/catagory/62')}><S.CSpan>홈인테리어</S.CSpan></S.Category>
                    <S.Category onMouseEnter={()=>setValue(6)} onClick={() => history.push('/catagory/73')}><S.CSpan>가전디지털</S.CSpan></S.Category>
                    <S.Category onMouseEnter={()=>setValue(7)} onClick={() => history.push('/catagory/89')}><S.CSpan>스포츠레져</S.CSpan></S.Category>
                    <S.Category onMouseEnter={()=>setValue(8)} onClick={() => history.push('/catagory/106')}><S.CSpan>도서/음반/DVD</S.CSpan></S.Category>
                    <S.Category onMouseEnter={()=>setValue(9)} onClick={() => history.push('/catagory/123')}><S.CSpan>반려동물용품</S.CSpan></S.Category>
                </S.CDiv>
                <Border h={hover} value={value}>1</Border>
                </S.CTDiv>
            </S.MainBanner>
            <S.BestItem>
                <S.Best>중고거래 인기 제품</S.Best>
                <S.BestDiv>
                    <MyItem lists={list}/>
                </S.BestDiv> 
            </S.BestItem>
        </>
    );
    /*            <S.BestItem>
                <S.Best>세일 중인 제품</S.Best>
                <S.BestDiv>
                    <Recommendation lists={Sale} />
                </S.BestDiv> 
            </S.BestItem>
            <S.BestItem>
                <S.Best>새로운 제품</S.Best>
                <S.BestDiv>
                    <Recommendation lists={New} />
                </S.BestDiv> 
            </S.BestItem>
             */
}

export default MainPage;