import React, { useState } from "react";
import TabContent from "../TabContent/TabContent";
import styles from './css/styles.module.css';
import media from './css/media.module.css';



const TabMenu = () => {
    const [active, setActive] = useState(1);
    const toogleTab = (index) => {
        setActive(index);
    };

    return (
        <>
            <ul className={`${styles.list} ${media.list}`}>
                <li className={` ${styles.item} ${media.item}
                 ${active === 1 ? styles.activeItem : ''}` }
                    onClick={() => toogleTab(1)}>
                    At is X-ID  Programm
                </li>
                <li className={` ${styles.item} ${media.item}
                 ${active === 2 ? styles.activeItem : ''}`}
                    onClick={() => toogleTab(2)}>
                    How to apply X-ID Cards
                </li>
                <li className={` ${styles.item} ${media.item}
                 ${active === 3 ? styles.activeItem : ''}`}
                    onClick={() => toogleTab(3)}>
                    X World MemberShip
                </li>
            </ul>
            <div className={styles.contentContainer}>
                <div className={` ${styles.contentBlog} ${media.contentBlog} 
                   ${active === 1 ? styles.contentActive : styles.content}`}>
                    <TabContent
                        text="Are ready to join"
                        title="X-ID Programm"
                        text1="DX Horizon is incubator program for Generation. we set out to make the tools the future would be built on. Tools designed to work on industrial scale. hyper-connected."
                        url="#"
                        link='Get XID'
                    />
                </div>
                <div className={` ${styles.contentBlog} ${media.contentBlog} 
                   ${active === 2 ? styles.contentActive : styles.content}`}>
                    <TabContent
                        text="Are ready to join"
                        title="X-ID Cards"
                        text1="DX Horizon is incubator program for Generation. we set out to make the tools the future would be built on. Tools designed to work on industrial scale. hyper-connected."
                        url="#"
                        link='Get XID'
                    />
                </div>
                <div className={` ${styles.contentBlog} ${media.contentBlog} 
                   ${active === 3 ? styles.contentActive : styles.content}`}>
                    <TabContent
                        text="Are ready to join"
                        title="X-ID MemberShip"
                        text1="DX Horizon is incubator program for Generation. we set out to make the tools the future would be built on. Tools designed to work on industrial scale. hyper-connected."
                        url="#"
                        link='Get XID'
                    />
                </div>
            </div>
        </>
    )
}

export default TabMenu