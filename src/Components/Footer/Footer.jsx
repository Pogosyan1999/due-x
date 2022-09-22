import React from 'react';
import { Container } from '../../Styles/ContainerStyles';
import FooterIcons from './FooterIcons/FooterIcons';
import FooterLink from './FooterLinks/FooterLink';
import { FooterBorder } from './FooterStyle';
import  FooterText from './FooterText/FooterText';
import Logo from './Logo/Logo';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Logo />
        <FooterLink />
        <FooterIcons />
      </Container>
      <FooterBorder />
      <FooterText />
    </footer>
  )
}

export default Footer