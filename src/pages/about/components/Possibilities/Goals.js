import Button from "../../../../components/Button/Button";
import MarkedList from "../../../../components/MarkedList/MarkedList";
import styles from "./Goals.module.scss";

// const items = [
//   "Выполнение 	клинических исследований для улучшения диагностики и терапии онкологических 	заболеваний.",
//   "Проведение 	фундаментальных и прикладных исследований, 	направленных на углубление знаний в 	онкологии и разработку новых методов 	лечения.",
//   "Вклад 	в развитие здравоохранения и медицинской	науки на национальном и международном 	уровнях.",
//   "Сохранение	и укрепление здоровья наших пациентов 	через внедрение инновационных медицинских технологий и подходов.",
//   "Подготовка 	и повышение квалификации высококлассных 	специалистов в области медицины и 	научных исследований.",
// ];

const items = [
  <>
    <div className={styles.card_title}>Современное оборудование:</div>
    <div>
      Наш центр оснащен передовым медицинским оборудованием, что позволяет
      проводить точную диагностику и эффективное лечение.
    </div>
  </>,
  <>
    <div className={styles.card_title}>Научные разработки:</div>
    <div>
      Мы разрабатываем и внедряем новые технологии и методики в области
      диагностики и лечения злокачественных опухолей, а также активно занимаемся
      профилактикой онкологических заболеваний.
    </div>
  </>,
  <>
    <div className={styles.card_title}>Национальные программы:</div>
    <div>
      Участвуем в разработке национальных программ скрининга в  онкологии
      совместно с профессиональным сообществом и Минздравом РФ.
    </div>
  </>,
];

const Possibilities = () => (
  <div className="hr_pd">
    <div className={styles.container}>
      <div className={styles.block} style={{ paddingRight: "20px" }}>
        <h2>Наши уникальные возможности:</h2>
        <div>
          <p>
            Онкоцентр имени Марченко стремится не только к оказанию
            высококачественной медицинской помощи, но и к развитию
            здравоохранения и медицинской науки в России. Мы гордимся нашими
            достижениями и продолжаем работать над улучшением качества жизни
            наших пациентов.
          </p>
        </div>
        <div className={styles.buttons}>
          <Button title="Запись на прием" isGreen />
          <Button title="Звонок в центр" isDefault />
        </div>
      </div>
      <div className={styles.block}>
        <MarkedList items={items} />
      </div>
    </div>
  </div>
);

export default Possibilities;
