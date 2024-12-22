
import React, { useState, useRef, useEffect } from 'react';
import styles from './AllProviders.module.scss';

const CityDropdown = ({ cities, selectedCity, onCityChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCitySelect = (city) => {
        onCityChange(city);
        setIsOpen(false);
    };
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className={styles.cityDropdown} ref={dropdownRef}>
            <div className={styles.cityDropdownHeader} onClick={toggleDropdown}>
                {selectedCity}
                <span className={styles.dropdownIcon}></span>
            </div>
            {isOpen && (
                <ul className={styles.cityDropdownList}>
                    {cities.map((city, index) => (
                        <li
                            key={index}
                            onClick={() => handleCitySelect(city)}
                            className={styles.cityDropdownItem}
                        >
                            {city}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CityDropdown;