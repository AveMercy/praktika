import React from 'react';
import styles from './Main.module.scss';


 const Main = () => {
    return (
        <div className={styles.container}>

            <div className={styles.mainscreen}>


            </div>

            <div className={styles.contact}>


            </div>
            <div className={styles.mail}>


            </div>
            <div className={styles.bg}>
                <div className={styles.bg1}></div>
            </div>
            <div className={styles.firstscreen}>
                <div className={styles.rectangle1}></div>


            </div>
            <div className={styles.application}>
                <div className={styles.rectangleleft}></div>
                <div className={styles.rectangleright}></div>
            </div>


            <div className={styles.ask}>
                <div className={styles.rectangleleftask}></div>
                <div className={styles.rectanglerightask}></div>

            </div>

            <div className={styles.secondscreen}>
                <div className={styles.rectangle2}></div>

            </div>

            <div className={styles.thirdscreen}>
                <div className={styles.rectangle3}></div>

            </div>


        </div>
    )
 }


export default Main;