import React, { useState, useRef } from 'react';
import styles from './AllProviders.module.scss';
import { ReactComponent as BackgroundSVG } from '../../img/providerslogo/bg.svg';
import { ReactComponent as BlueOverlaySVG } from '../../img/providerslogo/blue.svg';
import { ReactComponent as EffectsSVG } from '../../img/providerslogo/effects.svg';
import { ReactComponent as VkSVG } from '../../img/providerslogo/vk.svg';
import { ReactComponent as TelegramSVG } from '../../img/providerslogo/telegram.svg';
import CityDropdown from './CityDropdown';

const AllProviders = () => {
    const providers = [
        {
            id: 1,
            name: 'Ростелеком',
            logo: '/img/providerslogo/rostelecom.png',
            rating: 4.6,
            reviews: '172 отзыва',
            services: 'домашний интернет, ТВ, мобильная связь',
            cheapestPrice: 300,
            highestSpeed: '800 мбит/с',
        },
        {
            id: 2,
            name: 'Билайн',
            logo: '/img/providerslogo/beeline.png',
            rating: 4.6,
            reviews: '1к отзывов',
            services: 'домашний интернет, мобильная связь, спутниковый интернет, ТВ',
            cheapestPrice: 400,
            highestSpeed: '1,5 гбит/с',
        },
        {
            id: 3,
            name: 'МТС',
            logo: '/img/providerslogo/mts.png',
            rating: 4.0,
            reviews: '45 отзывов',
            services: 'домашний интернет, мобильная связь, спутниковый интернет, ТВ',
            cheapestPrice: 450,
            highestSpeed: '638 мбит/с',
        },
        {
            id: 4,
            name: 'Мегафон',
            logo: '/img/providerslogo/megafon.png',
            rating: 4.2,
            reviews: '200 отзывов',
            services: 'домашний интернет, мобильная связь',
            cheapestPrice: 380,
            highestSpeed: '700 мбит/с',
        },
        {
            id: 5,
            name: 'ТТК',
            logo: '/img/providerslogo/ttk.png',
            rating: 4.5,
            reviews: '150 отзывов',
            services: 'домашний интернет, ТВ',
            cheapestPrice: 350,
            highestSpeed: '900 мбит/с',
        },
        {
            id: 6,
            name: 'Теле2',
            logo: '/img/providerslogo/tele2.png',
            rating: 4.0,
            reviews: '300 отзывов',
            services: 'домашний интернет, мобильная связь',
            cheapestPrice: 420,
            highestSpeed: '750 мбит/с',
        }
    ];
    const cities = ['кемерово', 'анжеро-судженск', 'бачатский','белово','белогорск',
        'березовский','калтан','киселевск','ленинск-кузнецкий','мариинск','междуреченск','мыски',
        'осинники','полысаево','прокопьевск','салаир','тайга','таштагол','топки','юрга'];
    const providerCardsRef = useRef(null);
    const [selectedCity, setSelectedCity] = useState('кемерово');

    const scrollLeft = () => {
        if (providerCardsRef.current) {
            providerCardsRef.current.scrollLeft -= 420;
        }
    };

    const scrollRight = () => {
        if (providerCardsRef.current) {
            providerCardsRef.current.scrollLeft += 420;
        }
    };
    const handleCityChange = (city) => {
        setSelectedCity(city);
    };


    return (
        <div className={styles.providerListContainer}>
            <div className={styles.header}>
                <div className={styles.headerTop}>
                    <h1>все провайдеры</h1>

                </div>
                <div className={styles.headerBottom}>
                    <div className={styles.location}>
                        <CityDropdown
                            cities={cities}
                            selectedCity={selectedCity}
                            onCityChange={handleCityChange}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.navigationButtons}>
                <button className={`${styles.navButton} ${styles.leftButton}`} onClick={scrollLeft}>
                    ←
                </button>
                <button className={`${styles.navButton} ${styles.rightButton}`} onClick={scrollRight}>
                    →
                </button>
            </div>
            <div className={styles.providerCards} ref={providerCardsRef}>
                <div className={`${styles.allTariffsCard} ${styles.firstCard}`}>
                    <div className={styles.allTariffsCardContent}>
                        <div className={styles.cardBackground}>
                            <BackgroundSVG className={styles.bgSvg}/>
                            <div className={styles.blueOverlay}>
                                <BlueOverlaySVG className={styles.blueSvg}/>
                            </div>
                            <EffectsSVG className={styles.effectsSvg}/>
                        </div>

                        <div className={styles.cardHeader}>все_тарифы</div>
                        <div className={styles.cardText}>
                            поможем выбрать провайдера: <br/> быстро, легко и бесплатно
                        </div>
                        <div className={styles.firstCardDivider}/>
                        <div className={styles.cardTextCenter}>
                            подобрать лучшего <br/> провайдера
                        </div>
                        <div className={styles.contact}>
                            +7 (800) 425-19-99
                            <div className={styles.socialIcons}>
                                <TelegramSVG className={styles.socialIcon}/>
                                <VkSVG className={styles.socialIcon}/>
                            </div>
                        </div>

                        <div className={styles.askQuestionContainer}>
                            <button className={styles.askQuestionButton}> задать вопрос</button>
                        </div>

                    </div>
                </div>
                {providers.map((provider) => (
                    <div
                        key={provider.id}
                        className={styles.providerCardContainer}
                    >
                        <div
                            className={styles.providerCard}
                        >
                            <div className={styles.cardContent}>

                                <div className={styles.providerName}>{provider.name}</div>
                                <div className={styles.placeholderLogo}>
                                    <img
                                        className={styles.logo}
                                        src={provider.logo}
                                        alt={`${provider.name} логотип`}
                                    />
                                </div>
                                <div className={styles.rating}>
                                    <span className={styles.ratingValue}>{provider.rating}</span>
                                    <div className={styles.ratingBar}>
                                        <div className={styles.ratingBarFill}
                                             style={{width: `${(provider.rating / 5) * 100}%`}}>
                                        </div>
                                    </div>
                                    <span className={styles.reviewCount}>{provider.reviews}</span>
                                </div>
                                <div className={styles.providerCardDivider}/>
                                <div className={styles.services}>{provider.services}</div>
                                <div className={styles.cardDivider}/>
                                <div className={styles.price}>
                                    <div className={styles.priceText}>самый дешёвый тариф</div>
                                    <div className={styles.priceValueContainer}>
                                        <span className={styles.priceValue}>{provider.cheapestPrice}</span>{' '}
                                        <span className={styles.priceCurrency}>Р/мес.</span>
                                    </div>
                                </div>
                                <div className={styles.cardDivider}/>
                                <div className={styles.speed}>
                                    <div className={styles.speedText}>самая высокая скорость</div>
                                    <span className={styles.speedValue}>{provider.highestSpeed}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default AllProviders;