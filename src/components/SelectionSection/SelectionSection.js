import React, { useState } from 'react';
import styles from './SelectionSection.module.scss';
import img1 from '../../img/img.png';


const SelectionSection = () => {
    const [activeAccordion, setActiveAccordion] = useState(0);
    const accordions = [
        {
            title: '🥇 тарифы месяца',
            content: '123',
        },
        {
            title: '🤑 самые доступные',
            content: '123',
        },
        {
            title: '🦅 без лагов',
            content: 'глаз орла, реакция мангуста и быстрый интернет —  в подборке игровых тарифов',
        },
        {
            title: '🎥 КВЕНТ-и-и-ин та-ра-ра-нтино',
            content: '123',
        },
    ];

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };


    return (
        <div className={styles.selectionSection}>
            <div className={styles.sectionHeader}>подборки</div>
            <div className={styles.contentContainer}>
                <div className={styles.imageContainer}>
                    <div className={styles.imageBackground} style={{backgroundImage: `url(${img1})`}}>
                    </div>
                </div>

                <div className={styles.accordionGroup}>
                    {accordions.map((item, index) => (
                        <div key={index}
                             className={`${styles.accordionItem} ${activeAccordion === index ? styles.active : ''}`}>
                            <div
                                className={styles.accordionHeader}
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className={styles.accordionIcon}>{item.icon}</span>
                                <span>{item.title}</span>
                            </div>
                            {activeAccordion === index && (
                                <div className={styles.accordionContent}>
                                    {item.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SelectionSection;