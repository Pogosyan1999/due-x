import styled from "styled-components";
import {Link as Links} from "react-router-dom";

export const Button = styled(Links)`
font-size:18px;
background-color:var(--color-light-blue);
width:200px;
height:50px;
color:${props=> props.black ? "var(--color-black)" : "var(--color-white)"};
display:flex;
justify-content:center;
align-items:center;
font-weight:600;
border:${props=> props.black ? "1px solid var(--color-black)" : "1px solid var(--color-light-blue)"};

&:hover{
    border:1px solid var(--color-light-blue);
    background:var(--color-white);
    color:var(--color-light-blue);
    transition:.5s;
}

@media only screen and (max-width:1200px){
    width:180px;
    font-size:17px;
}

@media only screen and (max-width:1024px){
    width:170px;
    font-size:16px;
}

@media only screen and (max-width:1024px){
    width:160px;
    font-size:15px;
    height:45px;
}

@media only screen and (max-width:800px){
    width:150px;
    font-size:14px;
    height:40px;
}

@media only screen and (max-width:660px){
    width:140px;
    font-size:13px;
    
}

@media only screen and (max-width:500px){
    width:120px;
    font-size:12px;
    height:35px;
    
}

@media only screen and (max-width:320px){
    width:100px;
    height:35px;
    font-size:11px;
    
}

`