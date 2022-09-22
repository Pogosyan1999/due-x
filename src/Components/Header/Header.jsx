import React from 'react';
import { Container } from '../../Styles/ContainerStyles';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <header className='header'>
            <Container>
                <Logo />
                <Navbar/>
            </Container>
        </header>
    )
}

export default Header