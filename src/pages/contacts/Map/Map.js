import React from 'react';
import styles from './Map.module.scss';

const Map = () => {
  return (
    <div className={styles.location}>
      <div className={styles.location__info}>
        <h2>Расположение</h2>
        <p>Основной Онкоцентр доктора Марченко располагается в 2х минутах ходьбы от автобусной остановки 20-й квартал.</p>
        <div className={styles.location__details}>
          <div className={styles.location__address}>
            <h3>Адрес</h3>
            <p>445047 Россия, Самарская область, город Тольятти, Автозаводский район, Южное шоссе, дом 43а</p>
          </div>
          <div className={styles.location__phone}>
            <h3>Телефон</h3>
            <p>+7(812) 43-99-555;</p>
          </div>
          <div className={styles.location__hours}>
            <h3>Время работы</h3>
            <p>Пн-Пт: 8.00-20.00</p>
            <p>Сб: 9.00-20.00</p>
          </div>
          <div className={styles.location__email}>
            <h3>E-mail</h3>
            <p>oganikfree@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.location__map}>
        <iframe
          src="https://yandex.ru/maps/-/CDucn8me"
          width="600"
          height="450"
          frameBorder="0"
          allowFullScreen={true}
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
