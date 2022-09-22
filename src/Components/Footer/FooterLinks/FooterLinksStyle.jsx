import styled from "styled-components";

export const Text = styled.p`
width:50%;
text-align:center;
font-size:16px;
font-weight:400;
color:var(--color-grey);

@media only screen and (max-width:1138px){
    font-size:15px;
}

@media only screen and (max-width:1024px){
    font-size:14px;
}

@media only screen and (max-width:992px){
    font-size:13px;
}

@media only screen and (max-width:800px){
    width:70%;
    font-size:12px;
}

@media only screen and (max-width:768px){
     margin:0 auto;
     font-size:14px;
}

@media only screen and (max-width:660px){
    font-size:13px;
}

@media only screen and (max-width:600px){
    font-size:12px;
}

@media only screen and (max-width:575px){
    width:100%;
}

@media only screen and (max-width:320px){
    font-size:11px;
}
`;