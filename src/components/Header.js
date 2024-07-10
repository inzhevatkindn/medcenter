import React from "react";
import styles from "./Header.module.scss";
import ruLogo from "../assets/ru.png";
import enLogo from "../assets/en.png";
import PhoneLogo from "../assets/phone.svg";
import AddressLogo from "../assets/address.svg";
import MailLogo from "../assets/mail.svg";
import classNames from "classnames";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

const patientMenuItems = [
  "Онкология",
  "Рентгенология",
  "Терапия",
  "Сестринское дело",
  "Эндокринология",
  "УЗИ",
];
const specialistMenuItems = [
  "Кардиология",
  "Неврология",
  "Педиатрия",
  "Хирургия",
];

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={classNames(styles.topSection, "hr_pd")}>
          <div className={styles.contactInfo}>
            <PhoneLogo />
            <a href="tel:+3333333333">+ 333 (33) 333 333</a>
            <AddressLogo />
            <a href="https://google.com">
              Самарская область, город Тольятти, ...
            </a>
            <MailLogo />
            <a href="mailto:oganikagmail.com">oganikgmail.com</a>
          </div>
          <div className={styles.language}>
            <span>Язык:</span>
            <img src={enLogo} alt="Language 1" />
            <img src={ruLogo} alt="Language 2" />
          </div>
        </div>
      </div>
      <div className={classNames(styles.bg)}>
        <div className="container">
          <div className={classNames(styles.bottomSection, "hr_pd")}>
            <div className={styles.logo}>
              <Logo />
              Онкоцентр <br /> доктора Марченко
            </div>
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                <li>
                  <a href="/medcenter/about">О центре</a>
                </li>
                <li>
                  <Menu title="Пациенту" items={patientMenuItems} />
                </li>
                <li>
                  <Menu title="Специалистам" items={specialistMenuItems} />
                </li>
                <li>
                  <a href="#">Новости</a>
                </li>
                <li>
                  <a href="/medcenter/contacts">Контакты</a>
                </li>
              </ul>
            </nav>
            <button className={styles.appointmentButton}>
              Запись на прием
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
