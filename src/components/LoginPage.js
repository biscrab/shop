import React,{useState} from "react";
import * as S from '../styled/App'
import axios from 'axios'
import { useHistory } from "react-router";

const LoginPage = () => {

    axios.defaults.withCredentials = true;

    let history = useHistory();

    const [login, setLogin] = useState(false);
    const [logined, setLogined] = useState(false);
    const [ip, setIp] = useState({email : "", password: ""});
    const [name, setName] = useState("");

    const jwt = require('jsonwebtoken');
    const token = jwt.sign({ foo: 'bar' }, 'secret-key', { expiresIn: '7d' }, (err, token) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(token);
    });

    const Login = () => {
        if(!ip.email){
            alert("이메일을 입력해주세요");     
        }   
        else if(!ip.password){
            alert("비밀번호를 입력해주세요");
        }
        else{
                let i = JSON.stringify(ip);

                console.log("i:"+i);
            
                axios.post("http://13.124.26.107:9095/api/auth/login", ip)
                .then(response => {
                    history.push("/");
                    alert("성공");              
                    //localStorage.token = JSON.stringify(token);
                    console.log("data")
                    console.log(response.data);
                })
                .catch(error => {
                    alert("오류");
                })
        }

        console.log(ip.email);
        console.log(ip.password);
    }

    return(
        <>
        <S.Login>
            <S.LoginDiv>
                <S.LoginTittle>대마마켓</S.LoginTittle> 
                <S.LoginSpan>이메일</S.LoginSpan>           
                <S.LoginInput value={ip.email} onChange={(e)=>setIp({...ip, email: e.target.value})}/>
                <S.LoginSpan>비밀번호</S.LoginSpan>
                <S.LoginInput value={ip.password} onChange={(e)=>setIp({...ip, password: e.target.value})}/>
                <S.LoginButton onClick={()=>Login()}>로그인</S.LoginButton>
            </S.LoginDiv>
        </S.Login>
        </>
    )
}

export default LoginPage