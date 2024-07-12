import classNames from "classnames";
import styles from "./Help.module.scss";
import HelpLogo from "../../../../assets/resources.png";
import MobileHelpLogo from "../../../../assets/help_mobile.png";
import Button from "../../../../components/Button/Button";
import { useWindowSize } from "../../../../utils/useWindowSize";

const Resources = () => {
  const { isMobile } = useWindowSize();
  return (
    <div className={classNames(styles.wrapper, "hr_pd")}>
      {isMobile && (
        <div className={styles.btn_container}>
          <Button isGreen title="О нашем центре" />
        </div>
      )}
      <div>
        <div className={styles.title}>Наши достижения и ресурсы</div>
        <div className={styles.description}>
          <p>
            В нашем центре работают более 150 высококвалифицированных
            специалистов, включая врачей, медсестёр и технический персонал.
          </p>
          <p>
            Мы  активно участвуем в подготовке высококвалифицированных научных
            и  медицинских кадров, сотрудничая с  ведущими медицинскими
            университетами и академиями.
          </p>
          <p>
            Мы  проводим фундаментальные и прикладные исследования в области
            онкологии, изучая биологию опухолевых клеток, механизмы
            канцерогенеза и опухолевой прогрессии. Наши исследования охватывают
            молекулярные, вирусологические, химико-физические, генетические,
            клеточные и иммунологические аспекты.
          </p>
        </div>
      </div>
      <div className={styles.right_side}>
        <img src={isMobile ? MobileHelpLogo : HelpLogo} />
        <div className="right_green_square" />
        {isMobile && <div className="green_sq" />}
      </div>
    </div>
  );
};

export default Resources;
