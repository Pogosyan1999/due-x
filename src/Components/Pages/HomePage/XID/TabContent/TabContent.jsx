import React from 'react'
import { Title } from '../../../../../Styles/TitleStyle';
import {Button} from '../../../../../Styles/ButtonStyle';
import styles from './css/styles.module.css';
import media from './css/media.module.css';

const TabContent = (props) => {
  return (
    <>
    <h5 className={`${styles.title} ${media.title}`}>
      {props.text}
    </h5>
    <Title white text >{props.title}</Title>
    <p className={`${styles.text} ${media.text}`}>
      {props.text1}
    </p>
    <div>
      <Button to = {props.url}>{props.link}</Button>
    </div>
    </>
  )
}

export default TabContent