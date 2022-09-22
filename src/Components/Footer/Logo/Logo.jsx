import React from 'react';
import {Img, FooterLogo} from './LogoStyle';
import img from './logo.svg'

const Logo = () => {
  return (
    <FooterLogo>
        <Img src = {img} alt = 'Logo'/>
    </FooterLogo>
  )
}

export default Logo