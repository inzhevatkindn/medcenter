import classNames from "classnames";
import styles from "./Info.module.scss";
import FirstIcon from "../../../../assets/info/1.svg";
import SecondIcon from "../../../../assets/info/2.svg";
import ThirdIcon from "../../../../assets/info/3.svg";
import FourIcon from "../../../../assets/info/4.svg";
import { useWindowSize } from "../../../../utils/useWindowSize";

const Card = ({ IconComponent, title, description, isMobile }) => (
  <div className={styles.info}>
    <IconComponent
      width={isMobile ? "48" : "86"}
      height={isMobile ? "48" : "86"}
    />
    <div className={styles.title}>{title}</div>
    <div className={styles.description}>{description}</div>
  </div>
);

const data = [
  {
    IconComponent: FirstIcon,
    title: "Более 12.000.000",
    description:
      "Пациентов	получают онкологическую помощь по всему миру ежегодно.",
  },
  {
    IconComponent: SecondIcon,
    title: "Более 5.000.000",
    description:
      "Новых случаев диагностируется онкологических заболеваний ежегодно.",
  },
  {
    IconComponent: ThirdIcon,
    title: "Более 2.500.000",
    description: "Операций по удалению опухолей проводится ежегодно.",
  },
  {
    IconComponent: FourIcon,
    title: "Современная медицина",
    description:
      "Благодаря ей и ранней диагностике, 	миллионы пациентов возвращаются 	к полноценной жизни",
  },
];

const Info = () => {
  const { isMobile } = useWindowSize();
  return (
    <div className="hr_pd" style={isMobile ? {} : { position: "relative" }}>
      <div className={classNames("row_flex", styles.wrapper)}>
        {data.map((item) => (
          <Card {...item} isMobile={isMobile} />
        ))}
      </div>
    </div>
  );
};

export default Info;
