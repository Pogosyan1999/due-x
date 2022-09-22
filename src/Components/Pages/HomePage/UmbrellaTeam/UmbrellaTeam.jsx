import React from 'react';
import { Container } from '../../../../Styles/ContainerStyles';
import { UmbrellaTeamItem } from './UmbrellaTeamItem';
import { Title } from '../../../../Styles/TitleStyle';
import styles from './css/styles.module.css';
import media from './css/media.module.css';

const UmbrellaTeam = () => {
    return (
        <section className={styles.container}>
            <Container>
                <h5 className={`${styles.minTitle} ${media.minTitle}`}>
                    Meet the experts
                </h5>
                <div className={`${styles.div} ${media.div}`}>        
                  <Title>Team of Umbrella</Title>
                </div>
            </Container>
            <Container>
                {
                    UmbrellaTeamItem.map((item) => {
                        return (
                            <div key={item.id} className = {`${styles.blog} ${media.blog}`}>
                                <div className={`${styles.imgContainer} ${media.imgContainer}`}>
                                    <img src={item.img} alt="img" />
                                    <div className={`${styles.socialContainer} ${media.socialContainer}`}>
                                        <a href={item.fbUrl} target = '_blank'rel="noreferrer noopener">
                                            {item.fb}
                                        </a>
                                        <a href={item.twUrl} target = '_blank'rel="noreferrer noopener">
                                            {item.tw}
                                        </a>
                                        <a href={item.inUrl} target = '_blank'rel="noreferrer noopener">
                                            {item.in}
                                        </a>
                                    </div>
                                </div>
                                <h3 className={`${styles.name} ${media.name}` }>{item.name}</h3>
                                <p className={`${styles.text} ${media.text}`}>{item.title}</p>
                            </div>
                        )
                    })
                }
            </Container>
        </section>
    )
}

export default UmbrellaTeam