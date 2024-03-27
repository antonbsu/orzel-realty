'use client';
import React, { useState, useEffect } from 'react';
import styles from './WorkSection.module.scss';

import houseIcon from '../../images/house-icon.png';
import Image from 'next/image';

const WorkSection = () => {
  // Фразы для анимации
  const phrases = [
    'Kupić mieszkanie',
    'Wynająć mieszkanie',
    'Kupić dom',
    'Wynająć dom',
    'Kupić działkę',
    'Kupić lokal użytkowy',
    'Wynająć lokal użytkowy',
    'Kupić garaż',
    'Wynająć garaż',
    'I wiele więcej...'
  ];

  // Состояния для текущего текста, индекса фразы и направления печатания
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Функция обновления текста
  useEffect(() => {
    // Установка скорости печатания/стирания
    const typingSpeed = isDeleting ? 50 : 150;

    // Таймер для печатания или стирания текста
    const timer = setTimeout(() => {
      if (isDeleting) {
        // Стирание текста
        setText((prev) => prev.slice(0, prev.length - 1));
      } else {
        // Печатание текста
        setText(phrases[index].slice(0, text.length + 1));
      }

      // Переключение состояния печатания/стирания и индекса фразы
      if (!isDeleting && text === phrases[index]) {
        // Начало стирания после задержки
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        // Переход к следующей фразе
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, typingSpeed);

    // Очистка таймера
    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <section className={styles.workSection}>
      <div className="container">
        <div className={styles.workSectionWrapper}>
          <div className={styles.workSectionText}>
            <h2 className={styles.workSectionTitle}>Z nami możesz</h2>
            <p className={styles.typingText}>
              {text}...
              <span className={styles.workSection__cursor} />
            </p>
          </div>
          <div className={styles.workSectionImage}>
            <Image
              src={houseIcon}
              alt="House icon"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
