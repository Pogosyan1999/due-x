import styled from "styled-components";
import {Link as Links} from "react-router-dom";

export const ButtonLink = styled(Links)`
font-size:17px;
color:var(--color-white);
background:var(--color-light-blue);
padding: 10px 20px;
font-weight:700;
border:1px solid var(--color-light-blue);

&:hover{
    background:var(--color-white);
    color:var(--color-light-blue);
    transition:.5s;
}

@media only screen and (max-width:1138px){
    font-size:15px;
}

@media only screen and (max-width:1024px){
    font-size:14px;
}

@media only screen and (max-width:800px){
    font-size:13px;
}

@media only screen and (max-width:660px){
   display:block;
   width:100%;
   box-sizing:border-box;
}






`