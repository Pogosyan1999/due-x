import React from 'react'
import { Title } from '../../../../Styles/TitleStyle';
import { Container } from '../../../../Styles/ContainerStyles';
import styles from './css/styles.module.css';
import media from './css/media.module.css';


const Students = () => {
    return (
        <section className={`${styles.container} ${media.container}`}>
            <div className={`${styles.blog1} ${media.blog1}`}>
                <div className={`${styles.rgba}  ${media.rgba}`}>
                    <Container>
                        <Title white text>
                            Student programm <br />for academy.
                        </Title>
                    </Container>
                </div>
            </div>
            <div className={`${styles.blog2} ${media.blog2}`}>
                <div className={`${styles.rgba}  ${media.rgba}`}>
                    <Container>
                        <Title white text>
                            Resarch lab<br />
                            AI | NANO | BIO
                        </Title>
                    </Container>
                </div>
            </div>
            <div className={`${styles.blog3} ${media.blog3}`}>
                <div className={`${styles.rgba}  ${media.rgba}`}>
                    <Container>
                        <Title white >
                            ReIncubation<br />
                            for students
                        </Title>
                    </Container>
                </div>
            </div>
        </section>
    )
}

export default Students