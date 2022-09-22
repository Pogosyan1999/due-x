import styled from "styled-components";

export const Button = styled.button`
  display: block;
  margin: 40px auto;
  border-radius:5px;
  width: 300px;
  height: 45px;
  background: var(--color-light-blue);
  color: #fff;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  border: 1px solid var(--color-light-blue);
  box-sizing: border-box;
  &:hover {
    background: var(--color-white);
    color: var(--color-light-blue);
    transition: 0.5s;
  }

 
  

  @media only screen and (max-width: 1200px) {
     width:280px;
  }

  @media only screen and (max-width: 1024px) {
    width:250px;
    font-size:15px;
 }

 @media only screen and (max-width: 768px) {
  width:200px;
  font-size:14px;
  height:40px
}

@media only screen and (max-width: 500px) {
  width:100%;
  font-size:14px;
  height:40px
}
`;
