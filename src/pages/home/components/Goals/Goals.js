import Button from "../../../../components/Button/Button";
import MarkedList from "../../../../components/MarkedList/MarkedList";
import styles from "./Goals.module.scss";
import ArrowIcon from "../../../../assets/arrow.svg";
import { useWindowSize } from "../../../../utils/useWindowSize";

const items = [
  "Выполнение 	клинических исследований для улучшения диагностики и терапии онкологических 	заболеваний.",
  "Проведение 	фундаментальных и прикладных исследований, 	направленных на углубление знаний в 	онкологии и разработку новых методов 	лечения.",
  "Вклад 	в развитие здравоохранения и медицинской	науки на национальном и международном 	уровнях.",
  "Сохранение	и укрепление здоровья наших пациентов 	через внедрение инновационных медицинских технологий и подходов.",
  "Подготовка 	и повышение квалификации высококлассных 	специалистов в области медицины и 	научных исследований.",
];

const Goals = () => {
  const { isMobile } = useWindowSize();
  return (
    <div className="hr_pd">
      <div className={styles.container}>
        <div
          className={styles.block}
          style={isMobile ? {} : { paddingRight: "20px" }}
        >
          <h2>Наши цели</h2>
          <div>
            <p>
              В Онкоцентре имени Марченко мы стремимся не только к оказанию
              высококачественной медицинской помощи, но и к развитию науки
              и образования в области онкологии. Наши ключевые цели включают
            </p>
            {!isMobile && (
              <p>
                Мы верим, что наш вклад в науку помогает не только нашим
                пациентам, но и обществу в целом, способствуя созданию более
                здорового и безопасного будущего.
              </p>
            )}
          </div>
          {!isMobile && <Button title="Запись на приём" isGreen />}
          {!isMobile && <ArrowIcon />}
        </div>
        <div className={styles.block}>
          <MarkedList items={items} />
        </div>
        {isMobile && (
          <>
            <div className={styles.block}>
              <p style={{ marginBottom: '24px' }}>
                Мы верим, что наш вклад в науку помогает не только нашим
                пациентам, но и обществу в целом, способствуя созданию более
                здорового и безопасного будущего.
              </p>
            </div>
            <Button title="Запись на приём" isGreen />
          </>
        )}
      </div>
    </div>
  );
};

export default Goals;
