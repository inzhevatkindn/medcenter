import styles from "./Card.module.scss";
import doctorCard from "../../assets/doctor_card.png";
import Button from "../Button/Button";

const items = [
  {
    title: "Иванова Ирина",
    speciality: "Врач-онколог",
    description:
      "В Онкоцентре имени Марченко работает более 150 высококвалифицированных специалистов.",
    imgSrc: doctorCard,
  },
  {
    title: "Иванова Ирина",
    speciality: "Врач-онколог",
    description:
      "В Онкоцентре имени Марченко работает более 150 высококвалифицированных специалистов.",
    imgSrc: doctorCard,
  },
  {
    title: "Иванова Ирина",
    speciality: "Врач-онколог",
    description:
      "В Онкоцентре имени Марченко работает более 150 высококвалифицированных специалистов.",
    imgSrc: doctorCard,
  },
  {
    title: "Иванова Ирина",
    speciality: "Врач-онколог",
    description:
      "В Онкоцентре имени Марченко работает более 150 высококвалифицированных специалистов.",
    imgSrc: doctorCard,
  },
];

const Item = ({ title, imgSrc, speciality, description }) => (
  <div className={styles.card}>
    <img src={imgSrc} />
    <div className={styles.name}>{title}</div>
    <div className={styles.speciality}>{speciality}</div>
    <div className={styles.description}>{description}</div>
  </div>
);

const Card = () => (
  <div className="hr_pd">
    <div className={styles.container}>
      {items.map((item) => (
        <Item {...item} />
      ))}
    </div>
    <div className={styles.button}>
        <Button isDefault title="Показать еще" />
    </div>
  </div>
);

export default Card;
