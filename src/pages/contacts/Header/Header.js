import styles from "./Header.module.scss";

const Header = () => (
  <div className="hr_pd">
    <div className={styles.bg_container}>
      <div className={styles.page_title}>
        <div className={styles.breadcrumbs}>
          <a href="/medcenter">Главная</a> / Контакты
        </div>
        <h2>Контакты «ОНКОЦЕНТРА ИМЕНИ МАРЧЕНКО»</h2>
      </div>
    </div>
  </div>
);

export default Header;
