import React from 'react';
import styles from './Question.module.scss';

const Question = () => {
    return (
        <div className={styles.formSection}>
            <div className={styles.leftContainer}>
                <h2 className={styles.title}>остались вопросы?</h2>
                <p className={styles.subtitle}>оставьте заявку и наш менеджер свяжется с вами в удобное время</p>
                <div className={styles.formContainer}>
                    <div className={styles.inputWrapper}>
                        <input type="text" placeholder="как вас зовут?" className={styles.input} />
                    </div>
                    <div className={styles.phoneButtonContainer}>
                        <div className={styles.phoneInputWrapper}>
                            <input type="tel" placeholder="+7 (999) 351-13-12" className={styles.phoneInput} />
                        </div>
                        <div className={styles.selectTimeButton}>
                            в ближайшее время
                            <span className={styles.arrowDown}>∨</span>

                        </div>

                        <button className={styles.submitButton}>отправить заявку <span className={styles.arrow}>→</span></button>
                    </div>
                </div>
                <p className={styles.agreement}>нажимая на поиск я соглашаюсь с <a href="#" className={styles.link}>условиями</a> <br/>обработки
                    персональных данных</p>
            </div>
            <div className={styles.rightContainer}>
                <p className={styles.contactText}>или позвоните +7 (800) 425-19-99, <br/>
                    закажите обратный звонок,<br/>
                    напишите в <a href='#' className={styles.link}>вк</a> или <a href='#'
                                                                                 className={styles.link}>телеграм</a>
                </p>
            </div>
        </div>
    );
};

export default Question;