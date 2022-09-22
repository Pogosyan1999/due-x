import React, { useState } from 'react'
import { Container } from '../../../../../../Styles/ContainerStyles'
import TabContent from '../TabContent/TabContent';
import img1 from './img/TJCC203.png';
import img2 from './img/xbotMark.png';
import img3 from './img/arrow.png';
import img4 from './img/removebgpreview1.png';
import img5 from './img/removebgpreview2.png';
import styles from './css/styles.module.css';
import media from './css/media.module.css';



const TabMenu = () => {
    const [active, setActive] = useState(1);

    const toogleTab = (index) => {
        setActive(index);
    }
    return (
        <Container>
            <div className={styles.container}>
                <ul className={`${styles.list}`}>
                    <li className={` item ${media.item} ${media.activeItem}  
                    ${active === 1 ? styles.activeItem : styles.item}`}
                        onClick={() => toogleTab(1)}>
                        <span className={`${styles.span} ${media.span}`}></span>
                        <p className={`${styles.text} ${media.text}`}>
                            SkyAgro <br /> Agro drones
                        </p>
                    </li>
                    <li className={` item ${media.item} ${media.activeItem}  
                         ${active === 2 ? styles.activeItem : styles.item}`}
                        onClick={() => toogleTab(2)}>
                        <span className={`${styles.span} ${media.span}`}></span>
                        <p className={`${styles.text} ${media.text}`}>
                            NanoBot<br />Clean robots
                        </p>
                    </li>
                    <li className={` item ${media.item} ${media.activeItem}   
                    ${active === 3 ? styles.activeItem : styles.item}`}
                        onClick={() => toogleTab(3)}>
                        <span className={`${styles.span} ${media.span}`}></span>
                        <p className={`${styles.text} ${media.text}`}>
                            BioBots<br />Hybrid of human
                        </p>
                    </li>
                    <li className={` item ${media.item} ${media.activeItem}  
                     ${active === 4 ? styles.activeItem : styles.item}`}
                        onClick={() => toogleTab(4)}>
                        <span className={`${styles.span} ${media.span}`}></span>
                        <p className={`${styles.text} ${media.text}`}>
                            xJet<br />Delivery drons
                        </p>
                    </li>
                </ul>
                <div className={styles.border}></div>
            </div>
            <div className={` blog ${active === 1 ? styles.contentActive : styles.content}`}>
                <TabContent
                    src1={img1}
                    src2={img2}
                    src3={img1}
                    src4={img2}
                    text='When DX was founded, we set out to make the tools the future would be built on. Tools designed to work on industrial scale. hyper-connected, just-in-time global economy. The kind that makes awesome, amazing, blow-your-mind things possible. From the steam engine.'
                    url='#'
                    link='Support Project'
                    text1='1.60cm'
                    src5={img3}
                    src6={img4}
                    src7={img3}
                    text2='1,40cm'
                    src8={img5}
                    path='https://www.youtube.com/watch?v=w7ejDZ8SWv8'

                />
            </div>
            <div className={` blog ${active === 2 ? styles.contentActive : styles.content}`}>
                <TabContent
                    src1={img1}
                    src2={img2}
                    src3={img1}
                    src4={img2}
                    text='When DX was founded, we set out to make the tools the future would be built on. Tools designed to work on industrial scale. hyper-connected, just-in-time global economy. The kind that makes awesome, amazing, blow-your-mind things possible. From the steam engine.'
                    url='#'
                    link='Support Project'
                    text1='1.60cm'
                    src5={img3}
                    src6={img4}
                    src7={img3}
                    text2='1,40cm'
                    src8={img5}
                    path='https://www.youtube.com/watch?v=w7ejDZ8SWv8'

                />
            </div>
            <div className={` blog ${active === 3 ? styles.contentActive : styles.content}`}>
                <TabContent
                    src1={img1}
                    src2={img2}
                    src3={img1}
                    src4={img2}
                    text='When DX was founded, we set out to make the tools the future would be built on. Tools designed to work on industrial scale. hyper-connected, just-in-time global economy. The kind that makes awesome, amazing, blow-your-mind things possible. From the steam engine.'
                    url='#'
                    link='Support Project'
                    text1='1.60cm'
                    src5={img3}
                    src6={img4}
                    src7={img3}
                    text2='1,40cm'
                    src8={img5}
                    path='https://www.youtube.com/watch?v=w7ejDZ8SWv8'

                />
            </div>
            <div className={` blog ${active === 4 ? styles.contentActive : styles.content}`}>
                <TabContent
                    src1={img1}
                    src2={img2}
                    src3={img1}
                    src4={img2}
                    text='When DX was founded, we set out to make the tools the future would be built on. Tools designed to work on industrial scale. hyper-connected, just-in-time global economy. The kind that makes awesome, amazing, blow-your-mind things possible. From the steam engine.'
                    url='#'
                    link='Support Project'
                    text1='1.60cm'
                    src5={img3}
                    src6={img4}
                    src7={img3}
                    text2='1,40cm'
                    src8={img5}
                    path='https://www.youtube.com/watch?v=w7ejDZ8SWv8'

                />
            </div>
        </Container>
    )
}

export default TabMenu