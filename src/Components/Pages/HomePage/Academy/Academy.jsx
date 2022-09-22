import React, { useState } from 'react';
import { AcademyItems } from './AcademyItems';
import { Container } from '../../../../Styles/ContainerStyles';
import styles from './css/styles.module.css';
import media from './css/media.module.css';
import Popup from './Popup/Popup';


const Academy = () => {
  const [PopupContent, setPopupContent] = useState([]);
  const [TogglePopup, setTogglePopup] = useState(false);
  const ChangeContent = (i) => {
    setPopupContent([i]);
    setTogglePopup(!TogglePopup);
  };
  return (
    <section className={`${styles.container} ${media.container}`}>
      <Container>
        {
          AcademyItems.map((i) => {
            return (
              <div key={i.id} className={`${styles.blog} ${media.blog}`}>
                <h3 className={`${styles.title} ${media.title}`}>
                  {i.title}
                </h3>
                <p className={`${styles.text} ${media.text}`}>
                  {i.text}
                </p>
                <button className={`${styles.btn} ${media.btn}`}
                  onClick={() => ChangeContent(i)}>
                  {i.buttonText}
                </button>
              </div>
            )
          })
        }
      </Container>
      {TogglePopup && (<Popup obj={PopupContent} close={() => ChangeContent()} />)}
    </section>
  )
}

export default Academy