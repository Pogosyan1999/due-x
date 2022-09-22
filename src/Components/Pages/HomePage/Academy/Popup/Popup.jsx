import React from 'react';
import { GrClose } from 'react-icons/gr';
import { Button } from '../../../../../Styles/ButtonStyle';
import styles from './css/styles.module.css';
import media from './css/media.module.css';


const Popup = (props) => {

    return (
        <div onClick={props.close}
            className={`${styles.container} ${media.container}`}>
            <div onClick={(e) => e.stopPropagation()}
                className={`${styles.minContainer} ${media.minContainer}`}>
                <button onClick={props.close}
                    className={`${styles.closeBtn} ${media.closeBtn}`}>
                    <GrClose />
                </button>
                {
                    props.obj.map((i) => {
                        return (
                            <div key={i.id}>
                                <h3 className={`${styles.title} ${media.title}`}>
                                    {i.title}
                                </h3>
                                <div className={`${styles.flex} ${media.flex}`}>
                                <div className={`${styles.imgContainer} ${media.imgContainer}`}>
                                        <img src={i.img} alt='img' />
                                    </div>
                                    <div className={`${styles.contentContainer} ${media.contentContainer}`}>
                                        <p className={`${styles.text} ${media.text}`}>
                                            {i.PopupText}
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.btnContainer}>
                                    <Button auto="true" to={i.url}>{i.linkText}</Button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Popup