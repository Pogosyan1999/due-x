import React, { useState } from 'react';
import { NavElements } from './NavElements';
import { Nav, NavList, NavLink, NavItem, BurgerMenu } from './NavbarStyle';
import DropdownNavbar from './DropdownNavbar/DropdownNavbar';
import styles from './Navbar.module.css';
import HeaderButton from '../HeaderButton/HeaderButton';
import { AiOutlineBars } from 'react-icons/ai';


const Navbar = () => {
    const [dropdown, setDropDown] = useState(false);
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <BurgerMenu onClick={() => setToggle(!toggle)}>
                <AiOutlineBars />
            </BurgerMenu>
            <Nav className={`${styles.navbar} ${toggle ? styles.active : ''}`} >
                <NavList >
                    {
                        NavElements.map((item) => {
                            if (item.text === 'Companies') {
                                return (
                                    <NavItem key={item.id} className={dropdown ? styles.activeLink : ''} onClick={() => setDropDown(!dropdown)}>
                                        <NavLink to={item.url}>
                                            {item.text}
                                            {item.icon}
                                        </NavLink>
                                        <DropdownNavbar />
                                    </NavItem>
                                )
                            }
                        })
                    }
                    <NavItem>
                        <HeaderButton />
                    </NavItem>
                </NavList>
            </Nav>
        </>
    )
}

export default Navbar