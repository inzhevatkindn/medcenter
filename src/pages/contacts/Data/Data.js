import styles from "./Data.module.scss";

const Data = () => (
  <div className={styles.container}>
    <div className="hr_pd">
      <h2>Реквизиты Онкоцентра доктора Марченко:</h2>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.card}>
            <div className={styles.title}>Юридический адрес:</div>
            <p>
              445047 Россия, Самарская область, город Тольятти, Автозаводский
              район, Южное шоссе, дом 43а
            </p>
            <p>ИНН 0123456789</p>
            <p>КПП 0123456789</p>
            <p>ОГРН 0123456789012</p>
          </div>
          <div className={styles.card}>
            <div className={styles.title}>Кор. счет (ЕКС):</div>
            <p>ОГРН 0123456789012</p>
            <p>Дата государственной регистрации: 00.00.2024</p>
            <p>Выписка из реестра лицензий по состоянию на 07.07.2023 г</p>
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <div className={styles.title}>Получатель:</div>
            <p>
              УФК по г. Тольятти (Онкоцентр доктора Марченко, л/сч. 11111Х00000)
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.title}>
              Казначейский счет получателя (расчетный):
            </div>
            <p>01234567890123456789</p>
          </div>
          <div className={styles.card}>
            <div className={styles.title}>Банк получателя:</div>
            <p>
              СЕВЕРО-ЗАПАДНОЕ ГУ БАНКА РОССИИ // УФК ПО Г. ТОЛЬЯТТИ, г.
              Тольятти, БИК 123456789
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Data;
