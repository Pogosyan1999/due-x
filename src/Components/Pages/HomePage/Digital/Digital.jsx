import React from 'react'
import { Button } from '../../../../Styles/ButtonStyle'
import { Container } from '../../../../Styles/ContainerStyles'
import { Title } from '../../../../Styles/TitleStyle'
import styles from './css/styles.module.css';
import media from './css/media.module.css';

const Digital = () => {
  return (
    <section className={styles.container}>
      <Container>
        <div className={`${styles.div} ${media.div}`}>
          <Title text>
            CONNECT TO<br /> DIGITAL WORLD
          </Title>
        </div>
        <p className={`${styles.text} ${media.text}`}>
          Built on the shop floor, forged in innovation. See how Plex is changing the way manufacturers make things.
        </p>
        <div className={`${styles.div} ${media.div}`}>
          <Button to = "#" black = "true">Connect now</Button>
        </div>
      </Container>
    </section>
  )
}

export default Digital