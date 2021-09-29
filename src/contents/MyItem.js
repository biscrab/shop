import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router';
import * as S from '../styled/App'

const Select = ({item}) => {

    axios.defaults.baseURL = 'http://13.124.26.107:9095'
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.withCredentials = true;

    let history = useHistory();

    const [change, setChange] = useState(-1);

    const Delete = () => {
        if(window.confirm("제품을 삭제하시겠습니까?")){
            //삭제
        }
        else{

        }
    }

    return(
        <S.MyRDiv onClick={()=>history.push(`/item/${item.id}`)}>
            <S.MyRImg src={item.img}/>
            <S.MyRBack></S.MyRBack>
        </S.MyRDiv>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => ( 
            <Select item={item} key={item.name} name={item.name} price={item.price} img={item.img} id={item.id}/>
        )
    )
    return itemList
}

export default List;