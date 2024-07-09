import styles from "./Info.module.scss";
import firstImg from "../../../../assets/about/1.png";
import secondImg from "../../../../assets/about/2.png";
import thirdImg from "../../../../assets/about/3.png";

const Info = () => (
  <div className="hr_pd">
    <div className={styles.container}>
      <div className={styles.left_side}>
        <h2>О центре</h2>
        <div>
          <p>
            Онкоцентр имени Марченко в Тольятти был основан в 2024 году
            и с тех пор стал ведущим медицинским учреждением в области
            онкологии. Наш центр оказывает высококвалифицированную медицинскую
            помощь пациентам со злокачественными новообразованиями
            и предопухолевой патологией, используя передовые методы диагностики
            и лечения.
          </p>
        </div>
        <div className={styles.img_container}>
          <img src={firstImg} />
          <img src={secondImg} />
        </div>
      </div>
      {/* <div className={styles.right_side}> */}
        <img src={thirdImg} />
        <div className="right_green_square" />
      {/* </div> */}
    </div>
  </div>
);

export default Info;
