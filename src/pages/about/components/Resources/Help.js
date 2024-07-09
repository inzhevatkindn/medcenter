import styles from "./Help.module.scss";
import HelpLogo from "../../../../assets/resources.png";
import Button from "../../../../components/Button/Button";
import classNames from "classnames";

const Resources = () => (
  <div className={classNames(styles.wrapper, "hr_pd")}>
    <div>
      <div className={styles.title}>Наши достижения и ресурсы</div>
      <div className={styles.description}>
        <p>
          В нашем центре работают более 150 высококвалифицированных
          специалистов, включая врачей, медсестёр и технический персонал.
        </p>
        <p>
          Мы  активно участвуем в подготовке высококвалифицированных научных и 
          медицинских кадров, сотрудничая с  ведущими медицинскими
          университетами и академиями.
        </p>
        <p>
          Мы  проводим фундаментальные и прикладные исследования в области
          онкологии, изучая биологию опухолевых клеток, механизмы канцерогенеза
          и опухолевой прогрессии. Наши исследования охватывают молекулярные,
          вирусологические, химико-физические, генетические, клеточные
          и иммунологические аспекты.
        </p>
      </div>
    </div>
    <div className={styles.right_side}>
      <img src={HelpLogo} />
      <div className="right_green_square" />
    </div>
    {/* <div></div> */}
  </div>
);

export default Resources;
