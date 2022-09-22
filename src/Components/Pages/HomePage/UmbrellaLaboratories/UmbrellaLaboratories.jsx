import React from "react";
import styles from "./css/styles.module.css";
import media from "./css/media.module.css";
import { Container } from "../../../../Styles/ContainerStyles";
import { Title } from "../../../../Styles/TitleStyle";
import { Button } from "../../../../Styles/ButtonStyle";

const UmbrellaLaboratories = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.col1} ${media.col1}`}>
        <Container>
          <div className= {`${styles.titleContainer} ${media.titleContainer}`}>
          <Title>Umbrella X</Title>
          </div>
          <h2 className={`${styles.title} ${media.title}`}>Laboratories</h2>
          <p className={`${styles.text} ${media.text}`}>
            When DX was founded, we set out to make the tools the future would
            be built on. Tools designed to work on industrial scale.
            hyper-connected, just-in-time global economy. The kind that makes
            awesome, amazing, blow-your-mind things possible. From the steam
            engine.
          </p>
          <Button to="#">Learn More</Button>
        </Container>
      </div>
      <div className={`${styles.col2} ${media.col2}`}></div>
    </section>
  );
};

export default UmbrellaLaboratories;
