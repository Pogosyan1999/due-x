import styled from "styled-components";

export const P = styled.p`
width:100%;
text-align:center;
color:var(--color-grey);
font-size:14px;

@media only screen and (max-width:1024px){
    font-size:13px;
}

@media only screen and (max-width:360px){
    font-size:11px;
}
`