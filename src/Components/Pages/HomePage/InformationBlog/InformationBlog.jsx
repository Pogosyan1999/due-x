import React from 'react'
import styles from './css/styles.module.css';
import media from './css/media.module.css';
import { Container } from '../../../../Styles/ContainerStyles';
import { InfoItems } from './InfoItems';

const InformationBlog = () => {
  return (
   <section className={styles.container}>
     <Container>
          {
            InfoItems.map((item)=>{
                return(
                    <div className={`${styles.blog} ${media.blog}`} key = {item.id}>
                        <div className={`${styles.imgContainer} ${media.imgContainer}`}>
                            <img src = {item.src} alt = "img"/>
                        </div>
                        <h3 className={`${styles.title} ${media.title}`}>{item.title}</h3>
                        <p className={`${styles.text} ${media.text}`}>{item.text}</p>
                    </div>
                )
            })
          }
     </Container>
   </section>
  )
}

export default InformationBlog