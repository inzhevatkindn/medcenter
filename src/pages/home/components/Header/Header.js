import Button from "../../../../components/Button/Button";
import styles from "./Header.module.scss";
import DoctorLogo from "../../../../assets/doctor.png";
import classNames from "classnames";

const ListElem = ({ title }) => (
  <div className="row_flex">
    <div className={styles.green_point} />
    <div className={styles.list_title}>{title}</div>
  </div>
);

const title = [
  "Современное оборудование",
  "Высококвалифицированные специалисты",
  "Комплексный подход к лечению",
];

const Header = () => (
  <div className={classNames(styles.wrapper, "hr_pd")}>
    <div className={styles.left_side}>
      <div className={styles.title}>Медицинский центр мирового уровня</div>
      <div className={styles.name}>
        Онкоцентр имени Марченко Ваше здоровье в надёжных руках
      </div>
      <div style={{ gap: "20px" }} className="col_flex">
        {title.map((item) => (
          <ListElem title={item} />
        ))}
      </div>
      <div className={styles.note}>Мы заботимся о вашем будущем</div>
      <div className={styles.buttons}>
        <Button title="Запись на приём" isGradient />
        <Button title="Позвонить в центр" isDefault />
      </div>
    </div>
    <div className={styles.img_container}>
      <img src={DoctorLogo} />
    </div>
    <div className={styles.green_bg}></div>
  </div>
);

export default Header;
