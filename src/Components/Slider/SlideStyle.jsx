import styled from "styled-components";

export const Blog = styled.div`
width:100%;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #3b67b4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 120px 50px;
    box-sizing:border-box;

    @media only screen and (max-width:900px){
       padding: 100px 0
     }

     @media only screen and (max-width:660px){
       padding:50px 0;
      }
`;

export const ContainerImg = styled.div`
width: 250px;
height: 250px;

@media only screen and (max-width:1200px){
    width:220px;
    height:220px;
}

@media only screen and (max-width:1024px){
    width:200px;
    height:200px;
}

@media only screen and (max-width:1024px){
    width:180px;
    height:180px;
 }

 @media only screen and (max-width:800px){
    width:150px;
    height:150px;
  }

  @media only screen and (max-width:660px){
    width:130px;
    height:130px;
  }

  @media only screen and (max-width:500px){
    width:110px;
    height:110px;
  }

`;

export const Img = styled.img`
width:100%;
height:100%;
`;

export const SlideTitle = styled.h3`
font-size: 22px;
color:var(--color-white);
padding-top: 30px;
text-transform: capitalize;

@media only screen and (max-width:1200px){
    font-size:20px;
}

@media only screen and (max-width:1024px){
   font-size:16px;
}

@media only screen and (max-width:992px){
    font-size:15px;
 }

 @media only screen and (max-width:900px){
    font-size:18px;
 }

 @media only screen and (max-width:500px){
    font-size:16px;
 }
`;

export const P = styled.p`
font-size: 16px;
text-align: center;
color:var(--color-white);
margin-top: 20px;

@media only screen and (max-width:1180px){
    font-size:15px;
}

@media only screen and (max-width:1024px){
    font-size:14px;
 }

 @media only screen and (max-width:992px){
    font-size:13px;
 }

 @media only screen and (max-width:900px){
    font-size:15px;
    width:80%;
 }

 @media only screen and (max-width:660px){
    font-size:13px
  }

  @media only screen and (max-width:360px){
    font-size:12px
  }
`

