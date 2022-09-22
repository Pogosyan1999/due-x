import React from 'react';
import { Container } from '../../../../Styles/ContainerStyles';
import { BrandItems } from './BrandItems';
import styles from './css/Brand.module.css';
import media from './css/BrandMedia.module.css';


const Brand = () => {
  return (
     <section className={styles.container} >
       <Container>
           {
            BrandItems.map((item)=>{
                return(
                    <div key = {item.id} className = {`${styles.blog} ${media.blog}`}>
                        <img src = {item.src} alt = "img"/>
                    </div>
                )
            })
           }
       </Container>
     </section>
  )
}

export default Brand