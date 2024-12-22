
import React from 'react';
import styles from './QuestionCard.module.scss';

const QuestionCard = () => {
    const questions = [
        {
            id: 1,
            title: 'почему лучше подключить\nна все_тарифы?',
            description: 'Бережем время и деньги. Даём полные сведения по тарифам: быстро и понятно.',
        },
        {
            id: 2,
            title: 'как пользоваться сервисом?',
            description: 'Введите адрес подключения в строку поиска на главной странице, чтобы посмотреть все доступные вам тарифы провайдеров.',
            buttonText: 'найти тарифы',
        },
        {
            id: 3,
            title: 'зачем указывать адрес?',
            description: 'Чтобы мы могли проверить техническую возможность подключения провайдеров в конкретном доме',
        },
        {
            id: 4,
            title: 'когда мне подключат интернет?',
            description: 'В течение 1-2 дней. Мы моментально передаём заявки провайдерам — задержек быть не должно',
        },
        {
            id: 5,
            title: 'почему все_тарифы?',
            description: 'Бережём время и деньги. Даём полные сведения по тарифам: быстро и понятно.',
        },
    ];

    const cardsRef = React.useRef(null);

    const scrollLeft = () => {
        if (cardsRef.current) {
            cardsRef.current.scrollLeft -= 400;
        }
    };

    const scrollRight = () => {
        if (cardsRef.current) {
            cardsRef.current.scrollLeft += 400;
        }
    };

    return (
        <div className={styles.faqContainer}>
            <div className={styles.header}>
                <h1>часто-задаваемые вопросы</h1>
                <div className={styles.navigationButtons}>
                    <button className={`${styles.navButton} ${styles.leftButton}`} onClick={scrollLeft}>
                        ←
                    </button>
                    <button className={`${styles.navButton} ${styles.rightButton}`} onClick={scrollRight}>
                        →
                    </button>
                </div>
            </div>
            <div className={styles.cardsContainer} ref={cardsRef}>
                {questions.map((question) => (
                    <div key={question.id} className={styles.card}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{question.title}</h3>
                            <p className={styles.cardDescription}>{question.description}</p>
                            {question.buttonText && (
                                <button className={styles.cardButton}>{question.buttonText}</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;