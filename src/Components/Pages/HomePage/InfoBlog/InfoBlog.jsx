import React from 'react';
import { Container } from '../../../../Styles/ContainerStyles';
import styles from './css/styles.module.css';
import media from './css/media.module.css';
import { InfoItems } from './InfoItems';

const InfoBlog = () => {
  return (
    <section className={styles.container}>
        <Container>
          {
            InfoItems.map((item)=>{
                return (
                    <div className={`${styles.blog} ${media.blog}`} key = {item.id}>
                        <h3>{item.title}</h3>
                        <p>
                            <a href = {item.url}>{item.text}</a>
                        </p>
                    </div>
                )
            })
          }
        </Container>
    </section>
  )
}

export default InfoBlog