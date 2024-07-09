import styles from "./MarkedList.module.scss";

const MarkedList = ({ items }) => (
  <div className={styles.timeline}>
    {items.map((item, index) => (
      <div className={styles.timeline_item} key={index}>
        <div className={styles.timeline_dot}></div>
        <div className={styles.timeline_content}>{item}</div>
      </div>
    ))}
  </div>
);

export default MarkedList;
