import React from 'react'
import { Container } from '../../../../Styles/ContainerStyles'
import { CardsItem } from './CardsItem';
import img from './img/dijitalID.svg';
import img2 from './img/card.svg';
import styles from './css/styles.module.css';
import media from './css/media.module.css';

const Card = () => {
  return (
    <section className={styles.container}>
        <Container>
            <div className={`${styles.col1} ${media.col1}`}>
                <div className={`${styles.imgContainer} ${media.imgContainer}`}>
                  <img src = {img} alt  = 'img'/>
                </div>
                <p className = {`${styles.text} ${media.text}`}>
                  <span className={styles.span}>
                    Dijital X-ID
                  </span> 
                  digital x-iD digital cards provide cardholders with a hassle-free, contactless and secure process for immediate access to a digital city, accounts, personal data, healthcare and education system through a mobile application or online system while waiting for a new or reissued physical card.
                </p>
                <ul className={styles.list}>
                    {
                        CardsItem.map((item)=>{
                          return(
                            <li className={`${styles.item} ${media.item}`} key = {item.id}>
                                <span>
                                   <img src = {item.src} alt = 'img'/>
                                </span>
                                <p>{item.text}</p>
                            </li>
                          )
                        })
                    }
                </ul>
            </div>
            <div className={`${styles.col2} ${media.col2}`}>
              <img src= {img2} alt = 'card'/>
            </div>
        </Container>
    </section>
  )
}

export default Card