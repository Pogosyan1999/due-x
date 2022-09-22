import React from 'react';
import { Container } from '../../../../Styles/ContainerStyles';
import styles from './css/styles.module.css';
import media from './css/media.module.css';

import img from './umbrella.svg';

const Umbrella = () => {
    return (
        <section className={styles.container}>
            <Container>
                <p className={`${styles.text} ${media.text}`}>
                    When DX was founded, we set out to make the tools the future would be built on. Tools designed to work on industrial scale. hyper-connected, just-in-time <a href='#' className={`${styles.link} ${media.link}`}>
                        From the steam engine.
                    </a>
                </p>
                <div className={`${styles.imgContainer} ${media.imgContainer}`}>
                    <img src={img} alt='umbrella' />
                </div>
            </Container>
        </section>
    )
}

export default Umbrella