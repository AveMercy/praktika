import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';

const MobileLogo = () => (

    <div className={styles['logo-mobile']}>
        <svg width="80" height="44" viewBox="0 0 80 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M80 0H0V44H57.5709C60.4517 44 61.8921 44 63.2504 43.7464C64.2657 43.5568 65.2425 43.2634 66.1542 42.8741C67.3738 42.3533 68.4257 41.6046 70.5295 40.1073L73.9899 37.6443C76.2954 36.0034 77.4481 35.1829 78.2534 34.1986C78.8549 33.4633 79.3105 32.6644 79.6053 31.8278C80 30.708 80 29.507 80 27.1051V0Z"
                fill="#5171E0"/>
        </svg>
        <div className={styles['logo-text-top-mobile']}>
            все_
        </div>
        <div className={styles['logo-text-bottom-mobile']}>
            тарифы
        </div>
    </div>
);


export const Logo = () => {
    return (
        <div className={styles['logo-container']}>
            <div className={styles['logo']}>
                <img
                    src="/img/logo.svg"

                    alt="Логотип"
                /></div>
            <div className={styles['logo-text-top']}>
                все_
            </div>
            <div className={styles['logo-text-bottom']}>
                тарифы
            </div>
        </div>
    );
};

const Location = ({ city = 'кемерово' }) => {
    return (
        <div className={styles.location}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 11.1033C10 12.2222 10.8954 13.1292 12 13.1292C13.1046 13.1292 14 12.2222 14 11.1033C14 9.9845 13.1046 9.0775 12 9.0775C10.8954 9.0775 10 9.9845 10 11.1033Z"
                    fill="#0D214B"
                />
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M10.4481 21.9428C10.8256 22.286 11.1559 22.57 11.4136 22.7852C11.7565 23.0716 12.2435 23.0716 12.5864 22.7852C12.8441 22.57 13.1744 22.286 13.5519 21.9428C15.8784 19.8279 20 15.4656 20 11.1033C20 6.62799 16.4183 3 12 3C7.58173 3 4 6.62799 4 11.1033C4 15.4656 8.12164 19.8279 10.4481 21.9428ZM12 5.02583C8.68628 5.02583 6 7.74682 6 11.1033C6 13.3418 7.54095 15.8875 9.49481 18.114C10.3453 19.0831 11.32 20.1132 12 20.726C12.68 20.1132 13.6547 19.0831 14.5052 18.114C16.459 15.8875 18 13.3418 18 11.1033C18 7.74682 15.3137 5.02583 12 5.02583Z"
                      fill="#0D214B"
                />
            </svg>
            <span>{city}</span>
        </div>
    );
}

const Header = ({ logoPosition = 'logo-left', contentPosition = 'content-right' }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleBodyScroll = (disableScroll) => {
        if(disableScroll) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }
    const toggleNav = () => {
        toggleBodyScroll(!isNavOpen);
        setIsNavOpen(!isNavOpen);
    };
    const isMobile = window.innerWidth <= 767;

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles['header-content']}>


                    <div className={`${styles['content-wrapper']} ${styles[contentPosition]}`}>
                        <div className={`${styles['logo-wrapper']} ${styles[logoPosition]}`}>
                            {isMobile ? <MobileLogo/> : <Logo/>}
                        </div>
                        <Location city="кемерово"/>
                        <button className={styles.menuButton} onClick={toggleNav}>
                            ☰
                        </button>
                        <nav className={`${styles.nav} ${isNavOpen ? styles.open : ''}`}>
                            <a href="/providers">провайдеры</a>
                            <a href="/rating">рейтинг</a>
                            <a href="/tariffs">тарифы</a>
                            <a href="/promotions">акции</a>
                        </nav>
                        <div className={styles.extra}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12 5.70401C10.9383 4.64862 9.49678 4 7.90909 4C4.6456 4 2 6.74038 2 10.1208C2 12.4974 3.17842 13.7105 5.17039 15.7608L5.17175 15.7622C5.32202 15.917 5.47693 16.0765 5.63636 16.2416L11.3735 21.7474C11.7245 22.0842 12.2755 22.0842 12.6265 21.7474L18.3636 16.2416C18.5228 16.0768 18.6774 15.9176 18.8274 15.7631L18.8296 15.7608C20.8216 13.7105 22 12.4974 22 10.1208C22 6.74038 19.3544 4 16.0909 4C14.5032 4 13.0617 4.64862 12 5.70401ZM17.4015 14.3478C19.473 12.2157 20 11.5606 20 10.1208C20 7.80515 18.201 6.01834 16.0909 6.01834C15.0565 6.01834 14.1115 6.43809 13.4035 7.14191L12.7018 7.83951C12.3125 8.22647 11.6875 8.22648 11.2982 7.83951L10.5965 7.14191C9.88847 6.43809 8.94347 6.01834 7.90909 6.01834C5.799 6.01834 4 7.80515 4 10.1208C4 11.5606 4.52704 12.2157 6.5985 14.3478L6.60012 14.3495C6.74177 14.4953 6.88985 14.6478 7.04212 14.8054L12 19.5633L16.9579 14.8054C17.11 14.648 17.2576 14.496 17.3991 14.3503L17.4015 14.3478Z"
                                      fill="#0D214B"
                                />
                            </svg>
                            <a href="/favorites" className={styles.favorites}>избранное</a>
                            <div className={styles.contact}>
                                <a href="tel:+78004251999">+7 (800) 425-19-99</a>
                                <a href="/callback" className={styles.callback}>перезвоните мне</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed-menu">


            </div>
        </header>
    );
};

export default Header;