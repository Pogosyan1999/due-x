import React, { useState } from 'react';
import { DropDownNavbarElements } from './DropdownNavbarElements';
import { DropDownNavLink, DropDownList, H6, DropdownItem } from './DropdownNavbarStyle';
import styles from '../Navbar.module.css';

const DropdownNavbar = () => {
    const [dropdown, setDropDown] = useState(false);
    return (
        <DropDownList className={dropdown ? styles.dropdown : ''}>
            <DropdownItem>
                <H6>M. M. Production</H6>
            </DropdownItem>
            {
                DropDownNavbarElements.map((item) => {
                    return (
                        <DropdownItem key={item.id} onClick={() => setDropDown(!dropdown)}>
                            <DropDownNavLink to={item.url}>
                                {item.text}
                            </DropDownNavLink>
                        </DropdownItem>
                    )
                })
            }
        </DropDownList>
    )
}

export default DropdownNavbar