import classNames from "classnames";
import React from "react";
import styles from "./Footer.module.scss";
import PhoneLogo from "../assets/phone.svg";
import AddressLogo from "../assets/address.svg";
import MailLogo from "../assets/mail.svg";
import Logo from "./Logo/Logo";
import Button from "./Button/Button";
import VkIcon from "../assets/social/vk.svg";
import OkIcon from "../assets/social/ok.svg";
import YoutubeIcon from "../assets/social/youtube.svg";
import ZenIcon from "../assets/social/zen.svg";
import IgIcon from '../assets/social/instagram.svg';
import TgIcon from '../assets/social/telegram.svg';
import RutubeIcon from '../assets/social/rutube.svg';
import TiktokIcon from '../assets/social/tik-tok.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={classNames("row_flex", "hr_pd", styles.gap50)}>
          <div className={classNames(styles.wrapper, "col_flex")}>
            <div className={styles.logo}>
              <Logo isRevert /> ОНКОЦЕНТР <br /> ДОКТОРА МАРЧЕНКО
            </div>
            <div className={styles.copyright}>
              Copyright © 2024 «Онкоцентр имени Марченко» All rights reserved.
            </div>
          </div>
          <div>
            <div className={styles.title}>Контакты</div>
            <div className={classNames("col_flex", styles.contacts)}>
              <div className="row_flex">
                <AddressLogo width="20" height="24" />
                <a href="https://google.com">
                  Самарская область, город Тольятти, ...
                </a>
              </div>
              <div className="row_flex">
                <MailLogo width="22" height="18" />
                <a href="mailto:oganikagmail.com">oganikgmail.com</a>
              </div>

              <div className="row_flex">
                <PhoneLogo />
                <a href="tel:+3333333333">+ 333 (33) 333 333</a>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.title}>Пользователям</div>
            <div
              className={classNames("col_flex", styles.contacts, styles.links)}
            >
              <a href="tel:+3333333333">Юр. информация</a>
              <a href="https://google.com">Форма записи</a>
              <a href="mailto:oganikagmail.com">Карта сайта</a>
            </div>
          </div>
          <div
            className="row_flex"
            style={{ gap: "22px", alignItems: "start" }}
          >
            <div className={styles.buttons}>
              <Button isBlack title="Личный кабинет" />
              <Button isBlack title="Записаться" />
            </div>
            <div className={styles.social}>
              <a href="">
                <YoutubeIcon />
              </a>
              <a href="">
                <VkIcon />
              </a>
              <a href="">
                <TiktokIcon />
              </a>
              <a href="">
                <RutubeIcon />
              </a>
              <a href="">
                <ZenIcon />
              </a>
              <a href="">
                <OkIcon />
              </a>
              <a href="">
                <IgIcon />
              </a>
              <a href="">
                <TgIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
