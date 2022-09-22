import styled from "styled-components";

export const SlideContainer = styled.div`
width:100%;

`;

export const SlideImgContainer = styled.div`
width:100%;
`

export const SlideBgContainer = styled.div`
width:100%;
height:600px;
background: linear-gradient(
    78.61deg,
    rgba(7, 17, 38, 0.7) 48.03%,
    rgba(0, 0, 0, 0) 94.33%
  );

  @media only screen and (max-width:900px){
    height:400px;
}

@media only screen and (max-width:500px){
    height:300px;
}

`;

export const MinContainer = styled.div`
width:50%;

@media only screen and (max-width:900px){
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:0 50px;
}

@media only screen and (max-width:500px){
    padding:0;
}
`
export const Text = styled.p`
 color:var(--color-white);
 font-size:18px;
 font-weight:400;
 padding-bottom:50px;

 @media only screen and (max-width:1280px){
    font-size:17px;
 }

 @media only screen and (max-width:1180px){
    font-size:16px;
 }

 @media only screen and (max-width:1024px){
    font-size:15px;
 }

 @media only screen and (max-width:992px){
    font-size:14px;
 }

 @media only screen and (max-width:900px){
    text-align:center;
 }

 @media only screen and (max-width:768px){
    font-size:13px;
 }

 @media only screen and (max-width:660px){
    font-size:13px;
 }

 @media only screen and (max-width:500px){
    font-size:11px;
    padding-bottom:10px;
 }

 
`;