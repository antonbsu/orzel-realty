'use client';

import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import styles from './ScrollToMapLink.module.scss'; // Убедитесь, что указали правильный путь к вашему файлу стилей

interface Property {
  address: string;
  district: string;
  city: string;
  scrollToSectionMap: () => void; // Функция для скролла к секции карты
}

const ScrollToMapLink = () => {
  const scrollToSectionMap = () => {
    const sectionElement = document.getElementById('map');
    if (sectionElement) {
      const offset = sectionElement.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a className={styles.scrollToMap} onClick={scrollToSectionMap}>Mapa</a>
  );
};

export default ScrollToMapLink;