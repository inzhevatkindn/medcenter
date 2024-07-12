import React, { useState } from "react";
import styles from "./ServiceList.module.scss";
import Icon1 from "../../../../assets/services/1.svg";
import Icon2 from "../../../../assets/services/2.svg";
import Icon3 from "../../../../assets/services/3.svg";
import Icon4 from "../../../../assets/services/4.svg";
import Icon5 from "../../../../assets/services/5.svg";
import Icon6 from "../../../../assets/services/6.svg";
import Icon7 from "../../../../assets/services/7.svg";
import Icon8 from "../../../../assets/services/8.svg";
import Icon9 from "../../../../assets/services/9.svg";
import Icon10 from "../../../../assets/services/10.svg";
import Icon11 from "../../../../assets/services/11.svg";
import Icon12 from "../../../../assets/services/12.svg";

import classNames from "classnames";
import { useWindowSize } from "../../../../utils/useWindowSize";
const services = [
  {
    title: "Амбулаторное лечение",
    description: "Описание амбулаторного лечения",
    Icon: Icon1,
  },
  {
    title: "Стационарное лечение",
    description: "Описание стационарного лечения",
    Icon: Icon2,
  },
  {
    title: "Реабилитация",
    description: "Описание реабилитации",
    Icon: Icon3,
  },
  {
    title: "Клинические исследования",
    description:
      "Мы активно участвуем в клинических исследованиях, что позволяет нашим пациентам получать доступ к новейшим методам лечения и препаратам.",
    Icon: Icon4,
  },
  {
    title: "Молекулярная диагностика рака",
    description: "Описание молекулярной диагностики рака",
    Icon: Icon5,
  },
  {
    title: "Противоопухолевая терапия",
    description: "Описание противоопухолевой терапии",
    Icon: Icon6,
  },
  {
    title: "Сохранение фертильности",
    description: "Описание сохранения фертильности",
    Icon: Icon7,
  },
  {
    title: "Лазерная хирургия опухолей",
    description: "Описание лазерной хирургии опухолей",
    Icon: Icon8,
  },
  {
    title: "Фьюжн-биопсия молочной железы",
    description: "Описание фьюжн-биопсии молочной железы",
    Icon: Icon9,
  },
  {
    title: "Фьюжн-биопсия предстательной железы",
    description: "Описание фьюжн-биопсии предстательной железы",
    Icon: Icon10,
  },
  {
    title: "Криохирургическое лечение",
    description: "Описание криохирургического лечения",
    Icon: Icon11,
  },
  {
    title: "Установка венозных порт систем",
    description: "Описание установки венозных порт систем",
    Icon: Icon12,
  },
];

const ServiceList = () => {
  const { isMobile } = useWindowSize();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={classNames("hr_pd", styles.wrapper)}>
      <h2>Основные направления нашей работы включают:</h2>
      <div className={styles.container}>
        <div className={styles.serviceList}>
          {services.slice(0, 6).map(({ title, description, Icon }, index) => (
            <div key={index} className={styles.serviceItem}>
              <div
                className={styles.serviceHeader}
                onClick={() => toggleDescription(index)}
              >
                <div className={styles.info}>
                  <span className={styles.serviceTitle}>{title}</span>
                  <span className={styles.serviceLink}>Подробнее</span>
                </div>
                <Icon
                  width={!isMobile ? "64" : "32"}
                  height={!isMobile ? "64" : "32"}
                />
              </div>
              {expandedIndex === index && (
                <div className={styles.serviceDescription}>{description}</div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.serviceList}>
          {services.slice(6).map(({ title, description, Icon }, index) => (
            <div key={index} className={styles.serviceItem}>
              <div
                className={styles.serviceHeader}
                onClick={() => toggleDescription(index + 6)}
              >
                <div className={styles.info}>
                  <span className={styles.serviceTitle}>{title}</span>
                  <span className={styles.serviceLink}>Подробнее</span>
                </div>
                <Icon
                  width={!isMobile ? "64" : "32"}
                  height={!isMobile ? "64" : "32"}
                />
              </div>
              {expandedIndex === index + 6 && (
                <div className={styles.serviceDescription}>{description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
