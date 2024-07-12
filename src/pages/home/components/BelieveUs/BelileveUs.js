import styles from "./BelieveUs.module.scss";
import FirstIcon from "../../../../assets/believe/1.svg";
import SecondIcon from "../../../../assets/believe/2.svg";
import ThirdIcon from "../../../../assets/believe/3.svg";
import FourIcon from "../../../../assets/believe/4.svg";
import FiveIcon from "../../../../assets/believe/5.svg";
import SixIcon from "../../../../assets/believe/6.svg";
import SevenIcon from "../../../../assets/believe/7.svg";
import EightIcon from "../../../../assets/believe/8.svg";
import NineIcon from "../../../../assets/believe/9.svg";
import classNames from "classnames";
import Button from "../../../../components/Button/Button";
import { useWindowSize } from "../../../../utils/useWindowSize";

const data = [
  {
    IconComponent: FirstIcon,
    title: "Онкология",
    description:
      "Комплексное лечение онкологических заболеваний с использованием современных методов и технологий.",
  },
  {
    IconComponent: SecondIcon,
    title: "Эндокринология",
    description: "Диагностика и лечение заболеваний эндокринной системы.",
  },
  {
    IconComponent: ThirdIcon,
    title: "Рентгенология",
    description:
      "Новейшее оборудование для проведения рентгенологических исследований.",
  },
  {
    IconComponent: FourIcon,
    title: "УЗИ",
    description:
      "Быстрое и безопасное выявление различных заболеваний и состояний организма.",
  },
  {
    IconComponent: FiveIcon,
    title: "Анализы",
    description:
      "Весь спектр лабораторных анализов с использованием современного оборудования и методик.",
  },
  {
    IconComponent: SixIcon,
    title: "Терапия",
    description: "Широкий выбор терапевтических услуг.",
  },
  {
    IconComponent: SevenIcon,
    title: "Сестринское дело",
    description:
      "Медицинские сестры обеспечивают высокий уровень ухода и поддержки пациентов.",
  },
  {
    IconComponent: EightIcon,
    title: "Пластика",
    description:
      "Опытные пластические хирурги предлагают большой выбор процедур для коррекции внешности.",
  },
  {
    IconComponent: NineIcon,
    title: "Косметология",
    description: "Множество процедур для улучшения кожи лица и тела.",
  },
];

const Elem = ({ IconComponent, title, description, isMobile }) => (
  <div className={classNames("col_flex", styles.flex_item)}>
    <IconComponent width="48" height="48" />
    <div className={styles.title}>{title}</div>
    <div>{description}</div>
  </div>
);

const BelieveUs = () => {
  const { isMobile } = useWindowSize();
  return (
    <div className="hr_pd">
      <div className={styles.container}>
        <h2>
          Доверьтесь нашим профессионалам! <br /> Ваше здоровье — наша миссия
        </h2>
        {!isMobile && <div className={styles.divider} />}
        <div className={styles.about}>
          Не откладывайте заботу о своём здоровье на потом. Запишитесь на приём
          в Онкоцентр имени Марченко сегодня и сделайте первый шаг к здоровому
          будущему!
        </div>
        <div className={styles.grid}>
          {data.map((item) => (
            <Elem {...item} isMobile={isMobile} />
          ))}
        </div>
        <div
          className={classNames("row_flex", styles.mobile_grid)}
          style={
            isMobile
              ? { flexDirection: "column", gap: "14px", marginTop: "24px" }
              : { gap: "24px", marginTop: "24px", justifyContent: "center" }
          }
        >
          <Button title="Запись на приём" isGreen />
          <Button title="Позвонить в центр" isDefault />
        </div>
      </div>
    </div>
  );
};

export default BelieveUs;
