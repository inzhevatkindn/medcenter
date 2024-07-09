import styles from "./Help.module.scss";
import HelpLogo from "../../../../assets/help.png";
import Button from "../../../../components/Button/Button";
import classNames from "classnames";

const Help = () => (
  <div className={classNames(styles.wrapper, "hr_pd")}>
    <div>
      <img src={HelpLogo} />
    </div>
    <div className={styles.right_side}>
      <div className={styles.title}>
        Обратитесь к нам за качественной медицинской помощью
      </div>
      <div className={styles.description}>
        <p>
          В Онкоцентре имени Марченко мы понимаем, что здоровье — это самая
          ценная часть вашей жизни. Если вы столкнулись с проблемами, связанными
          с онкологией или другими заболеваниями, наш центр — это именно
          то место, где вы получите квалифицированную помощь и поддержку.
        </p>
        <p>
          Наши специалисты с более чем 20-летним опытом работы готовы предложить
          вам передовые методы диагностики и лечения. Ежегодно тысячи пациентов
          доверяют нам своё здоровье, и мы с гордостью помогаем им на пути
          к выздоровлению. Мы предлагаем полный спектр медицинских услуг,
          начиная от рентгенологии и УЗИ, до пластической хирургии
          и косметологии.
        </p>
      </div>
      <div>
        <Button isGradient title="О нашем центре" />
      </div>
    </div>
    {/* <div></div> */}
  </div>
);

export default Help;
