import React from 'react';
import ReactPlayer from "react-player";


import { Blog1, Blog2, Blog3, Img,Col, MinContainer, TabContainer,Text,LinkContainer,Link,ArrowDiv,Number, ImgContainer, ImgContainer1, Title, VideoContainer} from './TabContentStyle'

const TabContent = (props) => {
  return (
        <TabContainer>
            <Blog1>
              <MinContainer>
                  <Col>
                     <Img src = {props.src1} alt = 'img'/>
                  </Col>
                  <Col>
                     <Img src = {props.src2} alt = 'img'/>
                  </Col>
                  <Col>
                     <Img src = {props.src3} alt = 'img'/>
                  </Col>
                  <Col>
                     <Img src = {props.src4} alt = 'img'/>
                  </Col>
              </MinContainer>
              <Text>{props.text}</Text>
              <LinkContainer>
                 <Link href = {props.url}>{props.link}</Link>
              </LinkContainer>
            </Blog1>
            <Blog2>
              <ArrowDiv>
                  <Number>{props.text1}</Number>
                  <Img src = {props.src5} alt = 'img'/>
              </ArrowDiv>
              <ImgContainer>
                 <Img src = {props.src6} alt = 'img'/>
              </ImgContainer>
              <ArrowDiv>
                  <Number>{props.text2}</Number>
                  <Img src = {props.src7} alt = 'img'/>
              </ArrowDiv>
              <ImgContainer1>
                  <Img src = {props.src8} alt = 'img'/>
              </ImgContainer1>
            </Blog2>
            <Blog3>
               <Title>BlackBot Power robots</Title>
               <VideoContainer className= 'videoContainer'>
                   <ReactPlayer url = {props.path} />
               </VideoContainer>
            </Blog3>
        </TabContainer>
  )
}

export default TabContent