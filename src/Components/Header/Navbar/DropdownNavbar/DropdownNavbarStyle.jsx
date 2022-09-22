import styled from "styled-components";
import {Link as Links} from 'react-router-dom';

export const DropDownList = styled.ul`
display: none;
background: #f9f9f9;
box-shadow: 10px 10px 50px 10px rgba(0, 0, 0, 0.1);
border-radius: 5px;
padding: 10px;
position: absolute;
top:40px;
z-index: 100;


@media only screen and (max-width: 768px){
  position:relative;
  top:30px;
  box-shadow:none;
  background: #fff;

}

`;

export const H6 = styled.h6`
color:var(--color-black);
font-size:11px;
font-weight:600;
padding:0;
margin:0;

@media only screen and (max-width: 768px){
  font-size:13px;
}


`;

export const DropdownItem = styled.li`
 border-bottom:1px solid #eee;
 padding:7px 0;

`;

export const DropDownNavLink = styled(Links)`
color:#7d7d7d;
font-size:12px;
display:block;
font-weight:400;
&:hover{
    color:#3a3a3a;
    transition:.5s;
}

@media only screen and (max-width: 768px){
  font-size:15px;
}

@media only screen and (max-width: 660px){
  font-size:13px;
}

`;
