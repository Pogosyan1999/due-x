import React from 'react';
import { Container } from '../../../../Styles/ContainerStyles';
import { Title } from '../../../../Styles/TitleStyle';
import { ContactItems } from './ContactItems';
import styles from './css/styles.module.css';
import media from './css/media.module.css';

const Contact = () => {
    return (
        <section className={`${styles.container} ${media.container}`}>
            <div className={`${styles.titleContainer} ${media.titleContainer}`}>
                <Title>How To Apply</Title>
            </div>
            <Container>
                {
                    ContactItems.map((i) => {
                        return (
                            <div key={i.id} className = {`${styles.blog} ${media.blog}`}>
                                <p className = {`${styles.text} ${media.text}`}>
                                    {i.text}
                                </p>
                                <a href={i.url}>{i.link}</a>
                            </div>
                        )
                    })
                }
            </Container>
        </section>
    )
}

export default Contact