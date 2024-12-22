import React from 'react';
import styles from './HowToConnect.module.scss';

const HowToConnect = () => {
    return (
        <div className={styles.howToConnectSection}>
            <div className={styles.topSection}>
                <h2 className={styles.title}>как подключить домашний <br/>интернет</h2>
                <p className={styles.subtitle}>легко — следуйте нашей инструкции и всё получится</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.stepsContainer}>
                <div className={styles.step}>
                    <span className={styles.stepNumber}>01</span>
                    <h3 className={styles.stepTitle}>подберите провайдера</h3>
                    <p className={styles.stepDescription}>и тарифы по адресу вашего дома</p>
                </div>
                <div className={styles.step}>
                    <span className={styles.stepNumber}>02</span>
                    <h3 className={styles.stepTitle}>отправьте заявку</h3>
                    <p className={styles.stepDescription}>на подключение прямо на сайте — менеджер свяжется с вами в течение 15 минут</p>
                </div>
                <div className={styles.step}>
                    <span className={styles.stepNumber}>03</span>
                    <h3 className={styles.stepTitle}>согласуйте дату и время</h3>
                    <p className={styles.stepDescription}>когда вам удобно провести интернет</p>
                </div>
            </div>
            <p className={styles.contactText}>
                или позвоните +7 (800) 425-19-99, <br />
                закажите <a href="#" className={styles.link}>обратный звонок</a>, напишите в <a href="#" className={styles.link}>вк</a> <br />
                или <a href="#" className={styles.link}>телеграм</a>
            </p>
        </div>
    );
};

export default HowToConnect;