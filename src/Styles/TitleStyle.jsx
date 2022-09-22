import styled from "styled-components";

export const Title = styled.h2`
width:max-content;
font-size:50px;
text-align:${props=> props.text ? "start"  :  "center"};
font-family: 'NimbusBold';
text-transform:uppercase;
font-weight:900;
color:${props=> props.white ? "var(--color-white)"  :  "var(--color-black)"};

@media only screen and (max-width:1200px){
    font-size:40px;
}

@media only screen and (max-width:1024px){
    font-size:35px;
}

@media only screen and (max-width:992px){
    font-size:30px;
}

@media only screen and (max-width:800px){
    font-size:22px;
}

@media only screen and (max-width:768px){
    text-align:center;
    margin: 0 auto;
}

@media only screen and (max-width:712px){
    font-size:20px;
}

@media only screen and (max-width:500px){
   font-size:16px;
}

@media only screen and (max-width:320px){
    font-size:15px;
 }
`