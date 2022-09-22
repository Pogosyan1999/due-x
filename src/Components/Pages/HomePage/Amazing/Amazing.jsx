import React from 'react'
import { Container } from '../../../../Styles/ContainerStyles'
import { Title } from '../../../../Styles/TitleStyle';
import { AmazingItems } from './AmazingItems';
import styles from './css/Amazing.module.css'
import media from './css/AmazingMedia.module.css';

const Amazing = () => {
    return (
        <section className={styles.container}>
            <Container>
                <div className={ `${styles.titleContainer}  ${media.titleContainer}`}>
                    <Title text white>Trusted by amazing clients <br /> and brands since 2018.</Title>
                </div>
                {
                    AmazingItems.map((item)=>{
                        return(
                            <div key = {item.id} className = {`${styles.blog} ${media.blog}`}>
                                <img src = {item.src} alt = 'img'/>
                            </div>
                        )
                    })
                }
            </Container>
        </section>
    )
}

export default Amazing