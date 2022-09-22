import React from 'react';
import Slider from 'react-slick';
import { SlideItems } from './SlideItems';
import { Blog, Container, ContainerImg, Img, P, SlideTitle } from './SlideStyle';
import './Slide.css';


const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
      };
  return (
     <Slider {...settings}>
         {SlideItems.map((item) => {
        return (
          <Blog key={item.id}>
            <Container>
              <ContainerImg>
                <Img src={item.src} alt="img" />
              </ContainerImg>
              <SlideTitle>{item.title}</SlideTitle>
              <P>{item.text}</P>
            </Container>
          </Blog>
        );
      })}
     </Slider>
  )
}

export default Slide