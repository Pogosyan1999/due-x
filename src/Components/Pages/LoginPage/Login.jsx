import React from "react";
import { Container } from '../../../Styles/ContainerStyles';
import styles from './css/styles.module.css';
import media from './css/media.module.css';
import Slide from '../../Slider/Slide';
import LoginForm from './LoginForm/LoginForm';

const Login = () => {
  return (
    <section className={`${styles.container} LoginContainer`}>
      <div className={`${styles.col1} ${media.col1}`}>
        <Slide />
      </div>
      <div className={`${styles.col2} ${media.col2}`}>
        <Container>
          <LoginForm/>
        </Container>
      </div>
    </section>
  );
};

export default Login;
