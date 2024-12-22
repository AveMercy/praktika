import React, { useState } from 'react';
import styles from './AddressSearch.module.scss';
import CityDropdown from './CityDropdown';

const AddressSearch = () => {
    const [city, setCity] = useState('кемерово'); // Начальное значение города
    const [street, setStreet] = useState('');
    const [house, setHouse] = useState('');
    const [buildingType, setBuildingType] = useState('многоквартирный дом');


    const cities = ['кемерово', 'анжеро-судженск', 'бачатский','белово','белогорск',
        'березовский','калтан','киселевск','ленинск-кузнецкий','мариинск','междуреченск','мыски',
        'осинники','полысаево','прокопьевск','салаир','тайга','таштагол','топки','юрга'];

    const handleSearch = () => {
        alert(`Поиск провайдеров для: ${city}, ${street}, дом ${house}, ${buildingType}`);
    };

    const handleCityChange = (selectedCity) => {
        setCity(selectedCity);
    };


    return (
        <div className={styles.addressSearchContainer}>
            <div className={styles.addressSearch}>
                <h1>поиск провайдеров <br/> домашнего интернета <br/> по адресу</h1>
                <div className={styles.location}>
                    <svg className={styles.locationlogo} width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 11.1033C10 12.2222 10.8954 13.1292 12 13.1292C13.1046 13.1292 14 12.2222 14 11.1033C14 9.9845 13.1046 9.0775 12 9.0775C10.8954 9.0775 10 9.9845 10 11.1033Z"
                            fill="#0D214B"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M10.4481 21.9428C10.8256 22.286 11.1559 22.57 11.4136 22.7852C11.7565 23.0716 12.2435 23.0716 12.5864 22.7852C12.8441 22.57 13.1744 22.286 13.5519 21.9428C15.8784 19.8279 20 15.4656 20 11.1033C20 6.62799 16.4183 3 12 3C7.58173 3 4 6.62799 4 11.1033C4 15.4656 8.12164 19.8279 10.4481 21.9428ZM12 5.02583C8.68628 5.02583 6 7.74682 6 11.1033C6 13.3418 7.54095 15.8875 9.49481 18.114C10.3453 19.0831 11.32 20.1132 12 20.726C12.68 20.1132 13.6547 19.0831 14.5052 18.114C16.459 15.8875 18 13.3418 18 11.1033C18 7.74682 15.3137 5.02583 12 5.02583Z"
                              fill="#0D214B"/>
                    </svg>
                    <div className={styles.city}>
                        <CityDropdown cities={cities} selectedCity={city} onCityChange={handleCityChange} />
                    </div>


                </div>

                <div className={styles.location}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.0001 14C12.2093 14 14.0001 12.2092 14.0001 10C14.0001 7.79083 12.2093 6 10.0001 6C7.79095 6 6.00012 7.79083 6.00012 10C6.00012 12.2092 7.79095 14 10.0001 14Z"
                            fill="#0D214B"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9.00012 1C9.00012 0.447693 9.44781 0 10.0001 0C10.5524 0 11.0001 0.447693 11.0001 1V2C11.0001 2.02069 10.9995 2.04126 10.9982 2.06165C14.6185 2.51221 17.4879 5.38165 17.9385 9.00189C17.9589 9.00067 17.9793 9 18 9H19C19.5523 9 20 9.44769 20 10C20 10.5523 19.5523 11 19 11H18C17.9793 11 17.9589 10.9993 17.9385 10.9981C17.4879 14.6183 14.6185 17.4878 10.9982 17.9384C10.9988 17.949 10.9993 17.9598 10.9997 17.9706C11 17.9803 11.0001 17.9902 11.0001 18V19C11.0001 19.5523 10.5524 20 10.0001 20C9.44781 20 9.00012 19.5523 9.00012 19V18C9.00012 17.9793 9.00079 17.9587 9.00201 17.9384C5.38177 17.4878 2.51233 14.6183 2.06177 10.9981C2.04132 10.9993 2.02075 11 2 11H1C0.447693 11 0 10.5523 0 10C0 9.44769 0.447693 9 1 9H2C2.01239 9 2.02466 9.00024 2.03693 9.00073C2.04523 9.00104 2.05353 9.0014 2.06177 9.00189C2.51233 5.38165 5.38177 2.51221 9.00201 2.06165C9.00122 2.04797 9.00067 2.03424 9.00037 2.02039C9.00018 2.01361 9.00012 2.00684 9.00012 2V1ZM16.0001 10C16.0001 13.3137 13.3138 16 10.0001 16C6.6864 16 4.00012 13.3137 4.00012 10C4.00012 6.68628 6.6864 4 10.0001 4C13.3138 4 16.0001 6.68628 16.0001 10Z"
                              fill="#0D214B"/>
                    </svg>

                    <div className={styles.city}>
                        поделитесь локацией или введите адрес вручную
                    </div>


                </div>

                <div className={styles.addressForm}>
                    <div className={styles.inputGroup} style={{backgroundImage: 'url("/path-to-your-image.jpg")'}}>
                        <div className={styles.inputRow}>
                            <div className={`${styles.inputContainer} ${styles.inputContainerLeft}`}>
                                <label htmlFor="street"></label>
                                <input
                                    type="text"
                                    value={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                    list="streetOptions"
                                    placeholder="улица: "
                                />
                            </div>
                            <datalist id="streetOptions">
                                <option value="Улица Ленина"/>
                                <option value="Проспект Ленина"/>
                                <option value="Ленинградский проспект"/>
                            </datalist>
                            <div className={styles.inputContainer}>
                                <label htmlFor="house"></label>
                                <input
                                    type="text"
                                    value={house}
                                    onChange={(e) => setHouse(e.target.value)}
                                    placeholder="дом:"
                                />
                            </div>

                            <div className={styles.selectContainer}>
                                <label htmlFor="buildingType"> </label>
                                <select
                                    value={buildingType}
                                    onChange={(e) => setBuildingType(e.target.value)}
                                >
                                    <option value="многоквартирный дом">многоквартирный дом</option>
                                    <option value="частный дом">частный дом</option>
                                </select>
                            </div>

                            <button className={`${styles.searchButton} ${styles.buttonProvider}`}
                                    onClick={handleSearch}>
                                найти провайдеров
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" strokeWidth="2"
                                     strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>

                        </div>

                    </div>

                    <p className={styles.consent}>
                        нажимая на поиск, я соглашаюсь <br/> с обработкой персональных данных
                    </p>

                </div>
            </div>

        </div>
    );
};

export default AddressSearch;