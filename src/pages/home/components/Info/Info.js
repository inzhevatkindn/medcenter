import styles from "./Info.module.scss";
import FirstIcon from "../../../../assets/info/1.svg";
import SecondIcon from "../../../../assets/info/2.svg";
import ThirdIcon from "../../../../assets/info/3.svg";
import FourIcon from "../../../../assets/info/4.svg";

const Card = ({ IconComponent, title, description }) => (
  <div className={styles.info}>
    <IconComponent />
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

const Info = () => (
  <div className="hr_pd" style={{ position: "relative" }}>
    <div
      className="row_flex"
      style={{
        justifyContent: "space-between",
        position: "absolute",
        width: "calc(100% - 128px)",
        backgroundColor: "#fff",
        boxShadow: "0px 42px 32px -14px #639C021A",
        padding: "34px",
        boxSizing: "border-box",
        borderRadius: "24px",
        gap: '30px',
        top: '-180px'
      }}
    >
      {data.map((item) => (
        <Card {...item} />
      ))}
    </div>
  </div>
);

export default Info;
