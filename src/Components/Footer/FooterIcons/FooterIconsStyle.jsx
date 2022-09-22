import styled from "styled-components";

export const IconContainer =styled.div`
width:10%;
display:flex;
justify-content:space-between;
align-items:center;

@media only screen and (max-width:768px){
    width:100%;
    justify-content:center;
}

`;

export const IconBlog = styled.div`
width:max-content;

@media only screen and (max-width:768px){
    margin:20px 10px;
}

`;

export const IconLink = styled.a`
font-size:16px;
color:var(--color-grey);
&:hover{
    color:var(--color-light-blue);
}

@media only screen and (max-width:800px){
    font-size:14px;
}


`