import React from 'react';
import Slider from 'react-slick';
import { MinContainer, SlideBgContainer, SlideContainer, SlideImgContainer, Text } from './SlideStyle';
import { SlideItems } from './SlideItems';
import './Slide.css';
import { Title } from '../../../../Styles/TitleStyle';
import { Button } from '../../../../Styles/ButtonStyle';
import { Container } from '../../../../Styles/ContainerStyles';



const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <SlideContainer className='SliderContainer'>
            <Slider {...settings}>
                {
                    SlideItems.map((i) => {
                        return (
                            <SlideImgContainer className={i.clName} key={i.id}>
                                <SlideBgContainer>
                                    <Container>
                                        <MinContainer>
                                            <Title white >{i.title}</Title>
                                            <Text>{i.text}</Text>
                                            <Button to={i.url}>{i.linkText}</Button>
                                        </MinContainer>
                                    </Container>
                                </SlideBgContainer>
                            </SlideImgContainer>
                        )
                    })
                }
            </Slider>
        </SlideContainer>
    )
}

export default Slide;