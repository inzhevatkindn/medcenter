import styles from "./BelieveUs.module.scss";
import FirstIcon from "../../../../assets/believe/1.svg";
import classNames from "classnames";
import Button from "../../../../components/Button/Button";

const data = [
  {
    IconComponent: FirstIcon,
    title: "Онкология",
    description:
      "Комплексное лечение онкологических заболеваний с использованием современных методов и технологий.",
  },
  {
    IconComponent: FirstIcon,
    title: "Онкология",
    description:
      "Комплексное лечение онкологических заболеваний с использованием современных методов и технологий.",
  },
  {
    IconComponent: FirstIcon,
    title: "Онкология",
    description:
      "Комплексное лечение онкологических заболеваний с использованием современных методов и технологий.",
  },
  {
    IconComponent: FirstIcon,
    title: "Онкология",
    description:
      "Комплексное лечение онкологических заболеваний с использованием современных методов и технологий.",
  },
  {
    IconComponent: FirstIcon,
    title: "Онкология",
    description:
      "Комплексное лечение онкологических заболеваний с использованием современных методов и технологий.",
  },
  {
    IconComponent: FirstIcon,
    title: "Онкология",
    description:
      "Комплексное лечение онкологических заболеваний с использованием современных методов и технологий.",
  },
  {
    IconComponent: FirstIcon,
    title: "Онкология",
    description:
      "Комплексное лечение онкологических заболеваний с использованием современных методов и технологий.",
  },
  {
    IconComponent: FirstIcon,
    title: "Онкология",
    description:
      "Комплексное лечение онкологических заболеваний с использованием современных методов и технологий.",
  },
  {
    IconComponent: FirstIcon,
    title: "Онкология",
    description:
      "Комплексное лечение онкологических заболеваний с использованием современных методов и технологий.",
  },
];

const Elem = ({ IconComponent, title, description }) => (
  <div className={classNames("col_flex", styles.flex_item)}>
    <IconComponent />
    <div className={styles.title}>{title}</div>
    <div>{description}</div>
  </div>
);

const BelieveUs = () => (
  <div className="hr_pd">
    <div className={styles.container}>
      <h2>
        Доверьтесь нашим профессионалам! <br /> Ваше здоровье — наша миссия
      </h2>
      <div className={styles.divider} />
      <div className={styles.about}>
        Не откладывайте заботу о своём здоровье на потом. Запишитесь на приём
        в Онкоцентр имени Марченко сегодня и сделайте первый шаг к здоровому
        будущему!
      </div>
      <div className={styles.grid}>
        {data.map((item) => (
          <Elem {...item} />
        ))}
      </div>
      <div className="row_flex" style={{ gap: "24px", marginTop: "24px", justifyContent: 'center' }}>
        <Button title="Запись на приём" isGradient />
        <Button title="Позвонить в центр" />
      </div>
    </div>
  </div>
);

export default BelieveUs;
