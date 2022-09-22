import styled from "styled-components";

export const TabList = styled.ul`
display:flex;
width:80%;
justify-content:space-between;
border-bottom:1px solid var(--color-white);
padding-bottom:30px;

@media screen and (max-device-width: 992px) {
  margin 0 auto;
  width:100%;
}
`;



export const TabItem = styled.li`
width:20%;
display:blog;
font-size: 14px;
color: rgba(255,255,255,0.65);
cursor: pointer;

@media screen and (max-device-width: 1024px) {
        font-size: 13px; 
        width:23%;
    }

    @media screen and (max-device-width: 992px) {
        width:14%;
        font-size:16px;
    }

    @media screen and (max-device-width: 900px) {
        width:16%;
        font-size:16px;
    }

    @media screen and (max-device-width: 800px) {
        font-size:15px;
    }

    @media screen and (max-device-width: 768px) {
        font-size:14px
    }

    @media screen and (max-device-width: 660px) {
        width:18%;
        font-size:13px
    }

    @media screen and (max-device-width: 600px) {
        font-size:12px
    }

    @media screen and (max-device-width: 575px) {
       width:20%;
    }

    @media screen and (max-device-width: 450px) {
        width:25%;
     }

     @media screen and (max-device-width: 360px) {
       font-size:11px;
     }

     @media screen and (max-device-width: 320px) {
        width:30%;
      }

   
    
`;

export const Content = styled.div`
width:100%;

`;

export const ContentItem = styled.div`
width:100%;

@media screen and (max-width: 992px) {
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
`