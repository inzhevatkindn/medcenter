import Button from "../../../../components/Button/Button";
import styles from "./Personal.module.scss";
import PersonalImg from "../../../../assets/personal_bg.png";
import { useWindowSize } from "../../../../utils/useWindowSize";
import classNames from "classnames";

const Personal = () => {
  const { isMobile } = useWindowSize();
  return (
    <div className={styles.container}>
      {isMobile && <img src={PersonalImg} />}
      <div className={styles.info}>
        <h2>Наш персонал</h2>
        <div>
          <p>
            В Онкоцентре имени Марченко работает более 150
            высококвалифицированных специалистов, объединенных общей целью –
            сохранение и укрепление здоровья наших пациентов. Наша команда
            включает опытных врачей, медицинских сестер и технический персонал,
            которые ежедневно демонстрируют профессионализм и заботу о каждом
            пациенте.
          </p>
          <p>
            Наши врачи – это эксперты в своих областях, обладающие многолетним
            опытом и глубокими знаниями. Они регулярно проходят повышение
            квалификации, участвуют в международных конференциях и научных
            исследованиях, чтобы применять самые современные методы диагностики
            и лечения.
          </p>
          <p>
            Мы гордимся нашими достижениями и вкладом в медицину, обеспечивая
            индивидуальный подход к каждому пациенту и высокое качество
            медицинской помощи. Ваше здоровье – наша главная ценность, и мы
            готовы предложить вам лучшее, что может предоставить современная
            медицина.
          </p>
        </div>
        <div
          className={classNames("row_flex", styles.buttons)}
          style={isMobile ? { flexDirection: "column" } : { gap: "24px" }}

        >
          <Button isGreen title="Запись на приём" />
          <Button isDefault title="Звонок в центр" />
        </div>
      </div>
    </div>
  );
};

export default Personal;
