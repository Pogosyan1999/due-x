import styled from "styled-components";
import {Link as Links} from 'react-router-dom';

export const Nav =styled.nav`
width:90%;
display:flex;
align-items:center;
justify-content:end;
position:relative;

@media only screen and (max-width:768px){
   width:100%;
   display:none;
   background:var(--color-white);
   margin-top:20px;
}

`

export const NavList = styled.ul`
width:max-content;
display:flex;


@media only screen and (max-width:768px){
    flex-direction:column;
    position:relative;
    width:100%;
 
}

`;

export const NavItem = styled.li`
 margin-left:30px;


 @media only screen and (max-width:768px){
     display:block;
     width:100%;
     text-align:center;
     margin:20px 0;
     
    
}
`;



export const NavLink = styled(Links)`
font-weight:600;
display:flex;
align-items:center;
font-size:16px;
color:var(--color-black);

&:hover{
    color:var(--color-light-blue);
    transition:.5s;
}

@media only screen and (max-width:1180px){
    font-size:15px;
}

@media only screen and (max-width:1024px){
    font-size:14px;
}

@media only screen and (max-width:1024px){
    font-size:13px;
}

@media only screen and (max-width:768px){
    display:block;
    text-align:center;
    
}
`;


export const BurgerMenu = styled.button`
width:max-content;
border:none;
cursor:pointer;
outline:none;
background:none;
font-size:25px;
display:none;
position:absolute;
right:20px;
top:35px;


@media only screen and (max-width:768px){
    display:block;
    top:25px;
    
}


@media only screen and (max-width:575px){
    font-size:20px;
    top:25px;
    
}

@media only screen and (max-width:360px){
    top:20px;
    right:10px;
    
}

`

