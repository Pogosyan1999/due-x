import React from 'react';
import { Link } from 'react-router-dom';
import { LogoContainer, Img } from './LogoStyle';
import logo from './logo.svg';

const Logo = () => {
    return (
        <LogoContainer>
            <Link to='/'>
                <Img src={logo} alt='Due-x' />
            </Link>
        </LogoContainer>

    )
}

export default Logo