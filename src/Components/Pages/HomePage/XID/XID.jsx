import React from 'react';
import TabMenu from './TabMenu/TabMenu';
import styles from './css/styles.module.css';
import media from './css/media.module.css';

const XID = () => {
  return (
    <section className={`${styles.container} ${media.container}`}>
         <div className={`${styles.col1} ${media.col1}`}>
          <TabMenu/>
        </div>
        <div className={`${styles.col2} ${media.col2}`}></div>
    </section>
  )
}

export default XID