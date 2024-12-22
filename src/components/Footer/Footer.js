import React from 'react';
import styles from './Footer.module.scss';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.leftSide}>
                    <div className={styles.allTariffs}>
                        все<br/> тарифы
                        <div className={styles.footerLine}></div>
                    </div>
                </div>
                <div className={styles.centerSide}>
                    <div className={styles.phoneNumber}>
                        +7 (800) 425-19-99
                        <div className={styles.connectionQuestion}>
                            По вопросам подключения
                        </div>
                    </div>

                    <div className={styles.links}>
                        <a href='#' className={styles.link}> номера технической поддержки <span className={styles.icon}>🎧</span></a>
                        <a href='#' className={styles.link}> обратная связь <span className={styles.icon}>✉</span></a>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <button className={styles.submitButton}>отправить заявку <span className={styles.arrow}>→</span></button>
                    <p className={styles.info}>Информация на сайте носит справочный характер<br/> и не является публичной офертой</p>
                </div>

            <div className={styles.bottomSide}>
                <p className={styles.copyRight}>©2023 Симка.онлайн.ru</p>
                <a className={styles.copyRightLink} href='#'>Политика обработки персональных данных</a>
                <a className={styles.copyRightLink} href='#'>Соответствие требованиям ФЗ 152</a>
                <a className={styles.copyRightLink} href='#'>Блог</a>

                <div className={styles.socialIcons}>
                    <a href='#' className={styles.socialLink}>
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.80382 11.5C3.65391 11.5 0.146159 7.37087 0 0.5H3.08057C3.18176 5.54304 5.45279 7.67918 7.25166 8.11962V0.5H10.1525V4.84935C11.9289 4.66216 13.795 2.68018 14.4246 0.5H17.3253C16.8419 3.18669 14.8181 5.16867 13.379 5.98348C14.8181 6.64414 17.123 8.37287 18 11.5H14.8069C14.1211 9.40791 12.4123 7.78929 10.1525 7.56907V11.5H9.80382Z"
                                fill="#0D214B"/>
                        </svg>
                    </a>
                    <a href='#' className={styles.socialLink}>
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.09992 5.59642C5.39488 3.76182 8.25885 2.55233 9.69185 1.96797C13.7834 0.299503 14.6335 0.00967244 15.1877 0.000102042C15.3095 -0.00200286 15.5821 0.0276104 15.7586 0.168038C15.9076 0.286613 15.9486 0.44679 15.9683 0.559212C15.9879 0.671633 16.0123 0.927733 15.9929 1.12784C15.7712 3.41185 14.8118 8.95454 14.3237 11.5127C14.1172 12.5951 13.7105 12.958 13.3169 12.9936C12.4613 13.0707 11.8116 12.4392 10.9829 11.9066C9.68624 11.0733 8.95369 10.5545 7.69503 9.74133C6.24043 8.80154 7.18339 8.28502 8.01236 7.44087C8.22931 7.21995 11.999 3.8583 12.0719 3.55334C12.0811 3.5152 12.0895 3.37304 12.0034 3.29797C11.9172 3.2229 11.7901 3.24857 11.6983 3.26899C11.5683 3.29792 9.4968 4.64029 5.48389 7.29607C4.89591 7.69192 4.36333 7.88479 3.88616 7.87468C3.36012 7.86354 2.34822 7.58307 1.59598 7.34334C0.673328 7.04929 -0.0599784 6.89383 0.00387615 6.39445C0.0371355 6.13434 0.402482 5.86833 1.09992 5.59642Z"
                                fill="#0D214B"/>
                        </svg>
                    </a>
                </div>
                <div className={styles.makeLink}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="#FF3A62"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M24 20.5V22.5H9V20.5H24ZM8 20.5V22.5H6V20.5H8ZM25 20.5L27 21.5L25 22.5V20.5Z"
                              fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M18.418 18.5L19.751 20.5H18.501L17.168 18.5H18.418ZM15.5 17.5L17.5 20.5H16.25L14.25 17.5H15.5ZM19.4587 8.5C19.9668 8.5 20.2285 8.93183 20.3316 9.22418L20.448 9.23896L20.5606 9.26192C20.8461 9.33004 21.3106 9.51723 21.4257 10.0219C20.7581 10.0219 20.0059 10.7188 20.6572 11.6694C21.1976 12.2989 21.5218 13.1084 21.5218 13.9811C21.5218 15.967 19.8419 17.4401 17.75 17.4982L6.5 17.5C5.67157 17.5 5 16.8284 5 16H14.2108C16.4633 16 18.288 14.5658 18.288 12.4442C18.288 11.7152 17.9829 10.998 17.727 10.5245L17.644 10.3761L17.5676 10.2476L17.4716 10.0965L17.383 9.96776C16.8194 8.98633 17.7062 8.5 18.1643 8.5H19.4587ZM16.2986 9.89062C16.342 9.99899 16.3947 10.1073 16.4565 10.215L16.5001 10.2842L16.5887 10.4129L16.6642 10.5331L16.7253 10.6367L16.7949 10.7618C17.0606 11.2537 17.2872 12.0162 17.2872 12.4442C17.2872 13.9186 15.8448 15.0881 14.0467 15.0881L11.3359 15.0879L16.2986 9.89062ZM18.9 9.25C18.6791 9.25 18.5 9.42909 18.5 9.65C18.5 9.87091 18.6791 10.05 18.9 10.05C19.1209 10.05 19.3 9.87091 19.3 9.65C19.3 9.42909 19.1209 9.25 18.9 9.25Z"
                              fill="white"/>
                    </svg>

                    <p className={styles.makeLinkText}>мэйк — создание сайта</p>
                </div>

            </div>
            </div>

        </footer>
    );
};

export default Footer;