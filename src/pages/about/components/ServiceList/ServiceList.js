import React, { useState } from "react";
import styles from "./ServiceList.module.scss";
import ServiceIcon from "../../../../assets/services/1.svg";
import classNames from "classnames";

const services = [
  {
    title: "Амбулаторное лечение",
    description: "Описание амбулаторного лечения",
  },
  {
    title: "Стационарное лечение",
    description: "Описание стационарного лечения",
    icon: "🏨",
  },
  { title: "Реабилитация", description: "Описание реабилитации", icon: "💪" },
  {
    title: "Клинические исследования",
    description:
      "Мы активно участвуем в клинических исследованиях, что позволяет нашим пациентам получать доступ к новейшим методам лечения и препаратам.",
    icon: "🔬",
  },
  {
    title: "Молекулярная диагностика рака",
    description: "Описание молекулярной диагностики рака",
    icon: "🧬",
  },
  {
    title: "Противоопухолевая терапия",
    description: "Описание противоопухолевой терапии",
    icon: "💊",
  },
  {
    title: "Сохранение фертильности",
    description: "Описание сохранения фертильности",
    icon: "👶",
  },
  {
    title: "Лазерная хирургия опухолей",
    description: "Описание лазерной хирургии опухолей",
    icon: "💉",
  },
  {
    title: "Фьюжн-биопсия молочной железы",
    description: "Описание фьюжн-биопсии молочной железы",
    icon: "🩺",
  },
  {
    title: "Фьюжн-биопсия предстательной железы",
    description: "Описание фьюжн-биопсии предстательной железы",
    icon: "🩺",
  },
  {
    title: "Криохирургическое лечение",
    description: "Описание криохирургического лечения",
  },
  {
    title: "Установка венозных порт систем",
    description: "Описание установки венозных порт систем",
  },
];

const ServiceList = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={classNames("hr_pd", styles.wrapper)}>
      <h2>Основные направления нашей работы включают:</h2>
      <div className={styles.container}>
        <div className={styles.serviceList}>
          {services.slice(0, 6).map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <div
                className={styles.serviceHeader}
                onClick={() => toggleDescription(index)}
              >
                <div className={styles.info}>
                  <span className={styles.serviceTitle}>{service.title}</span>
                  <span className={styles.serviceLink}>Подробнее</span>
                </div>
                <ServiceIcon />
              </div>
              {expandedIndex === index && (
                <div className={styles.serviceDescription}>
                  {service.description}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.serviceList}>
          {services.slice(6).map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <div
                className={styles.serviceHeader}
                onClick={() => toggleDescription(index + 6)}
              >
                <div className={styles.info}>
                  <span className={styles.serviceTitle}>{service.title}</span>
                  <span className={styles.serviceLink}>Подробнее</span>
                </div>
                <ServiceIcon />
              </div>
              {expandedIndex === index + 6 && (
                <div className={styles.serviceDescription}>
                  {service.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
