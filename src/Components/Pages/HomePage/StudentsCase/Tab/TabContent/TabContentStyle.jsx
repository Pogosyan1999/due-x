import styled from "styled-components";
export const TabContainer = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
`;

export const Blog1 = styled.div`
width:40%;
display:flex;
flex-wrap:wrap;

@media only screen and (max-width:900px){
    width:100%;
    margin-bottom:80px;
  }
`;


export const Blog2 = styled.div`
width:60%;
display:flex;
flex-wrap:wrap;
justify-content:space-between;

@media only screen and (max-width:900px){
    width:100%;
  }
`

export const MinContainer = styled.div`
width:100%;
display:flex;
justify-content:space-between;
flex-wrap:wrap;
`;

export const Col = styled.div`
width:40%;
height:max-content;

@media only screen and (max-width:1180px){
  margin-bottom:20px;
 }

 @media only screen and (max-width:900px){
    width:22%;
   }

   @media only screen and (max-width:768px){
   width:20%;
  }

  @media only screen and (max-width:660px){
    width:34%;
    margin:0 auto 20px;
   }

  
`;

export const Img = styled.img`
width:100%; 


`;

export const Text = styled.p`
 font-size:16px;
 color:var(--color-light-grey);
 height:max-content;
padding-top:30px;

 @media only screen and (max-width:1180px){
    font-size:15px;
    padding-top:0px;
 
 }

 @media only screen and (max-width:1024px){
    font-size:14px;

 }

 @media only screen and (max-width:900px){
    text-align:center;
    margin-top:50px;
   }

   @media only screen and (max-width:800px){
     font-size:13px;
   }

   @media only screen and (max-width:640px){
    font-size:12px;
   }
   @media only screen and (max-width:360px){
   font-size:11px
 
    }
` 


export const LinkContainer = styled.div`
width:100%;
margin-top:25px;

@media only screen and (max-width:1180px){
    margin-top:-50px;
 }

 @media only screen and (max-width:900px){
   margin-top:10px;
   text-align:center;
   }
`

export const Link = styled.a`
font-size:16px;
color:var(--color-light-blue);
text-decoration: underline;


@media only screen and (max-width:1180px){
    font-size:15px;

 }

 @media only screen and (max-width:1024px){
    font-size:14px;
 
 }

 @media only screen and (max-width:800px){
   font-size:13px;
   }

   @media only screen and (max-width:640px){
   font-size:12px;
  }

  @media only screen and (max-width:360px){
   font-size:11px;
 
    }

`;

export const ArrowDiv  = styled.div`
width:5%;
height:auto;
display:flex;

@media only screen and (max-width:992px){
    height:80%;
  }

  @media only screen and (max-width:660px){
    height:60%;
  }

  @media only screen and (max-width:600px){
    height:50%;
  }

  @media only screen and (max-width:500px){
     display:none;
   }

 

`

export const Number = styled.p`
transform:rotate(-90deg);
margin-top:60px;
font-size:18px;
color:var(--color-light-grey);
height:0;

@media only screen and (max-width:1180px){
    font-size:15px;

 }

 @media only screen and (max-width:800px){
    font-size:14px;
   }

   @media only screen and (max-width:660px){
    font-size:13px;
  }


`;

export const ImgContainer = styled.div`
width:40%;
margin-top:100px;
margin-left:60px;

@media only screen and (max-width:1180px){
   margin-left:40px;
 }

 @media only screen and (max-width:1024px){
    width:35%;
  }

  @media only screen and (max-width:500px){
    width:70%;
    margin:0 auto;
    
   }

`;

export const ImgContainer1 = styled.div`
width:40%;
padding-left:50px;
box-sizing:border-box;
padding-top:100px;

@media only screen and (max-width:1180px){
    width:40%;

 }

 @media only screen and (max-width:1024px){
    width:35%;

 }

 @media only screen and (max-width:660px){
   padding-top:50px;
  }

  @media only screen and (max-width:500px){
   width:70%;
   margin:-150px auto 150px;

   }
`;

export const Blog3 = styled.div`
width:70%;
margin:50px auto 0;

@media only screen and (max-width:900px){
    width:100%;

 }

 @media only screen and (max-width:660px){
    margin-top:-150px;
  }

`;

export const Title = styled.h4`
font-size:25px;
font-weight:900;
font-family:'NimbusBold';
color:var(--color-light-blue);

@media only screen and (max-width:1180px){
    font-size:22px;

 }

 @media only screen and (max-width:900px){
   text-align:center;

 }
 @media only screen and (max-width:800px){
    font-size:20px;
 }

 @media only screen and (max-width:660px){
   font-size:18px;
  }

  @media only screen and (max-width:500px){
   font-size:16px;
  }

  @media only screen and (max-width:360px){
    font-size:14px;
 
    }


`;


export const VideoContainer = styled.div`
width:100%;
`







