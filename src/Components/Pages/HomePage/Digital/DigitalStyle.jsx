import styled from "styled-components";

export const Section = styled.section`
width:100%;
padding:50px 0;
background:var(--color-light-blue);
`;

export const Div = styled.div`
width:100%;

@media only screen and (max-width:768px){
   display:flex;
   justify-content:center;
`;

export const P = styled.p`
width:45%;
color:var(--color-black);
font-size:18px;
font-weight:400;
margin-bottom:50px;

@media only screen and (max-width:1180px){
    font-size:16px;
}

@media only screen and (max-width:1024px){
    font-size:15px;
}

@media only screen and (max-width:900px){
    width:50%;
}

@media only screen and (max-width:800px){
    width:60%;
}

@media only screen and (max-width:768px){
   margin: 50px auto;
   text-align:center;
}

@media only screen and (max-width:660px){
    font-size:14px;
    width:80%;
 }

 @media only screen and (max-width:500px){
    font-size:13px;
 }

 @media only screen and (max-width:360px){
    width:100%;
 }
`