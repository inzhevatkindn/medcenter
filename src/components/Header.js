import React, { useCallback, useState } from "react";
import styles from "./Header.module.scss";
import ruLogo from "../assets/ru.png";
import enLogo from "../assets/en.png";
import PhoneLogo from "../assets/phone.svg";
import AddressLogo from "../assets/address.svg";
import MailLogo from "../assets/mail.svg";
import classNames from "classnames";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import { useWindowSize } from "../utils/useWindowSize";
import Button from "./Button/Button";

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

const MobileMenu = ({ onClose }) => (
  <div className={styles.mobile_overlay}>
    <div className={styles.mobile_menu}>
      <div className={styles.mobile_header}>
        <div className={styles.logo}>
          <Logo />
          Онкоцентр <br /> доктора Марченко
        </div>
        <div className={styles.close_button} onClick={onClose}>
          <div className={styles.cross} />
        </div>
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
      <div className={styles.btn_container}>
        <Button isDefault title="Запись на приём" />
        <div className={styles.language}>
          <span>Язык:</span>
          <img src={enLogo} alt="Language 1" />
          <img src={ruLogo} alt="Language 2" />
        </div>
      </div>
    </div>
  </div>
);

function Header() {
  const [isOpen, setOpen] = useState(false);
  const { isMobile } = useWindowSize();

  const toggleClick = useCallback(() => setOpen(true), []);

  const onClose = useCallback(() => setOpen(false), []);

  return (
    <header className={styles.header}>
      {isMobile && isOpen && <MobileMenu onClose={onClose} />}
      <div className="container">
        <div className={classNames(styles.topSection, "hr_pd")}>
          <div className={styles.contactInfo}>
            {isMobile && (
              <div className={styles.logo}>
                <Logo />
                Онкоцентр <br /> доктора Марченко
              </div>
            )}
            {isMobile && (
              <div className={styles.mobile_right_section}>
                <div className="row_flex">
                  <PhoneLogo width="16" height="16" />
                  <a href="tel:+3333333333">+ 333 (33) 333 333</a>
                </div>
                <div className={styles.hamburger} onClick={toggleClick}>
                  <div className={styles.line} />
                  <div className={styles.line} />
                  <div className={styles.line} />
                </div>
              </div>
            )}
            {!isMobile && (
              <>
                <PhoneLogo width="20" height="20" />
                <a href="tel:+3333333333">+ 333 (33) 333 333</a>
                <AddressLogo width="18.55" height="24" />
                <a href="https://google.com">
                  Самарская область, город Тольятти, ...
                </a>
                <MailLogo width="24" height="20" />
                <a href="mailto:oganikagmail.com">oganikgmail.com</a>
              </>
            )}
          </div>
          {!isMobile && (
            <div className={styles.language}>
              <span>Язык:</span>
              <img src={enLogo} alt="Language 1" />
              <img src={ruLogo} alt="Language 2" />
            </div>
          )}
        </div>
      </div>
      {!isMobile && (
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
                Запись на приём
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
